import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Technologies } from '@/components/Technologies';
import { skills } from '@/data/skills';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/images/headshot.jpg"
            alt="Ken Yeck"
            width={200}
            height={200}
            className="rounded-full mb-4 md:mr-6"
          />
          <div>
            <p className="text-lg mb-4">
              I&apos;m a full stack developer with 10+ years of experience
              building scalable web applications. I specialize in React.js, .NET
              Core, and Cloud technologies.
            </p>
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index} className="mb-2">
                  <Technologies name={skill.name} tech={skill.tech} />
                </li>
              ))}
            </ul>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/resume.pdf"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Resume
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
