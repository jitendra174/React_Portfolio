import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const experiences = [
  {
    role: "Full Stack Development Intern (MERN)",
    company: "SmartInternz (SmartBridge)",
    companyLink: "https://smartinternz.com",
    location: "Remote",
    date: "May 2025 – Jul 2025",
    bullets: [
      "Completed a 2-month internship focused on Full Stack Development (MERN).",
      "Built scalable applications integrating frontend (React) and backend (Node.js/Express).",
      "Collaborated with peers on real-world web projects guided by industry mentors.",
    ],
    tags: ["MERN", "React", "Node.js", "Express", "MongoDB"],
  },
  {
    role: "AI/ML Intern",
    company: "APSSDC (IBM SkillsBuild)",
    companyLink: "https://apssdc.in",
    location: "Remote",
    date: "May 2024 – Jun 2024",
    bullets: [
      "Completed a 6-week internship in Artificial Intelligence & Machine Learning.",
      "Gained hands-on experience in supervised/unsupervised ML models and IBM SkillsBuild platform.",
      "Worked on practical AI/ML applications enhancing problem-solving skills.",
    ],
    tags: ["AI", "Machine Learning", "IBM SkillsBuild"],
  },
  {
    role: "Full Stack Development Intern",
    company: "Digital Blinc Technologies",
    companyLink: "https://digitalblinc.in/",
    location: "Remote",
    date: "May 2023 – Jun 2023",
    bullets: [
      "Built responsive components and pages with React & Tailwind.",
      "Integrated REST APIs and improved page performance.",
      "Collaborated with team on UI/UX refinements.",
    ],
    tags: ["React", "Tailwind", "REST API"],
  },
];

function Experience() {
  const { scrollYProgress } = useScroll();
  const xTransformLeft = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const xTransformRight = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <section id="experience" className="bg-[#070707] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Experience & Internships
        </motion.h2>

        <div className="relative md:border-l md:border-[#333333] md:ml-6">
          {experiences.map((e, i) => (
            <motion.div
              key={`${e.company}-${e.role}-${i}`}
              style={{ x: i % 2 === 0 ? xTransformLeft : xTransformRight }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="mb-12 md:ml-6 relative"
            >
              <span className="hidden md:flex absolute -left-[38px] items-center justify-center w-10 h-10 bg-[#0D7377] text-white rounded-full ring-4 ring-[#212121] shadow-lg">
                <FaBriefcase aria-hidden="true" />
              </span>

              <div className="p-6 bg-[#2A2A2A] rounded-2xl shadow-lg transition hover:shadow-[0_0_20px_rgba(20,255,236,0.15)]">
                <div className="flex justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{e.role}</h3>
                    <a
                      href={e.companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0D7377] hover:text-[#14FFEC] text-sm flex items-center gap-1"
                    >
                      <FaBuilding className="text-[#0D7377]" /> {e.company}
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-[#A1A1A1] text-xs">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-[#0D7377]" /> {e.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[#0D7377]" /> {e.location}
                    </div>
                  </div>
                </div>

                <ul className="list-disc list-inside mt-3 text-[#A1A1A1] space-y-1">
                  {e.bullets.map((b, idx) => (
                    <li key={`${e.company}-bullet-${idx}`}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t, idx) => (
                    <span
                      key={`${e.company}-tag-${idx}`}
                      className="text-xs px-3 py-1 rounded-full bg-[#212121] border border-[#333333] text-[#A1A1A1] hover:border-[#0D7377] transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
