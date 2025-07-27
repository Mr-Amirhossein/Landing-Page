# DUTCO Landing Page

یک لندینگ پیج حرفه‌ای و مدرن برای شرکت DUTCO با استفاده از تکنولوژی‌های روز دنیا.

## 🚀 ویژگی‌ها

- **طراحی ریسپانسیو**: سازگار با تمام دستگاه‌ها (موبایل، تبلت، دسکتاپ)
- **تم تاریک/روشن**: قابلیت تغییر تم با حفظ تنظیمات کاربر
- **انیمیشن‌های نرم**: انیمیشن‌های ظریف برای تجربه کاربری بهتر
- **فرم تماس**: فرم تماس کامل با validation
- **SEO بهینه**: بهینه‌سازی شده برای موتورهای جستجو
- **Performance بالا**: بارگذاری سریع و عملکرد بهینه

## 🛠️ تکنولوژی‌های استفاده شده

- **Next.js 14**: فریمورک React با App Router
- **React 19**: کتابخانه UI
- **TypeScript**: Type Safety و بهبود DX
- **Tailwind CSS v4**: استایلینگ مدرن
- **Shadcn/UI**: کامپوننت‌های UI با کیفیت بالا
- **Lucide Icons**: آیکون‌های زیبا و سبک
- **React Hook Form**: مدیریت فرم‌ها
- **Zod**: اعتبارسنجی داده‌ها

## 📦 نصب و راه‌اندازی

### پیش‌نیازها

- Node.js 18.17 یا بالاتر
- npm یا yarn

### مراحل نصب

1. کلون کردن پروژه:
```bash
git clone https://github.com/your-username/dutco-landing.git
cd dutco-landing
```

2. نصب وابستگی‌ها:
```bash
npm install
# یا
yarn install
```

3. اجرای پروژه در حالت توسعه:
```bash
npm run dev
# یا
yarn dev
```

4. باز کردن مرورگر:
```
http://localhost:3000
```

## 📁 ساختار پروژه

```
src/
├── app/                    # صفحات و layout اصلی
│   ├── layout.tsx         # Layout اصلی با ThemeProvider
│   ├── page.tsx           # صفحه اصلی
│   └── globals.css        # استایل‌های global و تنظیمات Tailwind
├── components/            # کامپوننت‌های React
│   ├── layout/           # کامپوننت‌های layout
│   │   ├── header.tsx    # هدر و منوی ناوبری
│   │   ├── footer.tsx    # فوتر سایت
│   │   └── container.tsx # Container برای محتوا
│   ├── sections/         # بخش‌های مختلف صفحه
│   │   ├── hero.tsx      # بخش Hero
│   │   ├── about.tsx     # بخش درباره ما
│   │   ├── services.tsx  # بخش خدمات
│   │   ├── features.tsx  # بخش ویژگی‌ها
│   │   └── contact.tsx   # بخش تماس با ما
│   ├── ui/              # کامپوننت‌های UI پایه
│   │   ├── button.tsx    # دکمه
│   │   ├── card.tsx      # کارت
│   │   ├── input.tsx     # فیلد ورودی
│   │   ├── textarea.tsx  # فیلد متن
│   │   ├── label.tsx     # برچسب فرم
│   │   └── theme-toggle.tsx # تغییر تم
│   └── providers/        # Provider ها
│       └── theme-provider.tsx # مدیریت تم
└── lib/                  # توابع کمکی
    └── utils.ts          # تابع cn برای ترکیب کلاس‌ها
```

## 🎨 سفارشی‌سازی

### تغییر رنگ‌ها

رنگ‌های اصلی در فایل `src/app/globals.css` تعریف شده‌اند:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* سایر رنگ‌ها... */
}
```

### تغییر فونت

فونت در فایل `src/app/layout.tsx` تنظیم می‌شود:

```typescript
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});
```

### اضافه کردن بخش جدید

1. کامپوننت جدید در `src/components/sections/` بسازید
2. آن را در `src/app/page.tsx` import و استفاده کنید

## 🚀 دیپلوی

### Vercel (پیشنهادی)

```bash
npm install -g vercel
vercel
```

### Build برای Production

```bash
npm run build
npm run start
```

## 📝 Scripts

- `npm run dev` - اجرا در حالت توسعه
- `npm run build` - ساخت برای production
- `npm run start` - اجرای نسخه production
- `npm run lint` - بررسی کد با ESLint

## 🤝 مشارکت

مشارکت‌های شما را با آغوش باز می‌پذیریم! لطفاً:

1. Fork کنید
2. Branch جدید بسازید (`git checkout -b feature/amazing-feature`)
3. تغییرات را Commit کنید (`git commit -m 'Add amazing feature'`)
4. Push کنید (`git push origin feature/amazing-feature`)
5. Pull Request بسازید

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

## 👥 تیم توسعه

ساخته شده با ❤️ توسط تیم توسعه DUTCO

---

برای سوالات و پشتیبانی: support@dutco.com