'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20 dark:bg-gradient-to-b dark:from-white/10 dark:to-white/10">
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
              className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <h3 className="text-lg font-semibold pb-2 dark:text-gray-800">{skill.name}</h3>
              <div className="mt-2 text-sm text-gray-300 flex flex-wrap justify-center gap-2 border-t pt-4 dark:text-gray-800">
                {skill.tech.map((tech, techIndex) => (
                  <div key={techIndex} className="mb-1">
                    <span className="inline-block bg-gray-300/20 text-white-400 px-2 py-1 rounded-full border border-gray-300/30 dark:text-black dark:bg-gray-800/20 dark:border-gray-800/30">
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
