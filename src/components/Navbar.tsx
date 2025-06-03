import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };
  return (
    <>
      <button className="md:hidden" onClick={toggleMenu}>
        ☰
      </button>
      <nav
        id="menu"
        className="opacity-80 fixed top-0 z-100 flex w-full p-4 flex justify-between items-center transition-all duration-300
        bg-gray-300/50 dark:bg-black/20 shadow-md backdrop-blur-sm"
      >
        <div className="container mx-auto flex justify-between items-center mr-4">
          <div className="space-x-4 flex font-bold">
            <Link
              href="/#home"
              className="hover:text-black dark:hover:text-gray-300 content-center"
            >
              Home
            </Link>
            <Link
              href="/#projects"
              className="hover:text-black dark:hover:text-gray-300 content-center"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="hover:text-black dark:hover:text-gray-300 content-center"
            >
              Contact
            </Link>
          </div>
        </div>
        <ThemeToggle />
      </nav>
    </>
  );
}
