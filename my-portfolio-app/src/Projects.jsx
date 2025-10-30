import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MovieDatabase App",
    description:
      "A modern movie database application with search, filtering, and user authentication features. Built with React.js and TailwindCSS.",
    image:
      "/MOVIEDB.png",
    tags: ["React.js", "TailwindCSS", "OMDB API"],
    liveUrl: "https://movie-db-app-999v.vercel.app/",
    githubUrl: "https://github.com/Ursullah/movie-db-app.git",
  },
  {
    title: "Prescription Verifier",
    description:
      "The Prescription Verifier is designed to streamline the process of verifying medical prescriptions. The system allows pharmacists to verify prescriptions based on the doctor’s credentials before dispensing medication.",
    image:
      "/PRESCRIPTION.jpg",
    tags: ["React.js", "TailwindCSS", "Python", "Flask", "SQLite"],
    githubUrl: "https://github.com/Ursullah/DEVCI.git",
  },
  {
    title: "Dynamic Quote Generator",
    description:
      "An interactive analytics dashboard with real-time data visualization, customizable widgets, and comprehensive reporting features.",
    image:
      "/QUOTES.png",
    tags: ["HTML", "CSS", "Javascript", "JSONPlaceholder API"],
    githubUrl: "https://github.com/Ursullah/DynamicQuoteGenerator.git",
  },
//   {
//     title: "Portfolio Website",
//     description:
//       "A stunning portfolio website with smooth animations, and optimized performance for showcasing creative work.",
//     image:
//       "/PORTFOLIO.png",
//     tags: ["React.js", "Framer Motion", "TailwindCSS"],
//     liveUrl: "https://ursullah-portfolio-git-main-ursullahs-projects.vercel.app",
//     githubUrl: "https://github.com/Ursullah/ursullah-portfolio.git",
//   },
];

export function Projects() {
  return (
   <section id="projects" className="py-20 bg-gradient-to-b from-white to-pink-50">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Projects</h2>
      <p className="max-w-2xl mx-auto text-slate-600">
        Here are some of my recent projects that showcase my skills and experience
        in front-end development.
      </p>
    </motion.div>

    {/* 4-column grid section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white border border-pink-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-pink-50">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{project.title}</h3>
            <p className="text-slate-600 mb-4 text-sm flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition-colors"
              >
                <ExternalLink size={14} />
                Live
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-pink-300 text-pink-600 hover:bg-pink-50 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition-colors"
              >
                <Github size={14} />
                Code
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    );  
}
