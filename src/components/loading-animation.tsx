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
        {/* Golden Sphere Animation - Responsive */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-8 sm:mb-12">
          <div className="absolute inset-0 perspective-1000">
            <div className="w-full h-full preserve-3d animate-sphere-rotate">
              {/* Sphere Lines */}
              <svg
                className="absolute inset-0 w-full h-full filter drop-shadow-xl"
                viewBox="0 0 320 320"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffed4e" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#ffd942" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0.4" />
                  </linearGradient>
                  <radialGradient id="dotGradient">
                    <stop offset="0%" stopColor="#ffed4e" stopOpacity="1" />
                    <stop offset="100%" stopColor="#f4d03f" stopOpacity="0.8" />
                  </radialGradient>
                </defs>
                {/* Horizontal circles */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((rotation, i) => (
                  <g key={`h-${i}`} transform={`rotate(${rotation} 160 160)`}>
                    <ellipse
                      cx="160"
                      cy="160"
                      rx="150"
                      ry="40"
                      fill="none"
                      stroke="url(#loadingGradient)"
                      strokeWidth="0.8"
                      opacity="0.4"
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
                      stroke="url(#loadingGradient)"
                      strokeWidth="0.8"
                      opacity="0.4"
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
                      fill="url(#dotGradient)"
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
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      background: `radial-gradient(circle, #ffed4e 0%, #ffd942 100%)`,
                      boxShadow: `0 0 4px rgba(255, 237, 78, 0.6)`,
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
            <div className="w-40 h-40 rounded-full blur-2xl animate-pulse" style={{
              background: `radial-gradient(circle, rgba(255, 237, 78, 0.3) 0%, rgba(244, 208, 63, 0.2) 40%, transparent 70%)`
            }} />
            <div className="absolute w-24 h-24 rounded-full blur-xl animate-pulse" style={{
              background: `radial-gradient(circle, rgba(255, 217, 66, 0.4) 0%, transparent 60%)`,
              animationDelay: '0.5s'
            }} />
          </div>
        </div>
        
        {/* Logo and Text */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-civilaris-gold mb-4 animate-fade-in-up text-center">
            {t('companyName')}
          </h1>
          
          {/* Progress Bar */}
          <div className="w-48 sm:w-64 h-1 bg-civilaris-gold/20 rounded-full overflow-hidden mb-4 mx-auto">
            <div
              className="h-full transition-all duration-300 ease-out rounded-full"
              style={{
                background: `linear-gradient(90deg, #f4d03f 0%, #ffed4e 35%, #ffd942 70%, #d4af37 100%)`,
                boxShadow: `0 0 20px rgba(255, 237, 78, 0.5)`,
                width: `${progress}%`
              }}
            />
          </div>
          
          {/* Loading Text */}
          <p className="text-gray-400 animate-typing text-sm sm:text-base">
            {t('loading')}
          </p>
        </div>
      </div>
    </div>
  )
}