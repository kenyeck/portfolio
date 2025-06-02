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
      <button className="text-white md:hidden" onClick={toggleMenu}>
        ☰
      </button>
      <nav
        id="menu"
        className="opacity-80 fixed top-0 z-100 flex w-full bg-black text-white dark:bg-white dark:text-black p-4 flex justify-between items-center"
      >
        <div className="container mx-auto flex justify-between items-center mr-4">
          <div className="space-x-4 flex">
            <Link
              href="/#home"
              className="hover:text-gray-300 dark:text-gray-800 hover:text-bold content-center"
            >
              Home
            </Link>
            <Link
              href="/#projects"
              className="hover:text-gray-300 content-center"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="hover:text-gray-300 content-center"
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
