import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Technology in CSE (AI & ML)",
    school: "Aditya College of Engineering and Technology",
    location: "Surampalem, India",
    date: "Jun 2022 – Present (Ongoing)",
    gpa: "7.0 cgpa + Ongoing",
    bullets: [
      "Specialized in Artificial Intelligence and Machine Learning.",
      "Built 5+ major projects including a sentiment analysis model with 85% accuracy.",
      "Active participant in AI and Full-Stack hackathons and seminars.",
      "Strong foundation in Data Structures, DBMS, and Web Development.",
    ],
  },
  {
    degree: "Intermediate (MPC)",
    school: "APSWRS.jr College",
    location: "Machilipatnam, India",
    date: "2020 – 2022",
    gpa: "80.3%",
    bullets: [
      "Focused on Mathematics, Physics, Chemistry.",
      "Strengthened problem-solving and analytical skills through rigorous MPC curriculum.",
      "Graduated with strong fundamentals in logical reasoning.",
    ],
  },
  {
    degree: "SSC (10th)",
    school: "SPSMP High School",
    location: "Gudivada, India",
    date: "2020",
    gpa: "98.0%",
    bullets: [
      "Excelled in science and computer fundamentals.",
      "Participated in Games and science exhibitions.",
    ],
  },
];

function Education() {
  const { scrollYProgress } = useScroll();
  const xTransformLeft = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const xTransformRight = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <section id="education" className="bg-[#060606] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-green-500 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Academic milestones that shaped my foundation in Computer Science,
          Artificial Intelligence, and Full-Stack Development.
        </p>

        <div className="relative border-l-2 border-[#333333] ml-6">
          {education.map((e, i) => (
            <motion.div
              key={`${e.degree}-${i}`}
              style={{ x: i % 2 === 0 ? xTransformLeft : xTransformRight }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              className="mb-12 ml-6 relative"
            >
              <span className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-[#0D7377] text-white rounded-full shadow-lg">
                <FaGraduationCap aria-hidden="true" />
              </span>

              <div className="p-6 bg-[#2A2A2A] border border-gray-700 rounded-2xl shadow-lg hover:shadow-[0_0_20px_2px_rgba(16,185,129,0.4)] transition">
                <div className="flex justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{e.degree}</h3>
                    <p className="text-[#A1A1A1]">{e.school}</p>
                  </div>
                  <div className="flex items-center gap-4 text-[#A1A1A1] text-xs">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt aria-hidden="true" /> {e.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt aria-hidden="true" /> {e.location}
                    </div>
                  </div>
                </div>

                {e.gpa && (
                  <p className="text-sm text-[#A1A1A1] mt-2">
                    <span className="font-medium text-white">GPA:</span> {e.gpa}
                  </p>
                )}

                <ul className="list-disc list-inside mt-3 text-[#A1A1A1] space-y-1">
                  {e.bullets.map((b, idx) => (
                    <li key={`${e.degree}-bullet-${idx}`}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
