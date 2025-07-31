"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Handshake,
  Award,
  Globe,
  Shield,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Star
} from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const partners = [
  {
    name: 'LafargeHolcim',
    category: 'Cement & Concrete',
    logo: '/partners/lafarge.png',
    description: 'Global leader in building materials',
    since: '2016'
  },
  {
    name: 'ArcelorMittal',
    category: 'Steel Products',
    logo: '/partners/arcelor.png',
    description: 'World\'s leading steel company',
    since: '2017'
  },
  {
    name: 'Saint-Gobain',
    category: 'Construction Materials',
    logo: '/partners/saint-gobain.png',
    description: 'Innovative material solutions',
    since: '2015'
  },
  {
    name: 'Knauf',
    category: 'Insulation & Drywall',
    logo: '/partners/knauf.png',
    description: 'Building material manufacturer',
    since: '2018'
  },
  {
    name: 'BASF',
    category: 'Chemical Solutions',
    logo: '/partners/basf.png',
    description: 'Chemical industry leader',
    since: '2019'
  },
  {
    name: 'Sika',
    category: 'Specialty Chemicals',
    logo: '/partners/sika.png',
    description: 'Construction chemicals specialist',
    since: '2016'
  },
  {
    name: 'Hilti',
    category: 'Tools & Technology',
    logo: '/partners/hilti.png',
    description: 'Premium construction tools',
    since: '2017'
  },
  {
    name: 'Weber',
    category: 'Industrial Mortars',
    logo: '/partners/weber.png',
    description: 'Surface preparation solutions',
    since: '2018'
  }
]

const partnerBenefits = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Access to international markets and expanded distribution channels across 6 countries.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensuring product excellence and customer satisfaction.'
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Strategic partnership opportunities driving mutual growth and market expansion.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated account management and technical support for seamless collaboration.'
  }
]

const partnershipTypes = [
  {
    title: 'Manufacturer Partners',
    description: 'Leading global manufacturers providing premium construction materials',
    features: [
      'Direct factory sourcing',
      'Exclusive product lines',
      'Technical training support',
      'Co-marketing opportunities'
    ]
  },
  {
    title: 'Distribution Partners',
    description: 'Strategic logistics partners ensuring efficient delivery across regions',
    features: [
      'Warehousing solutions',
      'Last-mile delivery',
      'Inventory management',
      'Real-time tracking'
    ]
  },
  {
    title: 'Technology Partners',
    description: 'Innovative tech companies enhancing our digital capabilities',
    features: [
      'Digital platform integration',
      'Supply chain optimization',
      'Data analytics tools',
      'Customer experience enhancement'
    ]
  }
]

const testimonials = [
  {
    quote: "Civilaris Global has been instrumental in expanding our reach in the Middle East market. Their professionalism and market knowledge are unmatched.",
    author: "John Smith",
    position: "Regional Director",
    company: "LafargeHolcim",
    rating: 5
  },
  {
    quote: "The partnership with Civilaris has streamlined our distribution process and significantly improved our customer satisfaction rates.",
    author: "Maria Garcia",
    position: "Sales Manager",
    company: "Saint-Gobain",
    rating: 5
  },
  {
    quote: "Working with Civilaris Global means working with a team that truly understands the construction industry's needs.",
    author: "Ahmed Al-Rashid",
    position: "Business Development Head",
    company: "Sika",
    rating: 5
  }
]

export default function PartnersPage() {
  const { t } = useLanguage()
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: partnersRef, inView: partnersInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ threshold: 0.1, triggerOnce: true })

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
              <span className="text-sm font-medium">{t('partners')}</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">
                Trusted Partners,
              </span>
              <br />
              <span className="text-foreground">
                Exceptional Results
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Collaborating with world-leading manufacturers and suppliers to deliver excellence in every project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos Grid */}
      <section ref={partnersRef} className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Strategic Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry leaders who share our commitment to quality and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={partnersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center hover-lift group"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-primary/60">
                    {partner.name}
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {partner.category}
                </h4>
                <p className="text-xs text-muted-foreground mb-3">
                  {partner.description}
                </p>
                <div className="text-xs text-primary font-medium">
                  Partner since {partner.since}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section ref={benefitsRef} className="py-16 lg:py-24 bg-muted/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why leading companies choose to partner with Civilaris Global
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnerBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elevation-2">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Partnership Types */}
          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 1 ? 0 : index === 0 ? -30 : 30 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <Card className="glass-effect border-primary/20 p-8 h-full">
                  <Handshake className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Partners Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Success stories from our valued partners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto"
          >
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our network of industry leaders and expand your business across the Middle East
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="magnetic-button gradient-primary text-white font-semibold rounded-xl shadow-elevation-3 hover:shadow-glow">
                Apply for Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="glass-effect border-primary/30 hover:bg-primary/10 rounded-xl font-semibold">
                Download Partner Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}