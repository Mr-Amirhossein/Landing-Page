import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * ترکیب کلاس‌های CSS با استفاده از clsx و tailwind-merge
 * این تابع برای ترکیب صحیح کلاس‌های Tailwind CSS استفاده می‌شود
 * @param inputs - لیستی از کلاس‌ها
 * @returns کلاس‌های ترکیب شده
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}