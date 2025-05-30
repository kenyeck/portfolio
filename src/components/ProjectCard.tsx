import Image from 'next/image';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  screenshots: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Technologies:</h3>
        <ul className="list-disc list-inside">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.screenshots.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`${project.title} screenshot ${index + 1}`}
            width={500}
            height={300}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
