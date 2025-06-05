'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/20 dark:bg-gray-800/50 hover:bg-gray-800/30 dark:hover:bg-gray-800 rounded-xl p-6 text-center transition-colors"
            >
              <h3 className="text-lg font-semibold pb-2">{skill.name}</h3>
              <div className="mt-2 text-sm flex flex-wrap justify-center gap-2 border-t pt-4">
                {skill.tech.map((tech, techIndex) => (
                  <div key={techIndex} className="mb-1">
                    <span className="inline-block dark:text-gray-300 dark:bg-gray-300/20 bg-gray-800/20 border border-gray-800/30 dark:border-gray-300/30 px-2 py-1 rounded-full ">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
