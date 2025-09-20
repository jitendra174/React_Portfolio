import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    type: "Full Stack",
    year: "2025",
    title: "SB FOODS",
    desc: "Online food-ordering platform with secure authentication and admin dashboard. Real-time order tracking included. User-friendly and fully responsive.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    code: "https://github.com/jitendra174/SB-Foods",
    demo: "https://sb-foods-frontend.onrender.com/",
  },
  {
    type: "Frontend",
    year: "2025",
    title: "Developer Portfolio",
    desc: "Personal portfolio showcasing skills and projects. Built with React, Tailwind CSS, and Framer Motion. Fully responsive and interactive design.",
    stack: ["React", "Tailwind", "Framer Motion"],
    code: "https://github.com/jitendra174",
    demo: "https://jitendrachinta-portfolio.vercel.app/",
  },
  {
    type: "Frontend",
    year: "2025",
    title: "React Movie App",
    desc: "Movie browser app with search and category filters. Fetches data from public APIs. Responsive and clean UI for seamless user experience.",
    stack: ["React", "Axios"],
    code: "https://github.com/jitendra174/Net-Chill",
    demo: "https://net-chill-one.vercel.app/",
  },
  {
    type: "Frontend",
    year: "2025",
    title: "Restaurant Web App",
    desc: "Responsive restaurant website with dynamic menu and intuitive UI. Focused on smooth navigation. Compatible with all screen sizes.",
    stack: ["React", "Tailwind", "Framer Motion"],
    code: "https://github.com/jitendra174/SouthIndianRestaurant",
    demo: "https://nexus-project-2-restaurant-website.vercel.app/",
  },
  {
    type: "Full Stack",
    year: "2025",
    title: "Fitness Diary",
    desc: "Track workouts and monitor fitness progress. Intuitive interface for recording exercises. Visualize milestones and performance over time.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    code: "https://github.com/jitendra174/FitTrack",
    demo: "https://fit-track-kdit.vercel.app/",
  },
  {
    type: "Full Stack",
    year: "2025",
    title: "Mini Book Store",
    desc: "CRUD-based online bookstore for managing book records. Core functionalities include create, read, update, delete. Simple and responsive design.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    code: "https://github.com/jitendra174/Mini-Book-Store",
    demo: "https://book-store-demo.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-[#080808] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-green-400 via-teal-400 to-green-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={`${p.title}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 * i }}
              className="rounded-2xl overflow-hidden border border-gray-700 bg-[#2A2A2A] shadow-lg hover:shadow-[0_0_20px_2px_rgba(20,255,236,0.4)] transition"
            >
              <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4 flex justify-between items-center text-sm">
                <span className="px-3 py-1 rounded-full bg-black/30 font-semibold">
                  {p.type}
                </span>
                <span className="opacity-90">{p.year}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                <p className="text-gray-400 mt-3">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t, idx) => (
                    <span
                      key={`${p.title}-tech-${idx}`}
                      className="text-xs px-3 py-1 rounded-full bg-[#0D7377] text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-6 text-sm">
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#0D7377] hover:text-[#14FFEC] transition"
                  >
                    <FaGithub className="text-lg" />
                    Code
                  </a>
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[#0D7377] hover:text-[#14FFEC] transition"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      Demo
                    </a>
                  ) : (
                    <span className="text-gray-500">No Live Demo</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/jitendra174?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0D7377] hover:bg-[#14FFEC] transition font-semibold text-black"
          >
            <FaGithub className="text-xl" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
