"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Target, 
  Eye, 
  Heart,
  Award,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { NetworkSphere } from '@/components/ui/network-sphere'

const stats = [
  { value: '300+', label: 'Products', icon: Globe },
  { value: '6', label: 'Countries', icon: Globe },
  { value: '10', label: 'Years Experience', icon: Award },
  { value: '1000+', label: 'Happy Clients', icon: Users }
]

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'Rigorous quality control and certification processes ensure the highest standards in every product we deliver.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our priority. We build lasting partnerships based on trust, reliability, and mutual growth.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Strategic presence across 6 countries ensures efficient delivery and local expertise wherever you need us.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Continuously adapting and evolving with the latest construction technologies and industry best practices.'
  }
]

const milestones = [
  { year: '2014', title: 'Company Founded', description: 'Started operations in Dubai with a vision to transform construction supply.' },
  { year: '2016', title: 'Regional Expansion', description: 'Expanded operations to Saudi Arabia and Qatar.' },
  { year: '2018', title: 'ISO Certification', description: 'Achieved ISO 9001 certification for quality management.' },
  { year: '2020', title: 'Digital Transformation', description: 'Launched digital platform for seamless ordering and tracking.' },
  { year: '2024', title: 'Global Leader', description: 'Recognized as a leading construction supplier across the Middle East.' }
]

export default function AboutPage() {
  const { t } = useLanguage()
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{t('about')}</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">
                {t('aboutTitle')}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t('aboutDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 text-center group hover:shadow-glow transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-8 lg:p-10"
            >
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('aboutMission')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and reliable partner in construction supply, delivering premium products and exceptional service that empowers builders to create lasting infrastructure.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-8 lg:p-10"
            >
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('aboutVision')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                Leading the transformation of construction supply chains through innovation, technology, and unwavering commitment to quality across global markets.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-8 lg:p-10"
            >
              <Heart className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('aboutValues')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, excellence, innovation, and sustainability guide every decision we make, ensuring we deliver value beyond expectations.
              </p>
            </motion.div>
          </div>

          {/* Core Values Grid */}
          <div ref={valuesRef} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that drive our commitment to excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-effect rounded-2xl p-6 lg:p-8 group hover-lift"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Company Timeline */}
          <div ref={timelineRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A decade of growth, innovation, and trusted partnerships
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden lg:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    <div className="flex-1 lg:text-right">
                      <div className={`glass-effect rounded-2xl p-6 ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} lg:max-w-md`}>
                        <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h4>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="relative hidden lg:block">
                      <div className="w-4 h-4 bg-primary rounded-full shadow-glow" />
                      <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping" />
                    </div>
                    
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Network Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Connected Globally, Delivered Locally
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our extensive network spans across continents, ensuring that premium construction products reach you wherever your projects take shape. With strategic partnerships and local expertise in each market, we bridge the gap between global quality and local needs.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Strategic warehousing in 6 countries', 'Real-time inventory tracking', 'Express delivery options', 'Local technical support'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="magnetic-button gradient-primary text-white font-semibold rounded-xl shadow-elevation-3 hover:shadow-glow">
                Explore Our Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <NetworkSphere />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust Civilaris Global for their construction needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="magnetic-button gradient-primary text-white font-semibold rounded-xl shadow-elevation-3 hover:shadow-glow">
                {t('getStarted')}
              </Button>
              <Button size="lg" variant="outline" className="glass-effect border-primary/30 hover:bg-primary/10 rounded-xl font-semibold">
                {t('contactUs')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}