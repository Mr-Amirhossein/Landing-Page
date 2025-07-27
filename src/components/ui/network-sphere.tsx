"use client"

import { useEffect, useRef } from "react"

interface NetworkSphereProps {
  className?: string
  size?: number
}

/**
 * کامپوننت NetworkSphere
 * نمایش گرافیک کره شبکه‌ای با خطوط نوری طلایی
 */
export function NetworkSphere({ className = "", size = 400 }: NetworkSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // تنظیم اندازه canvas
    canvas.width = size
    canvas.height = size

    // نقاط کره
    const points: Array<{
      x: number
      y: number
      z: number
      originalX: number
      originalY: number
      originalZ: number
    }> = []

    // ایجاد نقاط کره
    const radius = size * 0.3
    const numPoints = 80

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints)
      const theta = Math.sqrt(numPoints * Math.PI) * phi

      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(phi)

      points.push({
        x: x + size / 2,
        y: y + size / 2,
        z: z,
        originalX: x,
        originalY: y,
        originalZ: z,
      })
    }

    let animationId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, size, size)
      time += 0.01

      // چرخش کره
      points.forEach((point) => {
        const rotY = time * 0.5
        const rotX = time * 0.3

        // چرخش حول محور Y
        const cosY = Math.cos(rotY)
        const sinY = Math.sin(rotY)
        const x1 = point.originalX * cosY - point.originalZ * sinY
        const z1 = point.originalX * sinY + point.originalZ * cosY

        // چرخش حول محور X
        const cosX = Math.cos(rotX)
        const sinX = Math.sin(rotX)
        const y1 = point.originalY * cosX - z1 * sinX
        const z2 = point.originalY * sinX + z1 * cosX

        point.x = x1 + size / 2
        point.y = y1 + size / 2
        point.z = z2
      })

      // مرتب‌سازی نقاط بر اساس z (عمق)
      points.sort((a, b) => b.z - a.z)

      // رسم اتصالات
      ctx.strokeStyle = "#d5a253"
      ctx.lineWidth = 0.8
      ctx.globalAlpha = 0.6

      points.forEach((point, i) => {
        points.slice(i + 1).forEach((otherPoint) => {
          const distance = Math.sqrt(
            Math.pow(point.x - otherPoint.x, 2) +
            Math.pow(point.y - otherPoint.y, 2)
          )

          if (distance < 100) {
            const alpha = 1 - distance / 100
            ctx.globalAlpha = alpha * 0.4

            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            ctx.stroke()
          }
        })
      })

      // رسم نقاط
      points.forEach((point) => {
        const depth = (point.z + radius) / (2 * radius)
        const pointSize = 2 + depth * 2
        const alpha = 0.4 + depth * 0.6

        ctx.globalAlpha = alpha
        ctx.fillStyle = "#d5a253"
        ctx.beginPath()
        ctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2)
        ctx.fill()

        // هاله نوری
        ctx.globalAlpha = alpha * 0.3
        ctx.beginPath()
        ctx.arc(point.x, point.y, pointSize * 3, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [size])

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ maxWidth: size, maxHeight: size }}
      />
      {/* هاله نوری اضافی */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent rounded-full blur-xl" />
    </div>
  )
}