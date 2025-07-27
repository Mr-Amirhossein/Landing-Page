"use client"

import React, { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero'
import { StatsSection } from '@/components/sections/stats'
import { AboutSection } from '@/components/sections/about'
import { FeaturesSection } from '@/components/sections/features'
import { ServicesSection } from '@/components/sections/services'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { ContactSection } from '@/components/sections/contact'
import { LoadingAnimation } from '@/components/loading-animation'

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