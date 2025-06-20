import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '../types/types';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: project.id * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
    >
      <Image
        src={project.screenshots[0].src}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform group-hover:scale-105"
        unoptimized={project.screenshots[0].src.endsWith('.gif')}
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
      <div className="absolute inset-5 p-4 flex flex-col justify-between space-y text-white">
        <div className="flex-col">
          <h3 className="xl:text-xl font-bold mb-2">{project.title}</h3>
          <p className="mb-4 mh-50">{project.shortDesc}</p>
        </div>
        <Link
          href={`/project?id=${project.id}`}
          className="text-sm px-4 py-2 bg-white/10 hover:bg-white/50 rounded-full transition-colors w-fit"
        >
          Details
        </Link>
      </div>
    </motion.div>
  );
}
