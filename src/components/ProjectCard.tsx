import Image from 'next/image';
import { Technologies } from './Technologies';

interface Screenshot {
  src: string;
  desc?: string;
  width?: number;
  height?: number;
}
interface Project {
  title: string;
  description: string;
  technologies: string[];
  screenshots: Screenshot[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-700 dark:text-gray-100 mb-4">
        {project.description}
      </p>
      <div className="mb-4 flex items-center">
        <Technologies name="Technologies" tech={project.technologies} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.screenshots.map((x, index) => (
          <div className="flex flex-col items-center" key={index}>
            <Image
              priority={index <= 2}
              key={index}
              src={x.src}
              alt={`${project.title} screenshot ${index + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                borderRadius: '3px',
                width: x.width ?? 500,
                height: x.height ?? 'auto',
              }}
            />
            {x.desc && <p className="text-sm dark:text-gray-100">{x.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
