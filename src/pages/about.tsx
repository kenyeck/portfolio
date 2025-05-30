import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/images/headshot.jpg"
            alt="Ken Yeck"
            width={200}
            height={200}
            className="rounded-full mb-4 md:mr-6"
          />
          <div>
            <p className="text-lg mb-4">
              I’m a full stack developer with 5+ years of experience building
              scalable web applications. I specialize in React, Node.js, and
              cloud technologies.
            </p>
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside">
              <li>JavaScript, TypeScript, React, Next.js</li>
              <li>Node.js, Express, MongoDB</li>
              <li>AWS, Docker, CI/CD</li>
            </ul>
            <a
              href="/resume.pdf"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
