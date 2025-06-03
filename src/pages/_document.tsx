import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ken Yeck - Software Developer</title>
        <meta
          name="description"
          content="Welcome to my portfolio! I am a passionate software developer with a focus on clean, minimal, and effective solutions. I believe in the power of simplicity and thoughtful design to create impactful digital experiences."
        />
        <meta
          name="keywords"
          content="Software Developer,Clean Code,Minimal Design,Modern Development,Web Development,User Experience,Design Systems,JavaScript,TypeScript,React,Next.js,Performance,Accessibility,Minimalist Portfolio,Your Name"
        />
        <meta name="author" content="Ken Yeck" />
        <meta name="creator" content="Ken Yeck" />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Ken Yeck - Software Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Passionate software developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy."
        />
        <meta property="og:url" content="https://kenyeck.com" />
        <meta property="og:site_name" content="Ken Yeck - Portfolio" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ken Yeck - Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {/* Robots */}
        <meta name="robots" content="index,follow" />
        <meta
          name="googlebot"
          content="index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
