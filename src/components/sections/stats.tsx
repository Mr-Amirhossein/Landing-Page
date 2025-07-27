"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Package, MapPin, Calendar, Target } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { AnimatedCounter } from '@/components/animated-counter'

export function StatsSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const stats = [
    {
      icon: Package,
      value: 300,
      suffix: '+',
      label: t('statsProducts'),
      color: 'from-civilaris-gold to-civilaris-goldLight'
    },
    {
      icon: MapPin,
      value: 6,
      label: t('statsCountries'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      value: 10,
      label: t('statsExperience'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      value: 1000,
      suffix: '+',
      label: t('statsProjects'),
      color: 'from-purple-500 to-purple-600'
    }
  ]
  
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
      <div className="absolute inset-0 bg-noise opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t('globalTitle')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('globalSubtitle')}
          </p>
        </motion.div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="glass-effect rounded-2xl p-6 sm:p-8 text-center hover-lift group relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-br ${stat.color} rounded-2xl`} />
                  </div>
                  
                  {/* Icon */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Animated Counter */}
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 gradient-primary bg-clip-text text-transparent">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix || ''} 
                    />
                  </div>
                  
                  {/* Label */}
                  <p className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  
                  {/* Description */}
                  <p className="text-xs text-muted-foreground">
                    Premium Quality
                  </p>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Additional Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}