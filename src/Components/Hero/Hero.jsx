import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import profilePic from "../../assets/myimage.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#050505] text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-12 w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="text-center md:text-left">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1} className="text-lg sm:text-xl md:text-2xl font-medium text-[#A1A1A1] mb-4">
            <ReactTyped
              strings={["Hi, I’m Jitendra Chinta", "I’m a Full-Stack Developer"]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={2} className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Building <span className="text-[#0D7377]">modern</span> &<span className="text-[#0D7377]"> scalable</span> web solutions
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-4 text-base sm:text-lg md:text-xl font-medium text-[#A1A1A1] tracking-wide">
            Passionate about crafting user-friendly, efficient, and high-performance applications.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-[#0D7377] text-white font-semibold hover:bg-[#14FFEC] hover:text-black transition-colors shadow-md">
              Get in Touch
            </a>
            <a href="#projects" className="px-6 py-3 rounded-xl border border-[#0D7377] text-[#0D7377] hover:bg-[#0D7377] hover:text-white transition-colors">
              View My Work
            </a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="mt-6 flex gap-6 justify-center md:justify-start text-2xl">
            {[
              { icon: <FaGithub />, link: "https://github.com/jitendra174" },
              { icon: <FaLinkedin />, link: "https://linkedin.com/in/jitendra-chinta-653172339" },
              { icon: <FaEnvelope />, link: "mailto:jitendrachinta@gmail.com" },
            ].map((item, idx) => (
              <a key={idx} href={item.link} target="_blank" rel="noreferrer" className="hover:text-[#0D7377] transition-transform hover:scale-110">
                {item.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-72 h-72 md:w-[24rem] md:h-[24rem] bg-[#0D7377]/10 blur-3xl rounded-full -z-10"></div>

          <motion.div animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -left-12 top-1/2 -translate-y-1/2 w-72 h-72 md:w-[24rem] md:h-[24rem] bg-[#0D7377]/20 blur-3xl rounded-full -z-10" />

          <motion.img
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={6}
            src={profilePic}
            loading="lazy"
            alt="Jitendra"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </div>
      </div>
    </section>
  );
}
