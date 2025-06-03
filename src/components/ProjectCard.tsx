import { useState } from 'react';
import Image from 'next/image';
import { Technologies } from './Technologies';
import ImageModal from './ImageModal';

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
  const [isOpen, setIsOpen] = useState(-1);

  const openModal = (id: number) => {
    if (id !== -1) {
      setIsOpen(id);
    }
  };

  return (
    <div className="shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">{project.title}</h2>
      <p className="mb-6">{project.description}</p>
      <div className="mb-4 flex items-center mb-6">
        <Technologies name="Technologies" tech={project.technologies} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.screenshots.map((x, index) => (
          <>
            <div
              className="flex flex-col items-center cursor-pointer"
              key={index} 
            >
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
                onClick={() => openModal(index)}
              />
            {x.desc && <p className="text-sm pt-2">{x.desc}</p>}
            </div>
              <ImageModal
                key={`modal-${index}`}
                src={x.src}
                alt={`${project.title} screenshot ${index + 1}`}
                isOpen={isOpen === index}
                onClose={() => setIsOpen(-1)}
              />
          </>
        ))}
      </div>
    </div>
  );
}
