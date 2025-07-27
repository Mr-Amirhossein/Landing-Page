import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";

/**
 * Typography setup for Civilaris Global
 * Poppins for headings - professional sans-serif with excellent readability
 * Inter for body text - optimized for screens and user interfaces
 * Vazir for Persian text - modern Persian font
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


export const metadata: Metadata = {
  title: "Civilaris Global - Smarter Tools, Stronger Projects",
  description: "Trusted partner to engineers, builders, and procurement teams across borders. Premium construction products and solutions.",
  keywords: ["construction", "engineering", "procurement", "building materials", "global supplier", "civilaris"],
  authors: [{ name: "Civilaris Global" }],
  creator: "Civilaris Global",
  metadataBase: new URL("https://civilarisglobal.com"),
  openGraph: {
    title: "Civilaris Global - Smarter Tools, Stronger Projects",
    description: "Trusted partner to engineers, builders, and procurement teams across borders.",
    url: "https://civilarisglobal.com",
    siteName: "Civilaris Global",
    type: "website",
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
        className={`${poppins.variable} ${inter.variable} font-sans antialiased smooth-scroll`}
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
