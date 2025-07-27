"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'en' | 'fa'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const translations = {
  en: {
    // Company
    companyName: "Civilaris Global",
    tagline: "Smarter Tools, Stronger Projects. Global Trust.",
    
    // Navigation
    home: "Home",
    about: "About Us",
    services: "Services",
    industries: "Industries",
    partners: "Partners",
    contact: "Contact",
    portfolio: "Portfolio",
    team: "Team",
    blog: "Blog",
    
    // Hero Section
    learnMore: "LEARN MORE",
    watchVideo: "Watch Video",
    getQuote: "Get Quote",
    
    // Stats
    statsProducts: "Products",
    statsCountries: "Countries",
    statsExperience: "Years of Experience",
    statsProjects: "Projects Completed",
    statsClients: "Happy Clients",
    statsCertifications: "Certifications",
    
    // About Section
    aboutTitle: "Building Tomorrow's Infrastructure Today",
    aboutDescription: "Civilaris Global isn't just a supplier – we're a trusted partner to engineers, builders, and procurement teams across borders. With a sharp eye for quality and deep understanding of construction needs, we make sourcing smarter, faster, and more reliable.",
    aboutMission: "Our Mission",
    aboutVision: "Our Vision",
    aboutValues: "Our Values",
    
    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive solutions for your construction needs",
    service1Title: "Product Sourcing",
    service1Desc: "Access to over 300+ premium construction products from trusted manufacturers worldwide.",
    service2Title: "Quality Assurance",
    service2Desc: "Rigorous testing and certification processes to ensure the highest standards.",
    service3Title: "Logistics Support",
    service3Desc: "Efficient supply chain management and timely delivery across 6 countries.",
    service4Title: "Technical Consultation",
    service4Desc: "Expert guidance from our team of experienced engineers and specialists.",
    
    // Projects
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Showcasing our commitment to excellence",
    viewProject: "View Project",
    allProjects: "View All Projects",
    
    // Testimonials
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Trusted by industry leaders worldwide",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about our services",
    
    // Team
    teamTitle: "Our Expert Team",
    teamSubtitle: "Meet the professionals behind Civilaris Global",
    
    // Global Presence
    globalTitle: "Global Presence",
    globalSubtitle: "Serving clients across continents",
    
    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "Let's discuss your project needs",
    contactName: "Your Name",
    contactEmail: "Your Email",
    contactPhone: "Phone Number",
    contactCompany: "Company",
    contactMessage: "Your Message",
    contactSend: "Send Message",
    contactInfo: "Contact Information",
    contactAddress: "Address",
    contactHours: "Business Hours",
    
    // Footer
    footerAbout: "About Civilaris",
    footerServices: "Services",
    footerSupport: "Support",
    footerLegal: "Legal",
    footerRights: "All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerCookies: "Cookie Policy",
    footerNewsletter: "Subscribe to Newsletter",
    footerNewsletterDesc: "Get the latest updates and industry insights",
    footerSubscribe: "Subscribe",
    
    // Common
    loading: "Loading...",
    readMore: "Read More",
    getStarted: "Get Started",
    contactUs: "Contact Us",
    viewAll: "View All",
    
    // CTA
    ctaTitle: "Ready to Start Your Project?",
    ctaSubtitle: "Join thousands of satisfied clients worldwide",
    ctaButton: "Get Started Today",
    
    // Industries
    industriesTitle: "Industries We Serve",
    industriesSubtitle: "Specialized solutions across multiple sectors"
  },
  fa: {
    // Company
    companyName: "سیویلاریس گلوبال",
    tagline: "ابزارهای هوشمندتر، پروژه‌های قوی‌تر. اعتماد جهانی.",
    
    // Navigation
    home: "خانه",
    about: "درباره ما",
    services: "خدمات",
    industries: "صنایع",
    partners: "شرکا",
    contact: "تماس",
    portfolio: "نمونه کارها",
    team: "تیم",
    blog: "وبلاگ",
    
    // Hero Section
    learnMore: "بیشتر بدانید",
    watchVideo: "تماشای ویدیو",
    getQuote: "دریافت قیمت",
    
    // Stats
    statsProducts: "محصول",
    statsCountries: "کشور",
    statsExperience: "سال تجربه",
    statsProjects: "پروژه تکمیل شده",
    statsClients: "مشتری راضی",
    statsCertifications: "گواهینامه",
    
    // About Section
    aboutTitle: "ساخت زیرساخت‌های فردا از امروز",
    aboutDescription: "سیویلاریس گلوبال تنها یک تأمین‌کننده نیست – ما شریک مورد اعتماد مهندسان، سازندگان و تیم‌های تدارکات در سراسر جهان هستیم.",
    aboutMission: "مأموریت ما",
    aboutVision: "چشم‌انداز ما",
    aboutValues: "ارزش‌های ما",
    
    // Services
    servicesTitle: "خدمات ما",
    servicesSubtitle: "راه‌حل‌های جامع برای نیازهای ساخت و ساز شما",
    service1Title: "تأمین محصول",
    service1Desc: "دسترسی به بیش از 300 محصول ساختمانی ممتاز از تولیدکنندگان معتبر جهانی.",
    service2Title: "تضمین کیفیت",
    service2Desc: "فرآیندهای آزمایش و صدور گواهینامه دقیق برای اطمینان از بالاترین استانداردها.",
    service3Title: "پشتیبانی لجستیک",
    service3Desc: "مدیریت کارآمد زنجیره تأمین و تحویل به موقع در 6 کشور.",
    service4Title: "مشاوره فنی",
    service4Desc: "راهنمایی تخصصی از تیم مهندسان و متخصصان با تجربه ما.",
    
    // Projects
    projectsTitle: "پروژه‌های برجسته",
    projectsSubtitle: "نمایش تعهد ما به تعالی",
    viewProject: "مشاهده پروژه",
    allProjects: "مشاهده همه پروژه‌ها",
    
    // Testimonials
    testimonialsTitle: "نظرات مشتریان ما",
    testimonialsSubtitle: "مورد اعتماد رهبران صنعت در سراسر جهان",
    
    // FAQ
    faqTitle: "سؤالات متداول",
    faqSubtitle: "همه چیزهایی که باید در مورد خدمات ما بدانید",
    
    // Team
    teamTitle: "تیم متخصص ما",
    teamSubtitle: "با متخصصان پشت سیویلاریس گلوبال آشنا شوید",
    
    // Global Presence
    globalTitle: "حضور جهانی",
    globalSubtitle: "خدمت به مشتریان در سراسر قاره‌ها",
    
    // Contact
    contactTitle: "در تماس باشید",
    contactSubtitle: "بیایید در مورد نیازهای پروژه شما صحبت کنیم",
    contactName: "نام شما",
    contactEmail: "ایمیل شما",
    contactPhone: "شماره تلفن",
    contactCompany: "شرکت",
    contactMessage: "پیام شما",
    contactSend: "ارسال پیام",
    contactInfo: "اطلاعات تماس",
    contactAddress: "آدرس",
    contactHours: "ساعات کاری",
    
    // Footer
    footerAbout: "درباره سیویلاریس",
    footerServices: "خدمات",
    footerSupport: "پشتیبانی",
    footerLegal: "قانونی",
    footerRights: "تمامی حقوق محفوظ است.",
    footerPrivacy: "سیاست حفظ حریم خصوصی",
    footerTerms: "شرایط خدمات",
    footerCookies: "سیاست کوکی",
    footerNewsletter: "عضویت در خبرنامه",
    footerNewsletterDesc: "آخرین به‌روزرسانی‌ها و بینش‌های صنعتی را دریافت کنید",
    footerSubscribe: "عضویت",
    
    // Common
    loading: "در حال بارگذاری...",
    readMore: "بیشتر بخوانید",
    getStarted: "شروع کنید",
    contactUs: "تماس با ما",
    viewAll: "مشاهده همه",
    
    // CTA
    ctaTitle: "آماده شروع پروژه خود هستید؟",
    ctaSubtitle: "به هزاران مشتری راضی در سراسر جهان بپیوندید",
    ctaButton: "همین امروز شروع کنید",
    
    // Industries
    industriesTitle: "صنایعی که خدمت می‌کنیم",
    industriesSubtitle: "راه‌حل‌های تخصصی در بخش‌های مختلف"
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  
  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem('civilaris-language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'fa')) {
      setLanguage(savedLang)
    }
  }, [])
  
  useEffect(() => {
    // Update HTML attributes
    document.documentElement.lang = language
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr'
    
    // Save language preference
    localStorage.setItem('civilaris-language', language)
  }, [language])
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }
  
  const dir = language === 'fa' ? 'rtl' : 'ltr'
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}