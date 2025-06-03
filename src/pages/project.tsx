import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

export default function Project() {
  const router = useRouter();
  const project = projects.find((p) => p.id.toString() === router.query.id);

  return (
    <>
      {project && (
        <div className=" min-h-screen flex flex-col bg-white dark:bg-bkacl mt-16">
          <ProjectCard key={project?.id} project={project!} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center bg-white dark:bg-black"
          >
            <Link
              href="/#projects"
              className="text-center text-gray-800 bg-white dark:text-gray-300 dark:bg-black mt-4 mb-8 hover:no-underline"
            >
              <div className="flex flex-row gap-2 items-center justify-center">
                <FaArrowLeft size={'1.25em'} />
                <span>Back</span>
              </div>
            </Link>
          </motion.div>
        </div>
      )}
    </>
  );
}
