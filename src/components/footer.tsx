import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
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
  ];

  return (
    <footer className="bg-custom-gradient backdrop-blur-md py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <link.icon className="w-5 h-5" />
                <span className="sr-only">{link.label}</span>
              </Link>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Bradley Hung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
