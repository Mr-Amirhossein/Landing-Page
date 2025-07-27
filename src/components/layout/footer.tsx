"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  ArrowRight,
  Award,
  Shield,
  Clock
} from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
    setEmail('')
  }
  
  const footerSections = {
    about: {
      title: t('footerAbout'),
      links: [
        { href: '/about', label: t('about') },
        { href: '/team', label: t('team') },
        { href: '/careers', label: 'Careers' },
        { href: '/news', label: 'News & Updates' }
      ]
    },
    services: {
      title: t('footerServices'),
      links: [
        { href: '/services', label: t('service1Title') },
        { href: '/services', label: t('service2Title') },
        { href: '/services', label: t('service3Title') },
        { href: '/services', label: t('service4Title') }
      ]
    },
    support: {
      title: t('footerSupport'),
      links: [
        { href: '/contact', label: t('contact') },
        { href: '/faq', label: 'FAQ' },
        { href: '/documentation', label: 'Documentation' },
        { href: '/warranty', label: 'Warranty' }
      ]
    },
    legal: {
      title: t('footerLegal'),
      links: [
        { href: '/privacy', label: t('footerPrivacy') },
        { href: '/terms', label: t('footerTerms') },
        { href: '/cookies', label: t('footerCookies') },
        { href: '/sitemap', label: 'Sitemap' }
      ]
    }
  }
  
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Globe, href: '#', label: 'Website', color: 'hover:text-primary' }
  ]
  
  const achievements = [
    { icon: Award, text: 'ISO 9001 Certified' },
    { icon: Shield, text: 'Quality Assured' },
    { icon: Clock, text: '24/7 Support' }
  ]
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
      <div className="absolute inset-0 bg-noise opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <Link href="/" className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-elevation-2">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-foreground">
                      {t('companyName')}
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Global Construction Solutions
                    </p>
                  </div>
                </Link>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('aboutDescription')}
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">+971 4 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">info@civilarisglobal.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Dubai, UAE</span>
                  </div>
                </div>
                
                {/* Achievements */}
                <div className="flex flex-wrap gap-3">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-1 glass-effect rounded-full"
                      >
                        <Icon className="w-3 h-3 text-primary" />
                        <span className="text-xs text-muted-foreground">
                          {achievement.text}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
            
            {/* Links Sections */}
            <div className="lg:col-span-6">
              <div className="grid md:grid-cols-4 gap-8">
                {Object.entries(footerSections).map(([key, section], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-semibold text-foreground mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center"
                          >
                            {link.label}
                            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {t('footerNewsletter')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('footerNewsletterDesc')}
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 pr-12 glass-effect border-primary/20 focus:border-primary rounded-xl"
                      required
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="absolute right-1 top-1 h-10 w-10 p-0 gradient-primary rounded-lg"
                      disabled={isSubscribed}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  {isSubscribed && (
                    <p className="text-xs text-green-500">
                      Successfully subscribed!
                    </p>
                  )}
                </form>
                
                {/* Social Links */}
                <div className="flex gap-3 mt-6">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border/50 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {t('companyName')}. {t('footerRights')}
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground">
                Made with ❤️ for construction professionals
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}