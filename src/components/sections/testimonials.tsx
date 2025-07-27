"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, Building2, Users, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export function TestimonialsSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      position: "Project Manager",
      company: "Emirates Construction Co.",
      image: "/api/placeholder/80/80",
      rating: 5,
      content: "Civilaris Global has been our trusted partner for over 3 years. Their quality products and exceptional service have helped us complete projects faster and more efficiently.",
      project: "Dubai Marina Tower",
      location: "Dubai, UAE"
    },
    {
      name: "Sarah Mitchell",
      position: "Procurement Director",
      company: "Global Infrastructure Ltd.",
      image: "/api/placeholder/80/80",
      rating: 5,
      content: "The technical expertise and global sourcing capabilities of Civilaris Global are unmatched. They consistently deliver premium products on time, every time.",
      project: "Metro Rail Extension",
      location: "London, UK"
    },
    {
      name: "Carlos Rodriguez",
      position: "Chief Engineer",
      company: "Rodriguez Construction",
      image: "/api/placeholder/80/80",
      rating: 5,
      content: "Working with Civilaris Global transformed our procurement process. Their innovative solutions and quality assurance have significantly improved our project outcomes.",
      project: "Business District Complex",
      location: "São Paulo, Brazil"
    },
    {
      name: "Priya Sharma",
      position: "Operations Manager",
      company: "Mumbai Metro Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      content: "Civilaris Global's logistics support and technical consultation services are exceptional. They understand our local requirements while maintaining international standards.",
      project: "Mumbai Metro Line 4",
      location: "Mumbai, India"
    }
  ]
  
  const stats = [
    { value: "98%", label: "Client Satisfaction", icon: Users },
    { value: "500+", label: "Projects Completed", icon: Building2 },
    { value: "4.9/5", label: "Average Rating", icon: Star }
  ]
  
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Client Reviews</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              {t('testimonialsTitle')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('testimonialsSubtitle')}
          </p>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="glass-effect rounded-2xl p-4 sm:p-6 hover-lift">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="glass-effect rounded-3xl p-6 sm:p-8 h-full hover-lift relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-6 relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                
                {/* Project Info */}
                <div className="glass-effect rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span className="font-medium text-foreground">{testimonial.project}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonial.location}
                  </p>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Join Our Satisfied Clients
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to experience the Civilaris Global difference? Let&apos;s discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="magnetic-button gradient-primary text-white font-semibold px-8 py-4 rounded-xl shadow-elevation-3 hover:shadow-glow transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect border border-primary/30 text-foreground hover:bg-primary/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}