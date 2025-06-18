/* eslint-disable react/no-unescaped-entities */
"use client";
import { AiOutlineApi } from 'react-icons/ai';

import { FaJava, FaGitAlt, FaGithub,FaRegCompass,FaServer, } from "react-icons/fa";
import { SiPostman,SiMongodb, SiNodedotjs, SiPython,SiDjango,SiFastapi,SiPostgresql ,SiMysql,SiFirebase,SiOpenapiinitiative,SiPandas,SiScikitlearn,SiNumpy,SiApacheairflow} from "react-icons/si";
import { BiCodeAlt, BiLayer, BiTerminal, BiWrench } from "react-icons/bi";

const skills = [
  {
    icon: <BiCodeAlt className="h-8 w-8 mb-4 text-primary" />,
    title: "Back-End Development",
    description: "Building and optimizing server-side applications with modern back-end frameworks.",
    technologies: [
      { name: "Java", icon: <FaJava className="inline mr-1" /> },
      { name: "Python", icon: <SiPython className="inline mr-1" /> },
      { name: "Django", icon: <SiDjango className="inline mr-1" /> },
      { name: "FastAPI", icon: <SiFastapi className="inline mr-1" /> },
      { name: "Node.js", icon: <SiNodedotjs className="inline mr-1" /> },

    ],
  },
  {
    icon: <BiLayer className="h-8 w-8 mb-4 text-primary" />,
    title: "Database Management",
    description: "Designing and managing databases for efficient data storage and retrieval.",
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql className="inline mr-1" /> },
      { name: "MySQL", icon: <SiMysql className="inline mr-1" /> },
      { name: "MongoDB", icon: <SiMongodb className="inline mr-1" /> },
      { name: "Firebase", icon: <SiFirebase className="inline mr-1" /> },
    ],
  },
  {
    icon: <BiTerminal className="h-8 w-8 mb-4 text-primary" />,
    title: "API Development",
    description: "Designing, documenting, and testing robust RESTful APIs using OpenAPI specifications, Swagger, Postman, and modern API development practices.",
    technologies: [
        { name: "REST APIs", icon: <AiOutlineApi className="inline mr-1" /> },
        { name: "Swagger", icon: <FaRegCompass className="inline mr-1" /> },
        { name: "Postman", icon: <SiPostman className="inline mr-1" /> },
        { name: "OpenAPI", icon: <SiOpenapiinitiative className="inline mr-1" /> },
    ],
  },

  {
    icon: <FaGitAlt className="h-8 w-8 mb-4 text-primary" />,
    title: "Version Control & Deployment",
    description: "Managing version control and automating deployment processes.",
    technologies: [
      { name: "Git", icon: <FaGitAlt className="inline mr-1" /> },
      { name: "GitHub", icon: <FaGithub className="inline mr-1" /> },
    ],
  },{
  icon: <SiPython className="h-8 w-8 mb-4 text-primary" />,
  title: "Data Analysis & Processing",
  description: "Extracting, transforming, and processing data for actionable insights.",
  technologies: [
    { name: "Pandas", icon: <SiPandas className="inline mr-1" /> },
    { name: "ETL", icon: <SiApacheairflow className="inline mr-1" /> },
    { name: "NumPy", icon: <SiNumpy className="inline mr-1" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn className="inline mr-1" /> },
  ],
}
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-text-primary">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            I've worked with a variety of technologies in front-end development.
            Here are some of my key areas of expertise:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
            data-aos="zoom-in" 
              key={index}
              className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="text-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{skill.title}</h3>
                <p className="text-sm mb-4 text-text-secondary">{skill.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center"
                  >
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}