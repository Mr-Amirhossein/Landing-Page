/**
 * کامپوننت چت‌بات هوشمند سیویلاریس گلوبال
 * ربات گفتگوی مبتنی بر هوش مصنوعی برای پاسخگویی به سوالات کاربران
 * 
 * ویژگی‌های کامپوننت:
 * - رابط کاربری مدرن و جذاب
 * - انیمیشن‌های روان و تعاملی
 * - پشتیبانی از زبان فارسی و انگلیسی
 * - قابلیت تایپ زنده (typing indicator)
 * - حافظه مکالمات
 * - پاسخ‌های هوشمند بر اساس محتوای سایت
 * - قابلیت بستن و باز کردن
 * - طراحی واکنش‌گرا برای تمام دستگاه‌ها
 * 
 * موقعیت: گوشه پایین راست صفحه
 * دسترسی: در تمام صفحات سایت
 */

"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2
} from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
  type?: 'text' | 'quick-reply' | 'contact'
}

interface QuickReply {
  id: string
  text: string
  value: string
}

const quickReplies: { [key: string]: QuickReply[] } = {
  en: [
    { id: '1', text: 'Our Services', value: 'services' },
    { id: '2', text: 'Contact Info', value: 'contact' },
    { id: '3', text: 'About Company', value: 'about' },
    { id: '4', text: 'Get Quote', value: 'pricing' },
    { id: '5', text: 'Industries', value: 'industries' },
    { id: '6', text: 'Partners', value: 'partners' }
  ],
  fa: [
    { id: '1', text: 'خدمات ما', value: 'services' },
    { id: '2', text: 'اطلاعات تماس', value: 'contact' },
    { id: '3', text: 'درباره شرکت', value: 'about' },
    { id: '4', text: 'دریافت قیمت', value: 'pricing' },
    { id: '5', text: 'صنایع', value: 'industries' },
    { id: '6', text: 'شرکای ما', value: 'partners' }
  ]
}

// پاسخ‌های از پیش تعریف شده بر اساس کلیدواژه‌ها
const botResponses: { [key: string]: { en: string; fa: string } } = {
  'services': {
    en: 'Civilaris Global provides construction material sourcing, quality assurance, logistics support, and technical consultation. We offer 300+ premium products across 6 countries with ISO certification and 24/7 support.',
    fa: 'سیویلاریس گلوبال ارائه‌دهنده خدمات تأمین مواد ساختمانی، تضمین کیفیت، پشتیبانی لجستیک و مشاوره فنی است. ما بیش از 300 محصول ممتاز را در 6 کشور ارائه می‌دهیم.'
  },
  'contact': {
    en: 'You can reach us through:\n📞 Phone: +971 4 123 4567\n📧 Email: info@civilarisglobal.com\n📍 Address: Dubai, UAE\n🕰️ Hours: Sun-Thu 8AM-6PM',
    fa: 'برای تماس با ما از راه‌های زیر استفاده کنید:\n📞 تلفن: +971 4 123 4567\n📧 ایمیل: info@civilarisglobal.com\n📍 آدرس: دبی، امارات متحده عربی\n🕰️ ساعات کار: یکشنبه-پنجشنبه 8-18'
  },
  'about': {
    en: 'Civilaris Global is a trusted partner to engineers, builders, and procurement teams worldwide. With 10 years of experience, we deliver premium quality and comprehensive services across the construction industry.',
    fa: 'سیویلاریس گلوبال شریک مورد اعتماد مهندسان، سازندگان و تیم‌های تدارکات در سراسر جهان است. با 10 سال تجربه، کیفیت ممتاز و خدمات جامع ارائه می‌دهیم.'
  },
  'pricing': {
    en: 'For product and service pricing, please fill out our contact form or reach out to our sales team. Pricing varies based on project type and order volume. We offer competitive rates and flexible payment terms.',
    fa: 'برای قیمت‌گیری محصولات و خدمات، لطفاً فرم تماس را پر کنید یا با تیم فروش تماس بگیرید. قیمت‌ها بر اساس نوع پروژه و حجم سفارش متغیر است.'
  },
  'industries': {
    en: 'We serve 8 major industries: Commercial Construction, Residential Development, Industrial Facilities, Infrastructure & Transportation, Marine & Coastal, Energy & Utilities, Hospitality & Tourism, and Retail & Commercial sectors.',
    fa: 'ما در 8 صنعت عمده خدمات ارائه می‌دهیم: ساختمان تجاری، توسعه مسکونی، تأسیسات صنعتی، زیرساخت و حمل‌ونقل، دریایی و ساحلی، انرژی و خدمات عمومی، هتلداری و گردشگری، و خرده‌فروشی و تجاری.'
  },
  'partners': {
    en: 'We partner with global industry leaders including LafargeHolcim, ArcelorMittal, Saint-Gobain, Knauf, BASF, Sika, Hilti, and Weber. These partnerships ensure access to premium products and cutting-edge technologies.',
    fa: 'ما با برندهای مطرح جهانی شامل LafargeHolcim، ArcelorMittal، Saint-Gobain، Knauf، BASF، Sika، Hilti و Weber شراکت داریم. این شراکت‌ها دسترسی به محصولات ممتاز و فناوری‌های پیشرفته را تضمین می‌کنند.'
  },
  'quality': {
    en: 'Quality is our top priority. We maintain ISO 9001 certification, conduct rigorous third-party testing, provide quality guarantees, and ensure full compliance documentation for all products.',
    fa: 'کیفیت اولویت اول ماست. ما دارای گواهینامه ISO 9001 هستیم، آزمایشات دقیق طرف سوم انجام می‌دهیم، تضمین کیفیت ارائه می‌دهیم و مستندات کامل مطابقت را تضمین می‌کنیم.'
  },
  'delivery': {
    en: 'We offer express delivery options, real-time tracking, secure packaging, and door-to-door service across 6 countries. Our on-time delivery rate is 98% with 24/7 logistics support.',
    fa: 'ما گزینه‌های تحویل فوری، پیگیری بلادرنگ، بسته‌بندی ایمن و خدمات درب تا درب در 6 کشور ارائه می‌دهیم. نرخ تحویل به‌موقع ما 98% با پشتیبانی 24/7 است.'
  },
  'default': {
    en: 'Hello! 👋 I\'m Civilaris Global\'s AI assistant. How can I help you today?',
    fa: 'سلام! 👋 من دستیار هوشمند سیویلاریس گلوبال هستم. چطور می‌تونم کمکتون کنم؟'
  },
  'greeting': {
    en: 'Hello and welcome! 🌟 I\'m happy to chat with you. How can I assist you today?',
    fa: 'سلام و خوش آمدید! 🌟 از اینکه باهاتون صحبت می‌کنم خوشحالم. چطور می‌تونم کمکتون کنم؟'
  },
  'thanks': {
    en: 'Thank you for your message! 😊 For detailed information, please contact our support team or use the quick help menu.',
    fa: 'متشکرم از پیامتون! 😊 برای اطلاعات دقیق‌تر، لطفاً با تیم پشتیبانی تماس بگیرید یا از منوی راهنمای سریع استفاده کنید.'
  },
  'help': {
    en: 'I can help you with:\n• Information about our services\n• Contact details\n• Company information\n• Pricing inquiries\n• Industry solutions\n\nWhat would you like to know?',
    fa: 'می‌تونم در این موارد کمکتون کنم:\n• اطلاعات درباره خدمات ما\n• جزئیات تماس\n• اطلاعات شرکت\n• سوالات قیمت‌گذاری\n• راه‌حل‌های صنعتی\n\nچه چیزی می‌خواید بدونید؟'
  },
  'location': {
    en: 'Civilaris Global is headquartered in Dubai, UAE 🇦🇪\n\n📍 Main Office: Business Bay, Dubai\n🌍 We serve clients across 6 countries\n🏢 Regional offices in major business hubs',
    fa: 'دفتر مرکزی سیویلاریس گلوبال در دبی، امارات متحده عربی قرار دارد 🇦🇪\n\n📍 دفتر اصلی: بیزینس بی، دبی\n🌍 خدمات ما در 6 کشور ارائه می‌شود\n🏢 دفاتر منطقه‌ای در مراکز تجاری مهم'
  },
  'experience': {
    en: 'With over 10 years of experience, Civilaris Global has:\n\n✅ Completed 500+ projects\n✅ Served 200+ clients worldwide\n✅ Maintained 98% on-time delivery rate\n✅ Achieved ISO 9001 certification',
    fa: 'با بیش از 10 سال تجربه، سیویلاریس گلوبال:\n\n✅ بیش از 500 پروژه تکمیل کرده\n✅ به بیش از 200 مشتری در سراسر جهان خدمات ارائه داده\n✅ نرخ تحویل به‌موقع 98 درصدی داشته\n✅ گواهینامه ISO 9001 دریافت کرده'
  },
  'team': {
    en: 'Our expert team includes:\n\n👷‍♂️ Civil Engineers\n🔧 Technical Specialists\n📋 Quality Assurance Experts\n🚚 Logistics Coordinators\n🎯 Project Managers\n\nAll dedicated to your project success!',
    fa: 'تیم متخصص ما شامل:\n\n👷‍♂️ مهندسان عمران\n🔧 متخصصان فنی\n📋 کارشناسان تضمین کیفیت\n🚚 هماهنگ‌کنندگان لجستیک\n🎯 مدیران پروژه\n\nهمگی متعهد به موفقیت پروژه شما!'
  }
}

export function AdvancedAIChatbot() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  /**
   * اسکرول خودکار به انتهای مکالمات
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  /**
   * شبیه‌سازی تایپ ربات
   */
  const simulateTyping = () => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
    }, 1000 + Math.random() * 2000)
  }

  /**
   * تولید پاسخ هوشمند بر اساس پیام کاربر
   */
  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    // Check for services keywords
    if (message.includes('خدمات') || message.includes('service') || message.includes('خدمت')) {
      return botResponses.services[language]
    } 
    // Contact keywords
    else if (message.includes('تماس') || message.includes('contact') || message.includes('آدرس') || message.includes('address') || message.includes('phone') || message.includes('تلفن')) {
      return botResponses.contact[language]
    } 
    // About keywords
    else if (message.includes('درباره') || message.includes('شرکت') || message.includes('about') || message.includes('company') || message.includes('معرفی') || message.includes('کمپانی')) {
      return botResponses.about[language]
    } 
    // Pricing keywords
    else if (message.includes('قیمت') || message.includes('هزینه') || message.includes('price') || message.includes('cost') || message.includes('pricing') || message.includes('quote')) {
      return botResponses.pricing[language]
    }
    // Industries keywords
    else if (message.includes('صنایع') || message.includes('صنعت') || message.includes('industries') || message.includes('industry') || message.includes('sectors')) {
      return botResponses.industries[language]
    }
    // Partners keywords
    else if (message.includes('شرکا') || message.includes('همکار') || message.includes('partners') || message.includes('partnership') || message.includes('برند')) {
      return botResponses.partners[language]
    }
    // Quality keywords
    else if (message.includes('کیفیت') || message.includes('quality') || message.includes('گواهینامه') || message.includes('certification') || message.includes('iso')) {
      return botResponses.quality[language]
    }
    // Delivery keywords
    else if (message.includes('تحویل') || message.includes('ارسال') || message.includes('delivery') || message.includes('shipping') || message.includes('logistics')) {
      return botResponses.delivery[language]
    }
    // Greeting keywords
    else if (message.includes('سلام') || message.includes('hello') || message.includes('hi') || message.includes('درود') || message.includes('سلام علیکم')) {
      return botResponses.greeting[language]
    }
    // Thank you keywords
    else if (message.includes('متشکر') || message.includes('ممنون') || message.includes('thank') || message.includes('thanks') || message.includes('مرسی')) {
      return botResponses.thanks[language]
    }
    // Help keywords
    else if (message.includes('کمک') || message.includes('راهنما') || message.includes('help') || message.includes('guide') || message.includes('assistance')) {
      return botResponses.help[language]
    }
    // Location keywords
    else if (message.includes('آدرس') || message.includes('موقعیت') || message.includes('location') || message.includes('address') || message.includes('where') || message.includes('کجا')) {
      return botResponses.location[language]
    }
    // Experience keywords
    else if (message.includes('تجربه') || message.includes('سابقه') || message.includes('experience') || message.includes('history') || message.includes('years')) {
      return botResponses.experience[language]
    }
    // Team keywords
    else if (message.includes('تیم') || message.includes('کارمند') || message.includes('team') || message.includes('staff') || message.includes('employee') || message.includes('پرسنل')) {
      return botResponses.team[language]
    }
    // Default response
    else {
      return botResponses.help[language]
    }
  }

  /**
   * ارسال پیام جدید
   */
  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    simulateTyping()

    // شبیه‌سازی تأخیر در پاسخ ربات
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1500)
  }

  /**
   * کلیک روی پاسخ سریع
   */
  const handleQuickReply = (value: string) => {
    const response = (botResponses[value] && botResponses[value][language]) || botResponses.default[language]
    
    const botMessage: Message = {
      id: Date.now().toString(),
      content: response,
      sender: 'bot',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, botMessage])
  }

  /**
   * باز کردن چت‌بات و نمایش پیام خوشامدگویی
   */
  const openChatbot = () => {
    setIsOpen(true)
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        content: botResponses.default[language],
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }

  return (
    <>
      {/* دکمه شناور چت‌بات */}
      <motion.div
        className="fixed z-50 right-6 bottom-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
      >
        {!isOpen && (
          <motion.button
            onClick={openChatbot}
            className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 text-white rounded-full shadow-2xl hover:shadow-glow flex items-center justify-center group relative overflow-hidden border-2 border-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 10px 30px rgba(245, 158, 11, 0.4)',
                '0 10px 40px rgba(217, 119, 6, 0.6)',
                '0 10px 30px rgba(245, 158, 11, 0.4)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* انیمیشن پس‌زمینه */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            
            {/* آیکون اصلی */}
            <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            
            {/* نشانگر آنلاین */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg">
              <div className="w-full h-full bg-green-500 rounded-full animate-ping" />
            </div>
            
            {/* متن راهنما */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {language === 'fa' ? 'چت با ما' : 'Chat with us'}
            </div>
          </motion.button>
        )}
      </motion.div>

      {/* پنجره چت‌بات */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-50 right-6 bottom-6 w-96 max-w-[calc(100vw-3rem)] h-[32rem] bg-background/98 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ 
              scale: isMinimized ? 0.3 : 1, 
              opacity: 1, 
              y: isMinimized ? 100 : 0,
              height: isMinimized ? 60 : 512
            }}
            exit={{ scale: 0, opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* هدر چت‌بات */}
            <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background shadow-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {language === 'fa' ? 'دستیار هوشمند' : 'AI Assistant'}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {language === 'fa' ? 'آنلاین و آماده کمک' : 'Online & Ready to Help'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-8 h-8 p-0 hover:bg-muted"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 p-0 hover:bg-muted"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* ناحیه پیام‌ها */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        {/* آواتار */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                          message.sender === 'user' 
                            ? 'bg-gradient-to-br from-slate-600 to-slate-700 text-white' 
                            : 'bg-gradient-to-br from-amber-500 to-orange-600 text-white'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                        </div>
                        
                        {/* محتوای پیام */}
                        <div className={`px-4 py-3 rounded-2xl shadow-sm ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-br-sm'
                            : 'bg-gray-100 dark:bg-gray-800 text-foreground rounded-bl-sm border border-gray-200 dark:border-gray-700'
                        } ${language === 'fa' ? 'font-vazirmatn' : ''}`} style={{ direction: language === 'fa' ? 'rtl' : 'ltr' }}>
                          <p className="text-sm leading-relaxed whitespace-pre-line">
                            {message.content}
                          </p>
                          <p className={`text-xs mt-2 ${
                            message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                          }`}>
                            {message.timestamp.toLocaleTimeString(language === 'fa' ? 'fa-IR' : 'en-US', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* نشانگر تایپ */}
                  {isTyping && (
                    <motion.div
                      className="flex justify-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* پاسخ‌های سریع */}
                {messages.length <= 1 && (
                  <div className="px-4 pb-2">
                    <p className={`text-xs text-muted-foreground mb-2 ${language === 'fa' ? 'font-vazirmatn' : ''}`} style={{ direction: language === 'fa' ? 'rtl' : 'ltr' }}>
                      {language === 'fa' ? 'سوالات پرتکرار:' : 'Quick questions:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies[language].map((reply) => (
                        <Button
                          key={reply.id}
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuickReply(reply.value)}
                          className={`text-xs px-3 py-1 h-auto rounded-full border border-amber-500/30 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-200 ${language === 'fa' ? 'font-vazirmatn' : ''}`}
                        >
                          {reply.text}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ناحیه ورودی */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder={language === 'fa' ? 'پیام خود را بنویسید...' : 'Type your message...'}
                      className={`flex-1 rounded-full border-gray-300 dark:border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200 ${language === 'fa' ? 'font-vazirmatn' : ''}`}
                      style={{ direction: language === 'fa' ? 'rtl' : 'ltr' }}
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!inputValue.trim()}
                      size="sm"
                      className="w-10 h-10 p-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}