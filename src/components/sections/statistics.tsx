"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Container } from "@/components/layout/container"
import { Trophy, Users, MapPin, Calendar } from "lucide-react"

/**
 * Statistics data for Dutco Group
 * Key achievements and milestones
 */
const statistics = [
  {
    icon: Calendar,
    number: 50,
    suffix: "+",
    label: "Years of Excellence",
    description: "Delivering quality since 1974",
  },
  {
    icon: Users,
    number: 500,
    suffix: "+",
    label: "Expert Engineers",
    description: "Skilled professionals worldwide",
  },
  {
    icon: MapPin,
    number: 25,
    suffix: "+",
    label: "Countries Served",
    description: "Global presence and reach",
  },
  {
    icon: Trophy,
    number: 1000,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful project delivery",
  },
]

/**
 * Animated Counter Hook
 * Animates numbers from 0 to target value when in view
 */
function useAnimatedCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart)
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration, isVisible])

  return { count, setIsVisible }
}

/**
 * Individual Statistic Card Component
 */
function StatisticCard({ statistic, index }: { statistic: typeof statistics[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { count, setIsVisible } = useAnimatedCounter(statistic.number, 2500)
  const Icon = statistic.icon

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView, setIsVisible])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-xl"
      >
        <Icon className="h-10 w-10" />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2 font-poppins"
      >
        {count}{statistic.suffix}
      </motion.div>
      
      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 font-poppins">
        {statistic.label}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        {statistic.description}
      </p>
    </motion.div>
  )
}

/**
 * Statistics Section Component
 * Displays animated counters with key company metrics
 * Features scroll-triggered animations and hover effects
 */
export function StatisticsSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Five decades of engineering excellence, delivering exceptional results 
            across the globe with unwavering commitment to quality.
          </motion.p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {statistics.map((statistic, index) => (
            <StatisticCard 
              key={index} 
              statistic={statistic} 
              index={index} 
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-border"
        >
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the ranks of satisfied clients who trust Dutco Group for their engineering needs.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project Today
              <motion.svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}