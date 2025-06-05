'use client';

import ClientLayout from './ClientLayout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

export default function Project() {
  const id = useSearchParams()?.get('id');
  const project = projects.find((p) => p.id.toString() === id);

  return (
    <ClientLayout>
      {project && (
        <div className="flex flex-col mt-16">
          <ProjectCard key={project?.id} project={project!} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <Link
              href="/#projects"
              className="text-center mt-4 mb-8 hover:no-underline"
            >
              <div className="flex flex-row gap-2 items-center justify-center">
                <FaArrowLeft size={'1.25em'} />
                <span>Back</span>
              </div>
            </Link>
          </motion.div>
        </div>
      )}
    </ClientLayout>
  );
}
