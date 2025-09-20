import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const certs = [
  { id: 1, name: "HTML5 - The Language", org: "Onwingspan(Infosys)", year: "2023" },
  { id: 2, name: "Node.js", org: "Onwingspan(Infosys)", year: "2024" },
  { id: 3, name: "Full Stack Development Internship", org: "Digital Blinc", year: "2025" },
  { id: 4, name: "AI & ML Internship (IBM SkillsBuild)", org: "APSSDC & Edunet Foundation", year: "2024" },
  { id: 5, name: "Full Stack Development (MERN)", org: "SmartInternz (APSCHE)", year: "2025" },
];

function Certificates() {
  return (
    <section id="certificates" className="bg-[#040404] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
        >
          Certifications & Achievements
        </motion.h2>
        <p className="text-center text-[#A1A1A1] max-w-2xl mx-auto mb-16">
          Key certifications and achievements demonstrating skills and expertise in web development, AI, and Full Stack technologies.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="relative rounded-2xl bg-[#2A2A2A] border border-gray-700 shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-lg group"
            >
              <div className="absolute inset-0 bg-[#0D7377]/20 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center p-6 text-white text-center z-10">
                <h4 className="font-semibold text-lg">{c.name}</h4>
                <p className="text-sm mt-1">{c.org}</p>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <Calendar className="w-4 h-4" aria-hidden="true" /> {c.year}
                </div>
              </div>

              <div className="p-6 flex flex-col items-start gap-3 z-0 relative group-hover:opacity-0 transition-opacity">
                <Award className="w-8 h-8 text-[#0D7377]" aria-hidden="true" />
                <h4 className="font-semibold text-lg text-white">{c.name}</h4>
                <p className="text-sm text-[#A1A1A1]">{c.org}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-[#A1A1A1]">
                  <Calendar className="w-4 h-4" aria-hidden="true" /> {c.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
