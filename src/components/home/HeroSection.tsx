'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <motion.section
      id="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Ken Yeck
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 px-4"
        >
          Full Stack Developer & UI/UX Enthusiast
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:text-xl mb-4 md:w-150 mt-10"
        >
          I&apos;m a software developer with 10+ years of experience building
          scalable web applications. I specialize in React.js, .NET Core, and
          Cloud technologies.
        </motion.p>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <FaArrowDown size={'1.25em'} />
        </div>
      </motion.div>
    </motion.section>
  );
}
