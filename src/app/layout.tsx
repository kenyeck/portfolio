import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Ken Yeck - Software Developer',
  description:
    'Welcome to my portfolio! I am a passionate software developer with a focus on clean, minimal, and effective solutions. I believe in the power of simplicity and thoughtful design to create impactful digital experiences.',
  keywords:
    'Software Developer,Clean Code,Minimal Design,Modern Development,Web Development,User Experience,Design Systems,JavaScript,TypeScript,React,Next.js,Performance,Accessibility,Minimalist Portfolio,Your Name',
  authors: [{ name: 'Ken Yeck', url: 'https://kenyeck.com' }],
  creator: 'Ken Yeck',
  metadataBase: new URL('https://kenyeck.com'),
  openGraph: {
    title: 'Ken Yeck - Software Developer Portfolio',
    description:
      'Passionate software developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
    url: 'https://kenyeck.com',
    siteName: 'Ken Yeck - Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ken Yeck - Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Note hydration warning is suppressed due to ThemeToggle component
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
