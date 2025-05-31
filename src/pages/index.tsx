import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-6">
          I&apos;m a full stack developer with 10+ years of experience. I specialize in React.js, .NET Core, and
              Cloud technologies. Check out my work!
        </p>
        <Link
          href="/projects"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Projects
        </Link>
      </main>
      <Footer />
    </div>
  );
}
