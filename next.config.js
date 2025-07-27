/** @type {import('next').NextConfig} */
const nextConfig = {
  // پیکربندی‌های مورد نیاز Next.js
  reactStrictMode: true,
  images: {
    domains: ['dutco.com'], // دامنه‌های مجاز برای تصاویر خارجی
  },
}

module.exports = nextConfig
