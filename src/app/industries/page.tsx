"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Building2,
  Home,
  Factory,
  Plane,
  Waves,
  Zap,
  Hotel,
  ShoppingBag,
  Sparkles,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Award
} from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const industries = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Supporting the development of office buildings, retail centers, and mixed-use complexes with premium materials.',
    features: [
      'High-rise building materials',
      'Sustainable construction products',
      'Fire-rated systems',
      'Advanced facade solutions'
    ],
    projects: '500+',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Home,
    title: 'Residential Development',
    description: 'Quality materials for housing projects, from single-family homes to large residential communities.',
    features: [
      'Eco-friendly materials',
      'Smart home integration products',
      'Landscaping supplies',
      'Interior finishing materials'
    ],
    projects: '800+',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Factory,
    title: 'Industrial Facilities',
    description: 'Specialized products for factories, warehouses, and industrial complexes requiring durability.',
    features: [
      'Heavy-duty flooring systems',
      'Industrial insulation',
      'Structural steel products',
      'Safety equipment'
    ],
    projects: '300+',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Plane,
    title: 'Infrastructure & Transportation',
    description: 'Supporting critical infrastructure projects including airports, roads, and public transportation.',
    features: [
      'Airport-grade materials',
      'Highway construction products',
      'Railway components',
      'Bridge construction supplies'
    ],
    projects: '150+',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Waves,
    title: 'Marine & Coastal',
    description: 'Specialized materials for marine environments, ports, and coastal developments.',
    features: [
      'Corrosion-resistant products',
      'Marine-grade concrete',
      'Waterproofing systems',
      'Coastal protection materials'
    ],
    projects: '100+',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    icon: Zap,
    title: 'Energy & Utilities',
    description: 'Materials for power plants, renewable energy projects, and utility infrastructure.',
    features: [
      'Solar panel mounting systems',
      'Wind turbine components',
      'Electrical conduits',
      'Thermal insulation'
    ],
    projects: '200+',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Hotel,
    title: 'Hospitality & Tourism',
    description: 'Premium materials for hotels, resorts, and entertainment facilities.',
    features: [
      'Luxury finishing materials',
      'Acoustic solutions',
      'Pool & spa products',
      'Outdoor furniture materials'
    ],
    projects: '250+',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Commercial',
    description: 'Solutions for shopping malls, stores, and commercial spaces.',
    features: [
      'Storefront systems',
      'Display fixtures materials',
      'Mall construction products',
      'Parking structure supplies'
    ],
    projects: '400+',
    color: 'from-teal-500 to-cyan-500'
  }
]

const stats = [
  { value: '2500+', label: 'Projects Completed', icon: Building2 },
  { value: '8', label: 'Industry Sectors', icon: Factory },
  { value: '95%', label: 'Client Satisfaction', icon: TrendingUp },
  { value: '50+', label: 'Expert Team', icon: Users }
]

const caseStudies = [
  {
    title: 'Dubai Marina Tower',
    industry: 'Commercial Construction',
    value: '$2.5M',
    duration: '18 months',
    image: '/projects/dubai-marina.jpg'
  },
  {
    title: 'King Abdullah Economic City',
    industry: 'Infrastructure',
    value: '$5.2M',
    duration: '24 months',
    image: '/projects/kaec.jpg'
  },
  {
    title: 'Doha Metro Project',
    industry: 'Transportation',
    value: '$3.8M',
    duration: '36 months',
    image: '/projects/doha-metro.jpg'
  }
]

export default function IndustriesPage() {
  const { t } = useLanguage()
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: industriesRef, inView: industriesInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: caseStudiesRef, inView: caseStudiesInView } = useInView({ threshold: 0.1, triggerOnce: true })

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
              <span className="text-sm font-medium">{t('industries')}</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">
                {t('industriesTitle')}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t('industriesSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Industries Grid */}
      <section ref={industriesRef} className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized solutions for every sector of the construction industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={industriesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-effect border-primary/20 p-6 h-full hover-lift group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {industry.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {industry.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-sm text-primary font-semibold">
                        {industry.projects} Projects
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Industry Section */}
      <section className="py-16 lg:py-24 bg-muted/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Specialized Solutions for Every Industry
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over a decade of experience serving diverse industries, we understand the unique challenges and requirements of each sector. Our specialized teams ensure you get the right products, certifications, and support for your specific industry needs.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Industry-specific product catalogs',
                  'Compliance with sector regulations',
                  'Expert consultation for each industry',
                  'Custom solutions and sourcing'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="magnetic-button gradient-primary text-white font-semibold rounded-xl shadow-elevation-3 hover:shadow-glow">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {industries.slice(0, 4).map((industry, index) => {
                const Icon = industry.icon
                return (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-6 text-center hover:shadow-elevation-2 transition-all"
                  >
                    <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground">{industry.title}</h4>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={caseStudiesRef} className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects, real impact across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-effect rounded-2xl overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-20 h-20 text-primary/30" />
                  </div>
                  <div className="absolute bottom-4 left-4 glass-effect px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-white">{study.industry}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Contract Value</p>
                      <p className="font-semibold text-primary">{study.value}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{study.duration}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full glass-effect border-primary/30 hover:bg-primary/10 font-semibold rounded-xl group"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
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
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Industry, Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whatever your industry, we have the products and expertise to support your success
            </p>
            <Button size="lg" className="magnetic-button gradient-primary text-white font-semibold rounded-xl shadow-elevation-3 hover:shadow-glow">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}