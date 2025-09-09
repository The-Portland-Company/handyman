import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hill Handyman Services",
  description: "Your reliable local handyman who specializes in solar panel systems, Tiny Homes and homestead dirty jobs. Serving Bend, Sunriver, LaPine, Sisters, Redmond, and surrounding areas.",
  metadataBase: new URL('https://handyman.pages.dev'),
  openGraph: {
    title: 'Hill Handyman Services',
    description: 'Your reliable local handyman who specializes in solar panel systems, Tiny Homes and homestead dirty jobs. Serving Bend, Sunriver, LaPine, and surrounding areas.',
    url: 'https://handyman.pages.dev',
    siteName: 'Hill Handyman Services',
    images: [
      {
        url: '/profile-photo.jpg',
        width: 1200,
        height: 1200,
        alt: 'Spencer Hill - Hill Handyman Services',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hill Handyman Services',
    description: 'Your reliable local handyman who specializes in solar panel systems, Tiny Homes and homestead dirty jobs.',
    images: ['/profile-photo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
