"use client"

import React, { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/language-context'

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const { t } = useLanguage()
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 60)
    
    return () => clearInterval(interval)
  }, [onComplete])
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-civilaris-dark">
      <div className="relative">
        {/* Golden Sphere Animation */}
        <div className="relative w-80 h-80 mb-12">
          <div className="absolute inset-0 perspective-1000">
            <div className="w-full h-full preserve-3d animate-sphere-rotate">
              {/* Sphere Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 320 320"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal circles */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((rotation, i) => (
                  <g key={`h-${i}`} transform={`rotate(${rotation} 160 160)`}>
                    <ellipse
                      cx="160"
                      cy="160"
                      rx="150"
                      ry="40"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="0.5"
                      opacity="0.3"
                      className="animate-line-flow"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  </g>
                ))}
                
                {/* Vertical circles */}
                {[0, 30, 60, 90, 120, 150].map((rotation, i) => (
                  <g key={`v-${i}`} transform={`rotate(${rotation} 160 160)`}>
                    <ellipse
                      cx="160"
                      cy="160"
                      rx="40"
                      ry="150"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="0.5"
                      opacity="0.3"
                      className="animate-line-flow"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  </g>
                ))}
                
                {/* Glowing dots at intersections */}
                {Array.from({ length: 20 }).map((_, i) => {
                  const angle = (i / 20) * Math.PI * 2
                  const x = 160 + Math.cos(angle) * 120
                  const y = 160 + Math.sin(angle) * 120
                  return (
                    <circle
                      key={`dot-${i}`}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="#d4af37"
                      className="animate-pulse-glow"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  )
                })}
              </svg>
              
              {/* Particle effects */}
              <div className="absolute inset-0">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-civilaris-gold rounded-full"
                    style={{
                      '--x': `${(Math.random() - 0.5) * 200}px`,
                      '--y': `${(Math.random() - 0.5) * 200}px`,
                      left: '50%',
                      top: '50%',
                      animation: `particle-float ${3 + Math.random() * 2}s linear infinite`,
                      animationDelay: `${Math.random() * 3}s`
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Central glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-radial from-civilaris-gold/20 to-transparent rounded-full blur-xl animate-pulse" />
          </div>
        </div>
        
        {/* Logo and Text */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-civilaris-gold mb-4 animate-fade-in-up">
            {t('companyName')}
          </h1>
          
          {/* Progress Bar */}
          <div className="w-64 h-1 bg-civilaris-gold/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-civilaris-gold to-civilaris-goldLight transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Loading Text */}
          <p className="text-gray-400 animate-typing">
            {t('loading')}
          </p>
        </div>
      </div>
    </div>
  )
}