"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/bradleyhung",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com//in/bradley-hung",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:xluxforeverx22@gmail.com",
      label: "Email",
    },
    {
      icon: FileText, // Use FileText icon for the resume link
      href: "/assets/BradleyHungResume.pdf", // Path to your resume PDF
      label: "Resume",
      download: true, // Add download attribute
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl font-bold text-gray-900 md:text-7xl lg:text-8xl tracking-tight"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            Hi, I&apos;m Bradley Hung
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 md:text-2xl max-w-2xl mx-auto"
        >
          I&apos;m a software engineer based in New York City, interested in
          building new projects with people.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center space-x-6"
        >
          {socialLinks.map((link) =>
            link.download ? (
              <a
                key={link.label}
                href={link.href}
                download
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.label}</span>
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.label}</span>
              </Link>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
