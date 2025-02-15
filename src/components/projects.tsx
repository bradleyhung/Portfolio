"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "CampusQuest",
    description: "An innovative web application designed to foster student connections through customizable social activities. Whether it's a study session at the library, a casual lunch hangout, or an educational trip to the museum, students can create and share their own unique \"Social Quests.\" This platform encourages collaboration, friendship, and enriching experiences, making campus life more engaging and enjoyable.",
    image: "/assets/CampusQuestImage.jpg",
    tags: ["Express.js", "Firebase", "React", "MERN Stack", "JavaScript", "Node.js", "TailwindCSS"],
    liveUrl: "https://campus-quest.vercel.app/",
  },
  {
    title: "PetPals",
    description: "A web application that will allow users without pets to explore various pet species and connect with current pet owners, fostering a sense of community and shared interest. Additionally, it will serve as a social media hub where pet owners can communicate, bond, and invite non-pet owners to join their activities.",
    image: "/assets/PetpalImage.jpg",
    tags: ["NextJS", "Express.js", "MongoDB", "TailwindCSS", "Google Gemini", "Retrieval-Augmented Generation (RAG)", "Node.js", "Git", "TypeScript", "Amazon S3"],
    githubUrl: "https://github.com/birongliu/PetPals",
    liveUrl: "https://cisc-4900.vercel.app/",
  },
  {
    title: "ScholarshipFinder",
    description: "A dedicated platform designed exclusively for CUNY students to discover and apply for scholarships. Our mission is to empower students by providing a streamlined, user-friendly experience to access financial aid opportunities tailored to their unique profiles",
    image: "/assets/ScholarshipImage.jpg",
    tags: ["MongoDB", "TypeScript", "Express.js", "React.js", "Node.js", "MERN Stack"],
    githubUrl: "https://github.com/XiuwenZ/ScholarshipFinder",
  },
];

export function Projects() {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
