import Image from 'next/image';

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
        <h3 className="text-lg font-semibold">Technologies:</h3>
        <div className="text-lg text-gray-600 dark:text-gray-300 h-fit ml-2">
          {project.technologies.join(', ')}
        </div>
        {/* <ul className="list-disc list-inside">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.screenshots.map((x, index) => (
          <div className="flex flex-col items-center" key={index}>
            <Image
              key={index}
              src={x.src}
              alt={`${project.title} screenshot ${index + 1}`}
              width={x.width ?? 500}
              height={x.height ?? 300}
              className="rounded-lg"
            />
            {x.desc && <p className="text-sm dark:text-gray-100">{x.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
