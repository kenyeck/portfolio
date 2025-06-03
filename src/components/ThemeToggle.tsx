'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-1 rounded-full text-gray-800 dark:text-gray-300 bg-gray-300 dark:bg-gray-800 transition-colors duration-200 cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-3 w-3" />
      ) : (
        <MoonIcon className="h-3 w-3" />
      )}
    </button>
  );
}
