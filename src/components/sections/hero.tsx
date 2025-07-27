"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'
import { GoldenSphere } from '@/components/golden-sphere'

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
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 gradient-primary rounded-full blur-3xl opacity-20"
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
          className="absolute top-1/3 right-1/3 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 gradient-accent rounded-full blur-3xl opacity-15"
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
                className="absolute -inset-8 border border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 border border-accent/10 rounded-full"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Global Construction Partner</span>
              </motion.div>
              
              {/* Logo and Company Name */}
              <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-8">
                <motion.div 
                  className="relative w-16 h-16 sm:w-20 sm:h-20 mr-3 sm:mr-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 gradient-primary rounded-xl shadow-glow" />
                  <div className="relative flex items-center justify-center h-full text-white font-bold text-2xl sm:text-3xl">
                    C
                  </div>
                </motion.div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-shimmer">
                    {t('companyName')}
                  </h1>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Global Construction Solutions
                  </p>
                </div>
              </div>
              
              {/* Main Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block gradient-primary bg-clip-text text-transparent">
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
                  className="magnetic-button gradient-primary text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-elevation-3 hover:shadow-glow w-full sm:w-auto"
                >
                  {t('learnMore')}
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="glass-effect border-primary/30 text-foreground hover:bg-primary/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl font-semibold group w-full sm:w-auto"
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
                  <div className="text-2xl font-bold text-primary">300+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10</div>
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