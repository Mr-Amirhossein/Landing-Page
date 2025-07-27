"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2, Globe, Shield, Lightbulb, Users, Award, Zap } from 'lucide-react'

/**
 * لیست ویژگی‌ها و مزایای همکاری
 */
const features = [
  {
    icon: Globe,
    title: "Global Expertise",
    description: "Leveraging international best practices with local market knowledge across all continents",
    items: [
      "Operations in 50+ countries",
      "Multi-cultural expert team",
      "24/7 global support network",
      "Local compliance expertise"
    ],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Committed to delivering excellence in every project with rigorous standards",
    items: [
      "ISO certified processes",
      "Rigorous quality control",
      "Continuous improvement",
      "Third-party verification"
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Staying ahead with cutting-edge technology and forward-thinking solutions",
    items: [
      "R&D investment",
      "Technology partnerships",
      "Digital transformation",
      "Smart construction solutions"
    ],
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Building lasting relationships through dedicated support and collaboration",
    items: [
      "Dedicated account managers",
      "Customized solutions",
      "Proactive communication",
      "Long-term partnerships"
    ],
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Proven track record of excellence recognized by industry leaders",
    items: [
      "Industry awards",
      "Client testimonials",
      "Certified expertise",
      "Trusted by Fortune 500"
    ],
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient logistics and supply chain management for timely project completion",
    items: [
      "Express shipping options",
      "Global warehouse network",
      "Real-time tracking",
      "Emergency procurement"
    ],
  },
]

export function FeaturesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/20" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
          >
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Civilaris Global
            </span>{" "}
            <span className="text-foreground">Advantages</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover what sets us apart and makes us the preferred partner for engineering excellence worldwide
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <div className="glass-effect rounded-3xl p-6 sm:p-8 h-full hover-lift relative overflow-hidden">
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 opacity-50 group-hover:opacity-70 transition-opacity" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Feature List */}
                    <ul className="space-y-2 sm:space-y-3">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mt-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                          </div>
                          <span className="text-xs sm:text-sm text-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Ready to Experience the Civilaris Global Difference?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients worldwide and discover why industry leaders choose us for their most critical projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="magnetic-button gradient-primary text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl shadow-elevation-3 hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect border border-primary/30 text-foreground hover:bg-primary/10 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}