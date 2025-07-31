"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'
import { GoldenSphere } from '@/components/golden-sphere'
import { HeroLogo } from '@/components/ui/logo'

export function HeroSection() {
  const { t } = useLanguage()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Background with Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-mesh-gradient" />
      <div className="absolute inset-0 bg-noise opacity-40" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(255, 237, 78, 0.25) 0%, rgba(244, 208, 63, 0.15) 50%, transparent 80%)`
          }}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute top-1/3 right-1/3 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(125, 211, 252, 0.2) 0%, rgba(96, 165, 250, 0.1) 50%, transparent 80%)`
          }}
        />
        
        {/* Floating Glass Cards */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-20 h-12 sm:w-28 sm:h-16 lg:w-32 lg:h-20 glass-effect rounded-2xl hidden sm:block"
          style={{
            boxShadow: `0 8px 32px rgba(255, 237, 78, 0.1)`
          }}
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/3 w-16 h-10 sm:w-20 sm:h-12 lg:w-24 lg:h-16 glass-effect rounded-xl hidden sm:block"
          style={{
            boxShadow: `0 8px 32px rgba(125, 211, 252, 0.1)`
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 sm:py-24 lg:py-32">
          {/* Left Side - 3D Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-start relative order-2 lg:order-1"
          >
            <div className="relative">
              <GoldenSphere className="w-full max-w-md lg:max-w-lg hover-lift" />
              
              {/* Additional Visual Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full"
                style={{
                  border: `1px solid rgba(255, 237, 78, 0.25)`,
                  boxShadow: `0 0 30px rgba(255, 237, 78, 0.1)`
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 rounded-full"
                style={{
                  border: `1px solid rgba(125, 211, 252, 0.15)`,
                  boxShadow: `0 0 40px rgba(96, 165, 250, 0.08)`
                }}
              />
            </div>
          </motion.div>
          
          {/* Right Side - Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Global Construction Partner</span>
              </motion.div>
              
              {/* Logo and Company Name */}
              <div className="flex justify-center lg:justify-start mb-6 lg:mb-8">
                <HeroLogo />
              </div>
              
              {/* Main Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-hierarchy-1">
                  <span className="block text-gold-gradient">
                    Smarter Tools,
                  </span>
                  <span className="block text-foreground">
                    Stronger Projects
                  </span>
                  <span className="block text-accent">
                    Global Trust
                  </span>
                </h2>
              </motion.div>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {t('aboutDescription')}
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              >
                <Button 
                  size="lg"
                  className="magnetic-button text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-elevation-3 w-full sm:w-auto"
                  style={{
                    background: `linear-gradient(135deg, #f4d03f 0%, #ffed4e 35%, #ffd942 70%, #d4af37 100%)`,
                    boxShadow: `0 10px 30px rgba(255, 237, 78, 0.3), 0 4px 15px rgba(244, 208, 63, 0.2)`
                  }}
                >
                  {t('learnMore')}
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="glass-effect text-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl font-semibold group w-full sm:w-auto hover:shadow-glow transition-all duration-300"
                  style={{
                    border: `1px solid rgba(255, 237, 78, 0.3)`,
                    background: `linear-gradient(135deg, rgba(255, 237, 78, 0.05), rgba(244, 208, 63, 0.02))`
                  }}
                >
                  <Play className="mr-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:scale-110" />
                  {t('watchVideo')}
                </Button>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex items-center justify-center lg:justify-start gap-8 pt-8"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-gradient">300+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-gradient">6</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-gradient">10</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="glass-effect px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
              Discover More
            </span>
          </div>
          <ChevronDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  )
}