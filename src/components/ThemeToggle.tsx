'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-3 rounded-md text-gray-800 dark:text-gray-200 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors cursor-pointer"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}