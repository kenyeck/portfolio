import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Technologies } from './Technologies';
import ImageModal from './ImageModal';
import { useSearchParams } from 'next/navigation';
import { projects } from '@/data/projects';

export interface Screenshot {
  src: string;
  desc?: string;
  width?: number;
  height?: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDesc: string;
  technologies: string[];
  screenshots: Screenshot[];
}

const defaultProject: Project = {
  id: -1,
  title: '',
  description: '',
  shortDesc: '',
  technologies: [],
  screenshots: [],
};

export default function ProjectCard() {
  const [isOpen, setIsOpen] = useState(-1);
  const id = useSearchParams()?.get('id');
  const project = projects.find((p) => p.id.toString() === id) ?? defaultProject;

  const openModal = (id: number) => {
    if (id !== -1) {
      setIsOpen(id);
    }
  };

  return (
    <motion.div id="Projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-16 flex justify-center"
    >
      <div className="shadow-md rounded-lg xs:mx-10 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80 xxl:mx-100 p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6">{project.title}</h2>
        <p className="mb-6">{project?.description}</p>
        <div className="flex items-center mb-6">
          <Technologies name="Technologies" tech={project.technologies} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.screenshots.map((x, index) => (
            <div key={index}>
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
                    height: x?.height ?? 'auto',
                  }}
                  onClick={() => openModal(index)}
                  unoptimized={x.src.endsWith('.gif')}
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
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
