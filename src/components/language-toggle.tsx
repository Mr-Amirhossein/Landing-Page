"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Check } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'

interface Language {
  code: 'en' | 'fa'
  name: string
  nativeName: string
  flag: string
  dir: 'ltr' | 'rtl'
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    dir: 'ltr'
  },
  {
    code: 'fa',
    name: 'Persian',
    nativeName: 'فارسی',
    flag: '🇮🇷',
    dir: 'rtl'
  }
]

// n8n webhook configuration
const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://your-n8n-instance.com/webhook/language-change'
const N8N_API_KEY = process.env.NEXT_PUBLIC_N8N_API_KEY

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const currentLang = languages.find(lang => lang.code === language) || languages[0]

  const handleLanguageChange = async (newLanguage: 'en' | 'fa') => {
    if (newLanguage === language) return
    
    setIsLoading(true)
    setIsOpen(false)
    
    try {
      // Update local language
      setLanguage(newLanguage)
      
      // Send language change event to n8n
      if (N8N_WEBHOOK_URL && N8N_WEBHOOK_URL !== 'https://your-n8n-instance.com/webhook/language-change') {
        await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(N8N_API_KEY && { 'Authorization': `Bearer ${N8N_API_KEY}` })
          },
          body: JSON.stringify({
            event: 'language_changed',
            timestamp: new Date().toISOString(),
            data: {
              previousLanguage: language,
              newLanguage: newLanguage,
              userAgent: navigator.userAgent,
              url: window.location.href,
              // Additional analytics data
              screenResolution: `${window.screen.width}x${window.screen.height}`,
              viewport: `${window.innerWidth}x${window.innerHeight}`,
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              // User preferences
              preferences: {
                theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
                reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
              }
            }
          })
        }).catch(error => {
          console.error('Failed to send language change to n8n:', error)
        })
      }
      
      // Store language preference in localStorage (already handled by context)
      // Send to your backend API if needed
      if (process.env.NEXT_PUBLIC_API_URL) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/preferences`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            language: newLanguage
          })
        }).catch(error => {
          console.error('Failed to save language preference:', error)
        })
      }
      
    } catch (error) {
      console.error('Error changing language:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="h-9 px-3 hover:bg-muted/50 transition-colors"
        disabled={isLoading}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">{currentLang.flag}</span>
        <span className="hidden sm:inline-block ml-2 text-sm">
          {currentLang.code.toUpperCase()}
        </span>
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 rounded-xl bg-background border border-border shadow-lg z-50 overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="w-full px-4 py-3 hover:bg-muted/50 transition-colors flex items-center justify-between group"
                  disabled={isLoading}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{lang.flag}</span>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-foreground">{lang.name}</span>
                      <span className="text-xs text-muted-foreground">{lang.nativeName}</span>
                    </div>
                  </div>
                  {language === lang.code && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

// Hook for n8n integration
export function useN8nLanguageTracking() {
  const { language } = useLanguage()
  
  React.useEffect(() => {
    // Track page views with language info
    if (N8N_WEBHOOK_URL && N8N_WEBHOOK_URL !== 'https://your-n8n-instance.com/webhook/language-change') {
      fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(N8N_API_KEY && { 'Authorization': `Bearer ${N8N_API_KEY}` })
        },
        body: JSON.stringify({
          event: 'page_view',
          timestamp: new Date().toISOString(),
          data: {
            language: language,
            url: window.location.href,
            referrer: document.referrer,
            title: document.title
          }
        })
      }).catch(error => {
        console.error('Failed to track page view:', error)
      })
    }
  }, [language])
}