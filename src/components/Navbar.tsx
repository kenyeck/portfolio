import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Ken Yeck
        </Link>
        <div className="space-x-4 flex">
          <Link href="/" className="hover:text-gray-300 content-center">
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-300 content-center">
            Projects
          </Link>
          <Link href="/about" className="hover:text-gray-300 content-center">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300 content-center">
            Contact
          </Link>
        </div>
      </div>
      <ThemeToggle />
    </nav>
  );
}
