"use client"

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero'
import { StatsSection } from '@/components/sections/stats'
import { LoadingAnimation } from '@/components/loading-animation'

// Lazy load below-the-fold components
const AboutSection = dynamic(() => import('@/components/sections/about').then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="h-96 bg-muted/10 animate-pulse rounded-lg" />
})
const FeaturesSection = dynamic(() => import('@/components/sections/features').then(mod => ({ default: mod.FeaturesSection })), {
  loading: () => <div className="h-96 bg-muted/10 animate-pulse rounded-lg" />
})
const ServicesSection = dynamic(() => import('@/components/sections/services').then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <div className="h-96 bg-muted/10 animate-pulse rounded-lg" />
})
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-96 bg-muted/10 animate-pulse rounded-lg" />
})
const ContactSection = dynamic(() => import('@/components/sections/contact').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-96 bg-muted/10 animate-pulse rounded-lg" />
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  
  const handleLoadingComplete = () => {
    setIsLoading(false)
  }
  
  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />
  }
  
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <FeaturesSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}