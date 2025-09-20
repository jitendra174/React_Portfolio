import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiTailwindcss,
  SiAxios,
  SiFramer,
  SiJsonwebtokens,
  SiVercel,
  SiRender,
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    items: [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Axios", icon: <SiAxios className="text-purple-400" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
    ],
  },
  {
    title: "Database",
    items: [{ name: "MongoDB", icon: <SiMongodb className="text-green-400" /> }],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "JWT", icon: <SiJsonwebtokens className="text-red-400" /> },
      { name: "Git/GitHub", icon: <FaGithub className="text-gray-200" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Render", icon: <SiRender className="text-purple-400" /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#040404] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center mb-16 text-white"
        >
          <span className="text-[#0D7377]">Skills</span>
        </motion.h2>
        <div className="space-y-14">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-semibold text-gray-300 mb-6">{cat.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {cat.items.map((s, i) => (
                  <motion.div
                    key={`${cat.title}-${s.name}-${i}`}
                    whileHover={{ scale: 1.07 }}
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#2A2A2A] shadow-md hover:shadow-[0_0_15px_2px_#14FFEC] transition"
                  >
                    <span className="text-4xl">{s.icon}</span>
                    <p className="text-sm font-medium">{s.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
