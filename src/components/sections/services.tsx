"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Package, 
  Shield, 
  Truck, 
  HeadphonesIcon, 
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'

export function ServicesSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const services = [
    {
      icon: Package,
      title: t('service1Title'),
      description: t('service1Desc'),
      features: ['Premium Quality', 'Global Sourcing', 'Certified Products'],
      gradient: 'from-amber-500 to-orange-500',
      delay: 0.1
    },
    {
      icon: Shield,
      title: t('service2Title'),
      description: t('service2Desc'),
      features: ['ISO Standards', 'Quality Testing', '100% Guarantee'],
      gradient: 'from-emerald-500 to-teal-500',
      delay: 0.2
    },
    {
      icon: Truck,
      title: t('service3Title'),
      description: t('service3Desc'),
      features: ['Fast Delivery', 'Global Network', 'Real-time Tracking'],
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.3
    },
    {
      icon: HeadphonesIcon,
      title: t('service4Title'),
      description: t('service4Desc'),
      features: ['Expert Engineers', '24/7 Support', 'Custom Solutions'],
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.4
    }
  ]
  
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" ref={ref}>
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 right-10 w-40 h-40 gradient-accent rounded-full blur-3xl opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              {t('servicesTitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('servicesSubtitle')}
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: service.delay }}
                className="group"
              >
                <div className="glass-effect rounded-3xl p-8 h-full hover-lift relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-3xl`} />
                  </div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-elevation-2 group-hover:shadow-glow transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Transform Your Projects?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust Civilaris Global for their construction needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="magnetic-button gradient-primary text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-elevation-3 hover:shadow-glow"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="glass-effect border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-xl font-semibold"
              >
                View All Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}