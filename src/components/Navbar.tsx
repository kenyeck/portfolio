import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

const menus = ['Home', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(menus[0]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    menus.forEach((menu: string) => {
      const element = document.getElementById(menu);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        id="menu"
        className="opacity-80 fixed top-0 z-100 flex w-full xs:p-4 p-1 justify-end xs:gap-4 transition-all duration-300
        bg-gray-300/5 dark:bg-black/20 shadow-md backdrop-blur-sm"
      >
        <ul className="space-x-2 flex">
          {menus.map((menu, i) => {
            return (
              <li
                key={i}
                className={`relative px-4 py-2 text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white group ${activeSection === menu ? 'font-bold text-black dark:text-white' : ''}`}
              >
                <a href={`/#${menu}`} className="relative">
                  {menu}
                  <span className="absolute inset-x-0 -bottom-2 h-1 rounded-full bg-gray-800 dark:bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </a>
              </li>
            );
          })}
        </ul>
        <ThemeToggle />
      </nav>
    </>
  );
}
