"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Package,
  Shield,
  Truck,
  HeadphonesIcon,
  Search,
  FileCheck,
  Zap,
  Globe,
  BarChart3,
  Settings,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Award
} from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const mainServices = [
  {
    icon: Package,
    title: 'Product Sourcing',
    description: 'Access to over 300+ premium construction products from trusted manufacturers worldwide.',
    features: [
      'Extensive product catalog',
      'Verified manufacturers',
      'Competitive pricing',
      'Custom sourcing solutions'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and certification processes to ensure the highest standards.',
    features: [
      'ISO 9001 certified processes',
      'Third-party testing',
      'Quality guarantees',
      'Compliance documentation'
    ],
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Truck,
    title: 'Logistics Support',
    description: 'Efficient supply chain management and timely delivery across 6 countries.',
    features: [
      'Real-time tracking',
      'Express delivery options',
      'Secure packaging',
      'Door-to-door service'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: HeadphonesIcon,
    title: 'Technical Consultation',
    description: 'Expert guidance from our team of experienced engineers and specialists.',
    features: [
      '24/7 technical support',
      'Product recommendations',
      'Installation guidance',
      'Project planning assistance'
    ],
    color: 'from-green-500 to-emerald-500'
  }
]

const additionalServices = [
  {
    icon: Search,
    title: 'Market Research',
    description: 'In-depth analysis of construction trends and material innovations.'
  },
  {
    icon: FileCheck,
    title: 'Documentation Support',
    description: 'Complete handling of import/export documentation and certifications.'
  },
  {
    icon: Zap,
    title: 'Express Processing',
    description: 'Priority handling for urgent requirements with expedited delivery.'
  },
  {
    icon: Globe,
    title: 'Global Sourcing',
    description: 'Access to exclusive products from international markets.'
  },
  {
    icon: BarChart3,
    title: 'Inventory Management',
    description: 'Just-in-time delivery and inventory optimization solutions.'
  },
  {
    icon: Settings,
    title: 'Custom Solutions',
    description: 'Tailored services designed for your specific project needs.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Understanding your specific requirements and project needs'
  },
  {
    number: '02',
    title: 'Sourcing',
    description: 'Finding the perfect products from our global network'
  },
  {
    number: '03',
    title: 'Quality Check',
    description: 'Rigorous testing and verification of all products'
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Timely and secure delivery to your project site'
  }
]

const stats = [
  { value: '98%', label: 'On-time Delivery', icon: Clock },
  { value: '300+', label: 'Product Range', icon: Package },
  { value: '24/7', label: 'Support Available', icon: Users },
  { value: '100%', label: 'Quality Certified', icon: Award }
]

export default function ServicesPage() {
  const { t } = useLanguage()
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: processRef, inView: processInView } = useInView({ threshold: 0.1, triggerOnce: true })

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
              <span className="text-sm font-medium">{t('services')}</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">
                {t('servicesTitle')}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-border/50">
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
                  className="text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={servicesRef} className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions tailored to your construction needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="glass-effect border-primary/20 p-8 h-full hover-lift group">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full glass-effect border-primary/30 hover:bg-primary/10 font-semibold rounded-xl group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-muted/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Extended support to ensure your project&apos;s success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 group hover:shadow-elevation-2 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, efficient, and transparent workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-6 text-center h-full">
                  <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let us handle your construction supply needs while you focus on building
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="magnetic-button gradient-primary text-white font-semibold rounded-xl shadow-elevation-3 hover:shadow-glow">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="glass-effect border-primary/30 hover:bg-primary/10 rounded-xl font-semibold">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}