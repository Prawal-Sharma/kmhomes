import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "KM Homes - Your Home Away From Home",
  description: "Professional property management serving modern professionals. Travel nurses, consultants, and working professionals trust KM Homes for comfortable, reliable accommodations.",
  keywords: "property management, corporate housing, short term rentals, travel nurse housing, professional accommodations, Plano Texas",
  authors: [{ name: "KM Homes" }],
  creator: "KM Homes",
  publisher: "KM Homes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "KM Homes - Your Home Away From Home",
    description: "Professional property management serving modern professionals. Travel nurses, consultants, and working professionals trust KM Homes.",
    url: "https://kmhomes.com",
    siteName: "KM Homes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KM Homes - Your Home Away From Home",
    description: "Professional property management serving modern professionals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo-transparent.png",
    apple: "/images/logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
