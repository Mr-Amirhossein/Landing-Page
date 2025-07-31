/**
 * کامپوننت کره طلایی سیویلاریس گلوبال
 * نمایش یک کره سه‌بعدی متحرک با انیمیشن‌های پیشرفته
 * 
 * ویژگی‌های کامپوننت:
 * - انیمیشن تعاملی با موس
 * - ذرات متحرک با الگوی فیبوناچی
 * - خطوط شبکه‌ای سه‌بعدی
 * - جلوه‌های نوری و سایه
 * - پاسخگویی به اندازه‌های مختلف صفحه
 * - بهینه‌سازی عملکرد برای انیمیشن‌های پیچیده
 * 
 * @param className - کلاس‌های اضافی CSS
 * @param size - اندازه کره (پیش‌فرض: 400 پیکسل)
 */

"use client"

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface GoldenSphereProps {
  className?: string
  size?: number
  interactive?: boolean
  showParticles?: boolean
}

export function GoldenSphere({ 
  className = '', 
  size = 400, 
  interactive = true, 
  showParticles = true 
}: GoldenSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  /**
   * مدیریت حرکت موس برای ایجاد انیمیشن تعاملی
   * محاسبه موقعیت موس نسبت به مرکز کره و اعمال چرخش
   */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current || !interactive) return
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / (width / 2)
    const y = (e.clientY - top - height / 2) / (height / 2)
    
    // اعمال تبدیل سه‌بعدی به کانتینر
    containerRef.current.style.transform = `
      perspective(1000px) 
      rotateY(${x * 15}deg) 
      rotateX(${-y * 15}deg)
      scale(${isHovered ? 1.05 : 1})
    `
  }, [interactive, isHovered])
  
  /**
   * بازگرداندن کره به حالت اولیه هنگام خروج موس
   */
  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current || !interactive) return
    
    setIsHovered(false)
    
    containerRef.current.style.transform = `
      perspective(1000px) 
      rotateY(0deg) 
      rotateX(0deg)
      scale(1)
    `
  }, [interactive])
  
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])
  
  useEffect(() => {
    const container = containerRef.current
    if (!container || !interactive) return
    
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseenter', handleMouseEnter)
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter, interactive])
  
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div 
        ref={containerRef}
        className="absolute inset-0 perspective-1000 transition-transform duration-300 ease-out"
      >
        <div className="w-full h-full preserve-3d animate-sphere-rotate">
          {/* کره SVG با جلوه‌های بصری پیشرفته */}
          <svg
            className="absolute inset-0 w-full h-full filter drop-shadow-2xl"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* گرادیان شعاعی برای کره اصلی */}
              <radialGradient id="sphereGradient" cx="35%" cy="25%">
                <stop offset="0%" stopColor="#ffdb58" stopOpacity="0.95" />
                <stop offset="20%" stopColor="#ffd942" stopOpacity="0.85" />
                <stop offset="40%" stopColor="#f4d03f" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#d4af37" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a08830" stopOpacity="0.3" />
              </radialGradient>
              
              {/* گرادیان خطی برای خطوط شبکه */}
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f4d03f" stopOpacity="0.9" />
                <stop offset="30%" stopColor="#ffed4e" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#d4af37" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#b8961f" stopOpacity="0.2" />
              </linearGradient>
              
              {/* فیلتر درخشش */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feFlood floodColor="#ffed4e" floodOpacity="0.3"/>
                <feComposite in2="coloredBlur" operator="in"/>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* فیلتر سایه داخلی */}
              <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5"/>
                <feOffset dx="3" dy="3" result="offset"/>
                <feFlood floodColor="#8b7028" floodOpacity="0.4"/>
                <feComposite in2="offset" operator="in"/>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* الگو نقطه‌ای برای بافت */}
              <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="#ffed4e" opacity="0.15"/>
                <circle cx="5" cy="5" r="0.5" fill="#ffd942" opacity="0.1"/>
                <circle cx="15" cy="15" r="0.5" fill="#ffd942" opacity="0.1"/>
              </pattern>
            </defs>
            
            {/* پس‌زمینه کره با جلوه درخشان */}
            <circle 
              cx="200" 
              cy="200" 
              r="190" 
              fill="url(#sphereGradient)" 
              opacity="0.2"
              filter="url(#glow)"
            />
            
            {/* حلقه درخشان اضافی */}
            <circle 
              cx="200" 
              cy="200" 
              r="185" 
              fill="none" 
              stroke="url(#gridGradient)"
              strokeWidth="2"
              opacity="0.3"
              filter="url(#glow)"
            />
            
            {/* بافت نقطه‌ای */}
            <circle 
              cx="200" 
              cy="200" 
              r="180" 
              fill="url(#dotPattern)" 
              opacity="0.3"
            />
            
            {/* دایره‌های افقی با انیمیشن بهبود یافته */}
            {[...Array(15)].map((_, i) => {
              const angle = (i * 24 * Math.PI) / 180 // کاهش فاصله برای جزئیات بیشتر
              const y = 200 + Math.sin(angle) * 140
              const rx = Math.abs(Math.cos(angle) * 140)
              const opacity = 0.2 + Math.abs(Math.cos(angle)) * 0.6
              
              return (
                <g key={`h-${i}`}>
                  {/* خط اصلی */}
                  <ellipse
                    cx="200"
                    cy={y}
                    rx={rx}
                    ry="3"
                    fill="none"
                    stroke="url(#gridGradient)"
                    strokeWidth="1.2"
                    opacity={opacity}
                    className="animate-line-flow"
                    style={{ animationDelay: `${i * 0.08}s` }}
                    filter="url(#glow)"
                  />
                  {/* خط سایه */}
                  <ellipse
                    cx="200"
                    cy={y + 1}
                    rx={rx}
                    ry="2"
                    fill="none"
                    stroke="#b8961f"
                    strokeWidth="0.5"
                    opacity={opacity * 0.3}
                    className="animate-line-flow"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  />
                </g>
              )
            })}
            
            {/* دایره‌های عمودی با جزئیات بیشتر */}
            {[...Array(12)].map((_, i) => {
              const rotation = i * 30 // افزایش تعداد خطوط عمودی
              
              return (
                <g key={`v-${i}`} transform={`rotate(${rotation} 200 200)`}>
                  {/* خط اصلی عمودی */}
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="4"
                    ry="140"
                    fill="none"
                    stroke="url(#gridGradient)"
                    strokeWidth="1"
                    opacity={0.3 + (i % 3) * 0.1}
                    className="animate-line-flow"
                    style={{ animationDelay: `${i * 0.12}s` }}
                    filter="url(#glow)"
                  />
                  {/* خط سایه عمودی */}
                  <ellipse
                    cx="201"
                    cy="200"
                    rx="2"
                    ry="140"
                    fill="none"
                    stroke="#b8961f"
                    strokeWidth="0.5"
                    opacity="0.2"
                    className="animate-line-flow"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  />
                </g>
              )
            })}
            
            {/* نقاط اتصال با توزیع فیبوناچی و جلوه‌های بصری پیشرفته */}
            {[...Array(42)].map((_, i) => {
              const phi = Math.acos(1 - 2 * (i + 0.5) / 42)
              const theta = Math.PI * (1 + Math.sqrt(5)) * i
              
              const x = 200 + 130 * Math.sin(phi) * Math.cos(theta)
              const y = 200 + 130 * Math.sin(phi) * Math.sin(theta)
              const z = Math.cos(phi)
              const depth = (z + 1) / 2 // تبدیل به مقدار مثبت
              
              return (
                <g key={`dot-${i}`}>
                  {/* هاله داخلی */}
                  <circle
                    cx={x}
                    cy={y}
                    r={6 + depth * 4}
                    fill="#ffd700"
                    opacity={0.1 + depth * 0.15}
                    filter="url(#glow)"
                    className="animate-pulse-glow"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  />
                  
                  {/* نقطه اصلی */}
                  <circle
                    cx={x}
                    cy={y}
                    r={2 + depth * 2.5}
                    fill="url(#gridGradient)"
                    opacity={0.7 + depth * 0.3}
                    filter="url(#glow)"
                    className="animate-pulse-glow"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  />
                  
                  {/* نقطه مرکزی درخشان */}
                  <circle
                    cx={x}
                    cy={y}
                    r={1 + depth}
                    fill="#ffd700"
                    opacity={0.9}
                    className="animate-pulse-glow"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  />
                  
                  {/* خطوط اتصال به مرکز */}
                  {i % 4 === 0 && depth > 0.3 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={200}
                      y2={200}
                      stroke="url(#gridGradient)"
                      strokeWidth={0.5 + depth * 0.5}
                      opacity={0.15 + depth * 0.25}
                      className="animate-line-flow"
                      style={{ animationDelay: `${i * 0.08}s` }}
                      filter="url(#glow)"
                    />
                  )}
                  
                  {/* خطوط اتصال بین نقاط مجاور */}
                  {i > 0 && i % 6 === 0 && (
                    <g>
                      {[...Array(3)].map((_, j) => {
                        const nextIndex = (i + j + 1) % 42
                        const nextPhi = Math.acos(1 - 2 * (nextIndex + 0.5) / 42)
                        const nextTheta = Math.PI * (1 + Math.sqrt(5)) * nextIndex
                        const nextX = 200 + 130 * Math.sin(nextPhi) * Math.cos(nextTheta)
                        const nextY = 200 + 130 * Math.sin(nextPhi) * Math.sin(nextTheta)
                        
                        const distance = Math.sqrt((nextX - x) ** 2 + (nextY - y) ** 2)
                        
                        return distance < 60 ? (
                          <line
                            key={`connection-${i}-${j}`}
                            x1={x}
                            y1={y}
                            x2={nextX}
                            y2={nextY}
                            stroke="#d4af37"
                            strokeWidth="0.3"
                            opacity={0.1 + depth * 0.1}
                            className="animate-line-flow"
                            style={{ animationDelay: `${(i + j) * 0.06}s` }}
                          />
                        ) : null
                      })}
                    </g>
                  )}
                </g>
              )
            })}
          </svg>
          
          {/* ذرات شناور پیشرفته با انیمیشن‌های پیچیده */}
          {showParticles && (
            <div className="absolute inset-0">
              {[...Array(35)].map((_, i) => {
                const particleSize = Math.random() > 0.8 ? 4 : Math.random() > 0.5 ? 2 : 1
                const animationDuration = 3 + Math.random() * 4
                const orbitRadius = 80 + Math.random() * 120
                const angle = (i / 35) * Math.PI * 2
                
                return (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full shadow-lg"
                    style={{
                      width: `${particleSize}px`,
                      height: `${particleSize}px`,
                      background: particleSize > 2 ? 
                        'linear-gradient(45deg, #ffd700, #d4af37)' : 
                        '#d4af37',
                      boxShadow: particleSize > 2 ? 
                        '0 0 8px rgba(212, 175, 55, 0.6)' : 
                        '0 0 4px rgba(212, 175, 55, 0.4)',
                    }}
                    initial={{ 
                      x: 200, 
                      y: 200,
                      scale: 0,
                      rotate: 0
                    }}
                    animate={{
                      x: [
                        200,
                        200 + Math.cos(angle) * orbitRadius,
                        200 + Math.cos(angle + Math.PI) * (orbitRadius * 0.7),
                        200 + Math.cos(angle + Math.PI * 1.5) * orbitRadius,
                        200
                      ],
                      y: [
                        200,
                        200 + Math.sin(angle) * orbitRadius,
                        200 + Math.sin(angle + Math.PI) * (orbitRadius * 0.7),
                        200 + Math.sin(angle + Math.PI * 1.5) * orbitRadius,
                        200
                      ],
                      scale: [0, 1, 0.8, 1.2, 0],
                      opacity: [0, 0.8, 0.6, 0.9, 0],
                      rotate: [0, 180, 360, 540, 720]
                    }}
                    transition={{
                      duration: animationDuration,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut",
                      times: [0, 0.25, 0.5, 0.75, 1]
                    }}
                  />
                )
              })}
              
              {/* ذرات کوچک اضافی برای جزئیات بیشتر */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`micro-particle-${i}`}
                  className="absolute w-0.5 h-0.5 bg-yellow-300 rounded-full opacity-60"
                  initial={{ 
                    x: 200 + (Math.random() - 0.5) * 300, 
                    y: 200 + (Math.random() - 0.5) * 300,
                    scale: 0
                  }}
                  animate={{
                    x: 200 + (Math.random() - 0.5) * 400,
                    y: 200 + (Math.random() - 0.5) * 400,
                    scale: [0, 1, 0],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* هاله مرکزی با جلوه‌های درخشان */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* هاله اصلی */}
        <motion.div 
          className="absolute w-56 h-56 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, 
              rgba(255, 237, 78, 0.5) 0%, 
              rgba(244, 208, 63, 0.35) 30%, 
              rgba(212, 175, 55, 0.2) 60%, 
              transparent 80%)`
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* هاله داخلی */}
        <motion.div 
          className="absolute w-32 h-32 rounded-full blur-xl"
          style={{
            background: `radial-gradient(circle, 
              rgba(255, 237, 78, 0.7) 0%, 
              rgba(255, 217, 66, 0.4) 40%, 
              rgba(244, 208, 63, 0.2) 70%, 
              transparent 100%)`
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* نقطه مرکزی درخشان */}
        <motion.div 
          className="absolute w-8 h-8 rounded-full shadow-2xl"
          style={{
            background: `radial-gradient(circle, #ffed4e 0%, #ffd942 50%, #d4af37 100%)`
          }}
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              '0 0 30px rgba(255, 237, 78, 0.6)',
              '0 0 60px rgba(255, 217, 66, 0.9)',
              '0 0 30px rgba(255, 237, 78, 0.6)'
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  )
}

/**
 * نسخه ساده‌شده کره طلایی برای استفاده در مکان‌های کوچک
 * بدون انیمیشن‌های پیچیده برای بهینه‌سازی عملکرد
 */
export function SimpleSphere({ size = 200, className = '' }: { size?: number; className?: string }) {
  return (
    <GoldenSphere 
      size={size} 
      className={className} 
      interactive={false} 
      showParticles={false} 
    />
  )
}