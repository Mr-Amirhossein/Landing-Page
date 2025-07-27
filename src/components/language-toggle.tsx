"use client"

import React from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en')
  }
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="text-foreground hover:text-primary transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="h-5 w-5" />
      <span className="ml-1 text-xs font-medium">
        {language === 'en' ? 'FA' : 'EN'}
      </span>
    </Button>
  )
}