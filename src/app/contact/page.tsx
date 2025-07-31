"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Sparkles
} from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ContactSection } from '@/components/sections/contact'

const offices = [
  {
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Dubai International City, Business Bay',
    phone: '+971 4 123 4567',
    email: 'dubai@civilarisglobal.com',
    hours: 'Sun-Thu: 8:00 AM - 6:00 PM',
    isHeadquarters: true
  },
  {
    country: 'Saudi Arabia',
    city: 'Riyadh',
    address: 'King Fahd Road, Al Olaya District',
    phone: '+966 11 123 4567',
    email: 'riyadh@civilarisglobal.com',
    hours: 'Sun-Thu: 8:00 AM - 6:00 PM'
  },
  {
    country: 'Qatar',
    city: 'Doha',
    address: 'West Bay, Diplomatic Area',
    phone: '+974 4412 3456',
    email: 'doha@civilarisglobal.com',
    hours: 'Sun-Thu: 8:00 AM - 6:00 PM'
  },
  {
    country: 'Kuwait',
    city: 'Kuwait City',
    address: 'Al Hamra Tower, Sharq',
    phone: '+965 2224 5678',
    email: 'kuwait@civilarisglobal.com',
    hours: 'Sun-Thu: 8:00 AM - 6:00 PM'
  },
  {
    country: 'Bahrain',
    city: 'Manama',
    address: 'Bahrain Financial Harbour',
    phone: '+973 1711 2345',
    email: 'bahrain@civilarisglobal.com',
    hours: 'Sun-Thu: 8:00 AM - 6:00 PM'
  },
  {
    country: 'Oman',
    city: 'Muscat',
    address: 'Al Khuwair, Business District',
    phone: '+968 2446 7890',
    email: 'muscat@civilarisglobal.com',
    hours: 'Sun-Thu: 8:00 AM - 6:00 PM'
  }
]

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{t('contact')}</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">
                {t('contactTitle')}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Global Offices */}
      <section className="py-16 lg:py-24 bg-muted/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Global Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at any of our locations across the Middle East
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect rounded-2xl p-6 relative ${
                  office.isHeadquarters ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {office.isHeadquarters && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    Headquarters
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {office.city}
                </h3>
                <p className="text-sm text-primary mb-4">{office.country}</p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{office.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-2 overflow-hidden"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                <p className="text-xl text-muted-foreground font-semibold mb-2">
                  Interactive Map Coming Soon
                </p>
                <p className="text-muted-foreground">
                  View all our locations on an interactive map
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}