

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, FileDown } from "lucide-react";
import {ReactTyped} from "react-typed";


export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 text-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
            {/* Typewriter effect on name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-5xl font-bold"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              <ReactTyped
                strings={[
                  "Ursullah Khanguha",
                  "A Frontend Developer",
                  "A UI/UX Enthusiast",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 text-gray-600 text-xl font-semibold"
          >
            Front-End Developer
          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto mb-8 text-gray-600"
          >
            I build responsive and dynamic web applications using HTML, CSS & JS,
            and modern JavaScript frameworks such as React.js and Node.js. Passionate about turning creative
            ideas into functional digital experiences.
          </motion.p>

          {/* Replace <Button> with inline-styled buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 justify-center mb-12"
          >
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg shadow-lg transition"
            >
              View My Work
            </button>
            <a
              href="#contact"
              className="px-6 py-3 border border-pink-400 text-pink-500 hover:bg-pink-500 hover:text-white rounded-lg transition"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/Ursullah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ursullah-khanguha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:5l1dar2nm@mozmail.com"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Mail size={24} />
            </a>
           <a
            href="/Khanguha_Ursullah.pdf"
            download="Khanguha_Ursullah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-600 hover:text-pink-500 transition-colors flex items-center"
            >
           <FileDown size={24} className="transition-transform duration-200 group-hover:scale-110 group-hover:text-pink-500"
           />
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-pink-500">
            Download CV
            </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-pink-400" size={32} />
      </motion.div>
    </section>
  );
}

export default Hero;
