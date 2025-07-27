"use client"

import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GoldenSphereProps {
  className?: string
  size?: number
}

export function GoldenSphere({ className = '', size = 400 }: GoldenSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) / (width / 2)
      const y = (e.clientY - top - height / 2) / (height / 2)
      
      container.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
    }
    
    const handleMouseLeave = () => {
      container.style.transform = 'rotateY(0deg) rotateX(0deg)'
    }
    
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])
  
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div 
        ref={containerRef}
        className="absolute inset-0 perspective-1000 transition-transform duration-300 ease-out"
      >
        <div className="w-full h-full preserve-3d animate-sphere-rotate">
          {/* SVG Sphere */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="sphereGradient" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#f7e98e" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#d4af37" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#b8961f" stopOpacity="0.3" />
              </radialGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Background glow */}
            <circle 
              cx="200" 
              cy="200" 
              r="180" 
              fill="url(#sphereGradient)" 
              opacity="0.2"
              filter="url(#glow)"
            />
            
            {/* Horizontal circles */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180
              const y = 200 + Math.sin(angle) * 150
              const rx = Math.cos(angle) * 150
              
              return (
                <ellipse
                  key={`h-${i}`}
                  cx="200"
                  cy={y}
                  rx={Math.abs(rx)}
                  ry="5"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="0.8"
                  opacity={0.3 + Math.abs(Math.cos(angle)) * 0.4}
                  className="animate-line-flow"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              )
            })}
            
            {/* Vertical circles */}
            {[...Array(8)].map((_, i) => {
              const rotation = i * 45
              
              return (
                <g key={`v-${i}`} transform={`rotate(${rotation} 200 200)`}>
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="5"
                    ry="150"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="0.8"
                    opacity="0.4"
                    className="animate-line-flow"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                </g>
              )
            })}
            
            {/* Connection points with glow */}
            {[...Array(30)].map((_, i) => {
              const phi = Math.acos(1 - 2 * (i + 0.5) / 30)
              const theta = Math.PI * (1 + Math.sqrt(5)) * i
              
              const x = 200 + 150 * Math.sin(phi) * Math.cos(theta)
              const y = 200 + 150 * Math.sin(phi) * Math.sin(theta)
              const z = Math.cos(phi)
              
              return (
                <g key={`dot-${i}`}>
                  <circle
                    cx={x}
                    cy={y}
                    r={2 + z * 2}
                    fill="#d4af37"
                    opacity={0.6 + z * 0.4}
                    filter="url(#glow)"
                    className="animate-pulse-glow"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  />
                  
                  {/* Connection lines to nearby dots */}
                  {i > 0 && i % 3 === 0 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={200}
                      y2={200}
                      stroke="#d4af37"
                      strokeWidth="0.3"
                      opacity={0.2 + z * 0.2}
                      className="animate-line-flow"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  )}
                </g>
              )
            })}
          </svg>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-civilaris-gold rounded-full"
                initial={{ 
                  x: 200, 
                  y: 200,
                  scale: 0 
                }}
                animate={{
                  x: [200, 200 + (Math.random() - 0.5) * 300],
                  y: [200, 200 + (Math.random() - 0.5) * 300],
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 bg-gradient-radial from-civilaris-gold/30 to-transparent rounded-full blur-2xl animate-pulse" />
      </div>
    </div>
  )
}