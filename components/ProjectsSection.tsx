/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Studens-Hub",
    description:
      "Developed the backend for a student platform built with Django, designed to enhance academic life. The platform includes features like course summarization, access to recorded lectures, housing management, course ratings, and more.",
    image: "/image.png",
    technologies: ["Django", "PostgreSQL", "Django REST Framework"],
    liveUrl: "https://students-hub.com/",
    githubUrl: "",
    featured: true,
  },
  {
    title: "HRM Dashboard",
    description:
      "A management dashboard for Human Rights Monitor with real-time analytics and role-based Access JWT for authentication.",
    image: "/hrm.png",
    technologies: ["Fast-API", "MongoDB", "Firebase"],
    liveUrl: "",
    githubUrl: "https://github.com/Mohammad-Zaben/Human_Rights_Monitor",
    featured: true,
  },
  {
    title: "Mahsooli",
    description:
      "modern dashboard Mahsooli is a smart farming app that helps farmers monitor crops using real-time climate data. It features an AI chatbot that offers tailored suggestions and answers questions, along with a built-in marketplace to explore and promote agricultural products and more. built with Next.js and Tailwind CSS. This project provides a complete frontend for a professional analytics dashboard.",
    image: "/mahsooli.png",
    technologies: ["flutter", "node.js", "MySql"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.AnanElayan.mahsooli_app",
    githubUrl: "",
    featured: true,
  },
  
];

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-text-primary">
            My Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
Explore projects where I have contributed as a backend developer, focusing on building robust RESTful APIs and 
integrating with frontend technologies to deliver comprehensive solutions.          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
  <div data-aos="zoom-in" key={index} className="group relative overflow-hidden rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300">
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
        <div className="flex space-x-2">
          {/* GitHub Link - Only show if exists */}
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" className="text-text-primary hover:text-primary transition-colors">
              <FaGithub className="h-5 w-5" />
            </Link>
          )}
          {/* Live URL Link - Only show if exists */}
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" className="text-text-primary hover:text-primary transition-colors">
              <FaExternalLinkAlt className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
      <p className="text-sm text-text-secondary mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, techIndex) => (
          <span key={techIndex} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
))}
          </div>
        </div>

       
        
      </div>
    </section>
  );
}