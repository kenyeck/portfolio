import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Technologies } from '@/components/Technologies';

const fdev = [
  'React.js',
  'Next.js',
  'TypeScript',
  'HTML',
  'CSS',
  'Redux',
  'Chakra-UI',
  'Material-UI',
];
const bdev = [
  '.NET Core',
  'ASP.NET MVC',
  'Node.js',
  'C#',
  'Authentication (OAuth, JWT)',
];
const api = [
  'REST APIs',
  'Microsoft Graph API',
  'OpenAI API Integration',
  'GraphQL',
];
const dbs = ['MSSQL', 'MongoDB', 'Firestore', 'Entity Framework'];
const cloud = ['Microsoft Azure', 'Google Cloud'];
const devops = ['Git', 'Netlify CMS', 'CI/CD (Azure DevOps)', 'Postman'];
const testing = ['TDD', 'Jest', 'NUnit', 'React Testing Library', 'Wallaby'];
const pm = ['Agile Methodologies (Scrum, Kanban)', 'JIRA'];

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
              <li className="mb-2 flex flex-row items-center">
                <Technologies name="Frontend Development" tech={fdev} />
              </li>
              <li className="mb-2 flex flex-row items-center">
                <Technologies name="Backend Development" tech={bdev} />
              </li>
              <li className="mb-2 flex flex-row items-center">
                <Technologies name="API & Data Integration" tech={api} />
              </li>
              <li className="mb-2 flex flex-row items-center">
                <Technologies name="Databases" tech={dbs} />
              </li>
              <li className="mb-2 flex flex-row items-center">
                <Technologies name="Cloud & Serverless" tech={cloud} />
              </li>
              <li className="mb-2 flex flex-row items-center">
                <Technologies name="DevOps & Tools" tech={devops} />
              </li>
              <li className="mb-2 flex flex-row items-center">
                <Technologies name="Testing" tech={testing} />
              </li>
              <li className="mb-2 flex flex-row items-center">
                <Technologies
                  name="Project Management & Methodologies"
                  tech={pm}
                />
              </li>
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
