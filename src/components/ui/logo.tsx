/**
 * کامپوننت لوگو سیویلاریس گلوبال
 * این کامپوننت نمایش لوگو شرکت را مدیریت می‌کند
 * 
 * ویژگی‌های کامپوننت:
 * - استفاده از لوگو اختصاصی شرکت از پوشه public
 * - قابلیت تغییر اندازه به صورت داینامیک
 * - انیمیشن hover برای تعامل بهتر کاربر
 * - سازگاری با حالت تاریک و روشن
 * - نمایش نام شرکت در کنار لوگو
 * 
 * @param size - اندازه لوگو (پیش‌فرض: md)
 * @param showText - نمایش متن نام شرکت (پیش‌فرض: true)
 * @param className - کلاس‌های اضافی CSS
 */

"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/language-context'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
  animated?: boolean
}

const sizeClasses = {
  sm: { logo: 'w-8 h-8', text: 'text-lg', container: 'gap-2' },
  md: { logo: 'w-12 h-12', text: 'text-xl', container: 'gap-3' },
  lg: { logo: 'w-16 h-16', text: 'text-2xl', container: 'gap-4' },
  xl: { logo: 'w-20 h-20', text: 'text-3xl', container: 'gap-4' }
}

export function Logo({ 
  size = 'md', 
  showText = true, 
  className = '', 
  animated = true 
}: LogoProps) {
  const { t } = useLanguage()
  const sizeConfig = sizeClasses[size]

  const LogoContainer = animated ? motion.div : 'div'
  const logoProps = animated ? {
    whileHover: { scale: 1.05, rotate: 2 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
  } : {}

  return (
    <LogoContainer 
      className={`flex items-center ${sizeConfig.container} ${className}`}
      {...logoProps}
    >
      {/* لوگو اصلی شرکت */}
      <div className={`relative ${sizeConfig.logo} group`}>
        {/* پس‌زمینه طلایی با گرادیان */}
        <div className="absolute inset-0 gradient-primary rounded-xl shadow-elevation-2 group-hover:shadow-glow transition-all duration-300" />
        
        {/* لوگو SVG */}
        <div className="relative flex items-center justify-center h-full p-2">
          <Image
            src="/globe.svg"
            alt="Civilaris Global Logo"
            width={size === 'sm' ? 20 : size === 'md' ? 28 : size === 'lg' ? 36 : 44}
            height={size === 'sm' ? 20 : size === 'md' ? 28 : size === 'lg' ? 36 : 44}
            className="brightness-0 invert filter" // تبدیل به رنگ سفید
            priority
          />
        </div>
        
        {/* اثر نوری */}
        <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* متن نام شرکت */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${sizeConfig.text} font-bold text-foreground font-poppins leading-tight`}>
            {t('companyName')}
          </span>
          {size !== 'sm' && (
            <span className="text-xs text-muted-foreground font-medium leading-tight">
              Global Construction Solutions
            </span>
          )}
        </div>
      )}
    </LogoContainer>
  )
}

/**
 * کامپوننت لوگو ساده بدون متن
 * برای استفاده در مکان‌هایی که فقط نیاز به آیکون است
 */
export function LogoIcon({ size = 'md', className = '' }: Pick<LogoProps, 'size' | 'className'>) {
  return (
    <Logo 
      size={size} 
      showText={false} 
      className={className} 
      animated={false}
    />
  )
}

/**
 * کامپوننت لوگو متحرک برای صفحه اصلی
 * شامل انیمیشن‌های پیشرفته‌تر برای جلب توجه
 */
export function HeroLogo({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      <Logo size="xl" animated={true} />
    </motion.div>
  )
}