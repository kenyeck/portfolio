import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
