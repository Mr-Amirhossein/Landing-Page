import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

/**
 * کامپوننت Container برای محدود کردن عرض محتوا
 * @param children - محتوای داخلی
 * @param className - کلاس‌های CSS اضافی
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 md:px-6 lg:px-8", className)}>
      {children}
    </div>
  )
}