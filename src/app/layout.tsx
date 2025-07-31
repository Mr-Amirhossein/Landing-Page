import type { Metadata } from "next";
import { Poppins, Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { ErrorBoundary } from "@/components/error-boundary";
import { AdvancedAIChatbot } from "@/components/advanced-ai-chatbot";

/**
 * Typography setup for Civilaris Global
 * Poppins for headings - professional sans-serif with excellent readability
 * Inter for body text - optimized for screens and user interfaces
 * Vazirmatn for Persian text - modern Persian font
 */
const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const vazirmatn = Vazirmatn({ 
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Civilaris Global - Smarter Tools, Stronger Projects",
  description: "Trusted partner to engineers, builders, and procurement teams across borders. Premium construction products and solutions.",
  keywords: ["construction", "engineering", "procurement", "building materials", "global supplier", "civilaris"],
  authors: [{ name: "Civilaris Global" }],
  creator: "Civilaris Global",
  metadataBase: new URL("https://civilarisglobal.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  openGraph: {
    title: "Civilaris Global - Smarter Tools, Stronger Projects",
    description: "Trusted partner to engineers, builders, and procurement teams across borders.",
    url: "https://civilarisglobal.com",
    siteName: "Civilaris Global",
    type: "website",
    locale: 'en_US',
    alternateLocale: ['fa_IR'],
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Civilaris Global - Construction Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Civilaris Global - Smarter Tools, Stronger Projects',
    description: 'Trusted partner to engineers, builders, and procurement teams across borders.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://civilarisglobal.com',
    languages: {
      'en-US': 'https://civilarisglobal.com',
      'fa-IR': 'https://civilarisglobal.com/fa',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} ${vazirmatn.variable} font-sans antialiased smooth-scroll`}
      >
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <LanguageProvider>
              {children}
              <AdvancedAIChatbot />
            </LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
