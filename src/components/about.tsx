"use client";

import { motion } from "framer-motion";

const skills = [
  "Java",
  "C++",
  "ReactJS",
  "Next.js",
  "Node.js",
  "ExpressJS",
  "HTML",
  "TailwindCSS",
  "Bootstrap",
  "Git/Github",
];

export function About() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Background</h3>
            <p className="text-gray-600 leading-relaxed">
              I&apos;m a passionate software engineer with experience in
              building modern web applications. I specialize in JavaScript
              technologies across the stack and have professional experience
              working with React and Node.js. When I&apos;m not coding,
              you&apos;ll find me writing about tech, contributing to open
              source, or exploring new technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
