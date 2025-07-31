# n8n Language Integration Guide

This guide explains how to integrate Civilaris Global's language switching functionality with n8n workflow automation.

## Overview

The language toggle component sends events to n8n whenever a user changes their language preference. This enables you to:

- Track language preferences and usage patterns
- Trigger automated workflows based on language changes
- Send language-specific communications
- Sync preferences across multiple systems
- Generate analytics and reports

## Setup

### 1. Environment Variables

Add these variables to your `.env.local` file:

```env
# n8n Webhook URL for receiving language events from the frontend
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/language-change

# Optional: API key for authentication
NEXT_PUBLIC_N8N_API_KEY=your-api-key

# Internal n8n webhook URL (for server-to-server communication)
N8N_INTERNAL_WEBHOOK_URL=https://your-n8n-instance.com/webhook/internal/language

# Secret for validating n8n webhook calls to your API
N8N_WEBHOOK_SECRET=your-webhook-secret

# Your API URL (if you have a separate backend)
NEXT_PUBLIC_API_URL=https://api.civilarisglobal.com
```

### 2. n8n Webhook Setup

Create a webhook in n8n to receive language change events:

1. Add a **Webhook** node to your workflow
2. Set the HTTP Method to `POST`
3. Copy the webhook URL and add it to `NEXT_PUBLIC_N8N_WEBHOOK_URL`
4. (Optional) Enable authentication and add the token to `NEXT_PUBLIC_N8N_API_KEY`

## Event Data Structure

### Language Change Event

When a user changes their language, this data is sent to n8n:

```json
{
  "event": "language_changed",
  "timestamp": "2024-01-20T10:30:00.000Z",
  "data": {
    "previousLanguage": "en",
    "newLanguage": "fa",
    "userAgent": "Mozilla/5.0...",
    "url": "https://civilarisglobal.com/about",
    "screenResolution": "1920x1080",
    "viewport": "1200x800",
    "timezone": "Asia/Dubai",
    "preferences": {
      "theme": "light",
      "reducedMotion": false
    }
  }
}
```

### Page View Event

Page views are tracked with language information:

```json
{
  "event": "page_view",
  "timestamp": "2024-01-20T10:30:00.000Z",
  "data": {
    "language": "fa",
    "url": "https://civilarisglobal.com/services",
    "referrer": "https://google.com",
    "title": "Services - Civilaris Global"
  }
}
```

## n8n Workflow Examples

### 1. Language Analytics Workflow

```
Webhook → Set (Format Data) → Google Sheets (Append Row)
```

Track language preferences in a spreadsheet for analytics.

### 2. Welcome Email Workflow

```
Webhook → Switch (Check Language) → Send Email (Language-specific template)
```

Send welcome emails in the user's preferred language.

### 3. CRM Sync Workflow

```
Webhook → HTTP Request (Update CRM) → Slack (Notify Team)
```

Update customer language preferences in your CRM system.

### 4. Multi-system Sync

```
Webhook → Set → Split In Batches → HTTP Request (Multiple Systems)
```

Sync language preferences across multiple platforms.

## API Endpoints

### GET /api/n8n/language

Retrieve current language preferences:

```bash
curl https://civilarisglobal.com/api/n8n/language \
  -H "Cookie: sessionId=xxx"
```

Response:
```json
{
  "success": true,
  "data": {
    "currentLanguage": "en",
    "languageHistory": [...],
    "preferences": {...}
  }
}
```

### POST /api/n8n/language

Send language events (used internally by the frontend):

```bash
curl -X POST https://civilarisglobal.com/api/n8n/language \
  -H "Content-Type: application/json" \
  -d '{
    "event": "language_changed",
    "timestamp": "2024-01-20T10:30:00.000Z",
    "data": {...}
  }'
```

### PUT /api/n8n/language

Webhook endpoint for n8n to trigger actions:

```bash
curl -X PUT https://civilarisglobal.com/api/n8n/language \
  -H "X-API-Key: your-webhook-secret" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "update_preference",
    "userId": "user123",
    "language": "fa"
  }'
```

## Available Actions

The PUT endpoint supports these actions:

1. **update_preference**: Update a user's language preference
2. **send_notification**: Send a language-specific notification
3. **sync_preferences**: Sync preferences across systems

## Security Considerations

1. **API Keys**: Always use API keys for webhook authentication
2. **HTTPS**: Ensure all webhook URLs use HTTPS
3. **Rate Limiting**: Implement rate limiting to prevent abuse
4. **Validation**: Validate all incoming data
5. **CORS**: Configure CORS policies appropriately

## Testing

### Test Language Change Event

```javascript
// In browser console
fetch('https://your-n8n-instance.com/webhook/language-change', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-api-key'
  },
  body: JSON.stringify({
    event: 'language_changed',
    timestamp: new Date().toISOString(),
    data: {
      previousLanguage: 'en',
      newLanguage: 'fa',
      url: window.location.href
    }
  })
})
```

### Test with n8n

1. Create a test workflow with a Webhook node
2. Set up a Respond to Webhook node to return the received data
3. Test the language toggle on your website
4. Check the execution history in n8n

## Troubleshooting

### Events not reaching n8n

1. Check browser console for errors
2. Verify webhook URL is correct
3. Check n8n webhook is active
4. Verify API key if authentication is enabled

### CORS Issues

Add your domain to n8n's CORS whitelist or use the API endpoint as a proxy.

### Missing Data

Ensure all environment variables are set correctly and the component has access to required browser APIs.

## Advanced Use Cases

### 1. A/B Testing

Track language preferences to optimize content and UI for different language groups.

### 2. Personalization

Use language data to personalize user experience across your platform.

### 3. Analytics Dashboard

Build a real-time dashboard showing language usage patterns.

### 4. Automated Translations

Trigger translation workflows when new content is added.

### 5. Customer Support

Route support tickets to language-appropriate agents.

## Support

For help with the integration:

1. Check n8n documentation: https://docs.n8n.io
2. Review the component code in `/src/components/language-toggle.tsx`
3. Contact Civilaris Global support

---

Last updated: January 2024