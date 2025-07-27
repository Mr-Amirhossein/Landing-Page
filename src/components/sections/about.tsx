"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, TrendingUp, Target, Building, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const achievements = [
    {
      icon: Award,
      value: "ISO 9001",
      label: "Quality Certified",
      description: "International quality standards"
    },
    {
      icon: Users,
      value: "300+",
      label: t('statsProducts'),
      description: "Premium construction products"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Client Satisfaction",
      description: "Exceptional service delivery"
    },
    {
      icon: Target,
      value: "10",
      label: t('statsExperience'),
      description: "Years of expertise"
    }
  ]
  
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-32 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t('aboutTitle')}
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('aboutDescription')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a sharp eye for quality and deep understanding of construction needs, we make sourcing smarter, faster, and more reliable.
                </p>
              </motion.div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-colors group"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-foreground">{achievement.value}</div>
                      <div className="text-sm font-medium text-foreground/80">{achievement.label}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group bg-primary hover:bg-primary/90">
                {t('learnMore')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                {t('contact')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl bg-gradient-to-br from-civilaris-gold/10 to-civilaris-dark/20 border border-border">
              {/* Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-civilaris-gold/20 to-civilaris-dark/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Building className="h-32 w-32 text-primary/40 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-primary/60 font-medium text-lg">
                    {t('statsExperience')} {t('aboutTitle')}
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 border-2 border-primary/30 rounded-lg rotate-12"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 border-2 border-primary/30 rounded-full"></div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}