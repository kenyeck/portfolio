'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="Projects" className="md:py-20 py-12 max-w-7xl mx-auto w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
      >
        Recent Projects
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-10 md:px-20 sm:px-10 px-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
