import { NextRequest, NextResponse } from 'next/server'

// This endpoint can be called by n8n to get language preference data
export async function GET(request: NextRequest) {
  try {
    // Get user identifier from cookies or headers
    const userId = request.cookies.get('userId')?.value
    const sessionId = request.cookies.get('sessionId')?.value
    
    // In a real application, you would fetch this from a database
    // For now, we'll return mock data
    const languageData = {
      userId,
      sessionId,
      currentLanguage: 'en', // This would come from database
      languageHistory: [
        { language: 'en', timestamp: new Date().toISOString() }
      ],
      preferences: {
        autoDetect: false,
        fallbackLanguage: 'en'
      }
    }
    
    return NextResponse.json({
      success: true,
      data: languageData
    })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch language data' },
      { status: 500 }
    )
  }
}

// This endpoint receives language change events from the frontend
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request
    if (!body.event || !body.data) {
      return NextResponse.json(
        { success: false, error: 'Invalid request body' },
        { status: 400 }
      )
    }
    
    // Process the language change event
    const { event, timestamp, data } = body
    
    // Log the event (in production, this would go to a database or analytics service)
    console.log('Language event received:', {
      event,
      timestamp,
      ...data
    })
    
    // Send to n8n webhook if configured
    const n8nWebhookUrl = process.env.N8N_INTERNAL_WEBHOOK_URL
    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': process.env.N8N_API_KEY || ''
          },
          body: JSON.stringify({
            source: 'civilaris-website',
            event: event,
            timestamp: timestamp,
            data: {
              ...data,
              // Add server-side data
              serverTimestamp: new Date().toISOString(),
              ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
              userAgent: request.headers.get('user-agent')
            }
          })
        })
      } catch (n8nError) {
        console.error('Failed to send to n8n:', n8nError)
        // Don't fail the request if n8n is down
      }
    }
    
    // Store in database (implement based on your database choice)
    // await db.languageEvents.create({ ... })
    
    return NextResponse.json({
      success: true,
      message: 'Language event recorded successfully'
    })
  } catch {
    console.error('Language API error')
    return NextResponse.json(
      { success: false, error: 'Failed to process language event' },
      { status: 500 }
    )
  }
}

// Webhook endpoint for n8n to trigger actions
export async function PUT(request: NextRequest) {
  try {
    // Verify n8n webhook signature
    const apiKey = request.headers.get('x-api-key')
    if (apiKey !== process.env.N8N_WEBHOOK_SECRET) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const body = await request.json()
    const { action, userId, language } = body
    
    switch (action) {
      case 'update_preference':
        // Update user language preference in database
        console.log(`Updating language preference for user ${userId} to ${language}`)
        // await db.users.update({ where: { id: userId }, data: { language } })
        break
        
      case 'send_notification':
        // Send language-specific notification
        console.log(`Sending notification in ${language} to user ${userId}`)
        break
        
      case 'sync_preferences':
        // Sync language preferences across systems
        console.log(`Syncing language preferences for user ${userId}`)
        break
        
      default:
        return NextResponse.json(
          { success: false, error: 'Unknown action' },
          { status: 400 }
        )
    }
    
    return NextResponse.json({
      success: true,
      message: `Action ${action} completed successfully`
    })
  } catch {
    console.error('Webhook error')
    return NextResponse.json(
      { success: false, error: 'Failed to process webhook' },
      { status: 500 }
    )
  }
}