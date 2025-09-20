import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";
import profilePic from "../../assets/profile.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: "easeOut" },
  }),
};

function About() {
  return (
    <section id="about" className="relative bg-[#050404] text-white py-20">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        About <span className="text-[#0D7377]">Me</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col items-center md:items-start gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative p-4 rounded-3xl bg-[#1E1E1E] shadow-lg flex justify-center hover:scale-[1.02] transition-transform"
          >
            <img
              src={profilePic}
              alt="Jitendra profile"
              loading="lazy"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={2}
            viewport={{ once: true }}
            className="bg-[#1E1E1E] rounded-2xl p-6 text-center md:text-left max-w-md hover:scale-[1.02] transition-transform"
          >
            <h2 className="text-2xl font-bold mb-2">
              Hi, I’m <span className="text-[#0D7377]">Jitendra</span>
            </h2>
            <p className="text-[#A1A1A1]">
              Full Stack Developer with a strong foundation in software
              engineering. I enjoy building fast, modern, and user-focused web
              apps that solve real-world problems.
            </p>
          </motion.div>
        </div>

        <div className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-5 items-start bg-[#1E1E1E] p-5 rounded-xl hover:scale-[1.02] transition-transform"
          >
            <div className="text-3xl text-[#0D7377]">
              <FaGraduationCap aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Education</h3>
              <p className="text-[#A1A1A1]">
                B.Tech in Computer Science (AI/ML), Aditya College of
                Engineering & Technology. <br />
                <span className="text-[#0D7377]">CGPA: 7.0/10</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-5 items-start bg-[#1E1E1E] p-5 rounded-xl hover:scale-[1.02] transition-transform"
          >
            <div className="text-3xl text-[#0D7377]">
              <FaBriefcase aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Internship Experience</h3>
              <p className="text-[#A1A1A1]">
                Completed internships in <span className="text-[#0D7377]">MERN stack</span> at SmartBridge, Vault Of Codes,{" "}
                <span className="text-[#0D7377]">Sentiment Analysis</span> at APSSDC, and{" "}
                <span className="text-[#0D7377]">Full Stack Dev</span> at Digital Blinc.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-5 items-start bg-[#1E1E1E] p-5 rounded-xl hover:scale-[1.02] transition-transform"
          >
            <div className="text-3xl text-[#0D7377]">
              <FaCode aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Projects & Skills</h3>
              <p className="text-[#A1A1A1]">
                React, Node.js, Express, MongoDB, Tailwind, Framer Motion. Built Restaurant Web App, Fitness Diary, Mini Book Store, <span className="text-[#0D7377]">SB Food Service</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-20 bg-[#1E1E1E] rounded-2xl p-8 text-center shadow-lg hover:scale-[1.02] transition-transform"
      >
        <h3 className="text-2xl font-bold text-[#0D7377] mb-4">My Journey</h3>
        <p className="text-[#A1A1A1] leading-relaxed">
          My journey into web development started with a simple curiosity about
          how websites work. This quickly grew into a passion for{" "}
          <span className="text-[#0D7377]">full-stack development</span>, and
          I've since dived deep into building both the front-end and back-end.
          Through constant learning and projects, I've focused on creating{" "}
          <span className="text-[#0D7377]">high-performance</span>,
          user-friendly applications. I'm always looking for new challenges and
          ways to grow.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
