import React from "react";
import { motion } from "motion/react";
import { Code, Palette, Zap, Users } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Modern Frameworks",
    description:
      "Proficient in React.js for building scalable applications.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive interfaces with Tailwind CSS and Figma.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing web apps for speed, accessibility, and user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively with cross-functional teams and stakeholders.",
  },
];

const techStack = [
  "React",
  "Node.js",
  "Tailwind CSS",
  "JavaScript",
  "HTML/CSS",
  "Github",
  "Figma",
  "Redux",
  "REST APIs",
  "Responsive Design",
];

export default function About() {
  return (
    <section className="min-h-[60vh] bg-gradient-to-b from-white via-pink-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            I’m a passionate front-end developer with 1 year of experience
            building modern web applications. I love turning complex problems
            into simple, beautiful, and intuitive designs.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-6 h-full border border-pink-200 rounded-3xl bg-gradient-to-br from-pink-50 via-white to-purple-50 shadow-sm hover:shadow-2xl hover:border-pink-300 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-fuchsia-500 text-white shadow-md">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-2xl font-semibold mb-8 text-gray-900">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 rounded-full text-pink-700 bg-gradient-to-r from-pink-100 via-fuchsia-100 to-purple-100 border border-pink-200 hover:shadow-md hover:scale-105 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Soft Gradient Accent Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-pink-200 opacity-20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-200 opacity-20 blur-3xl rounded-full" />
      </div>
    </section>
  );
}
