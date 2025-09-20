import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const links = [
  "Home", "About", "Skills", "Projects", "Experience", "Education", "Certificates", "Contact",
];

function Footer() {
  return (
    <footer className="bg-[#010101] text-[#A1A1A1]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h3 className="text-2xl font-extrabold text-white">Jitendra Chinta</h3>
          <p>Full-Stack Developer passionate about crafting smooth, reliable, and scalable web experiences.</p>
          <div className="flex gap-5 pt-4">
            <a href="https://github.com/jitendra174" target="_blank" rel="noreferrer" className="transition hover:text-[#14FFEC]">
              <FaGithub size={24} color="#777777" />
            </a>
            <a href="https://linkedin.com/in/jitendra-chinta-653172339" target="_blank" rel="noreferrer" className="transition hover:text-[#14FFEC]">
              <FaLinkedin size={24} color="#0A66C2" />
            </a>
            <a href="mailto:jitendrachinta@gmail.com" className="transition hover:text-[#14FFEC]">
              <SiGmail size={24} color="#D44638" />
            </a>
            <a href="https://x.com/s_tra_nge_r" target="_blank" rel="noreferrer" className="transition hover:text-[#14FFEC]">
              <FaTwitter size={24} color="#1DA1F2" />
            </a>
            <a href="https://www.instagram.com/mr.s_t_r_a_n_g_e_r_174/" target="_blank" rel="noreferrer" className="transition hover:text-[#14FFEC]">
              <FaInstagram size={24} color="#E1306C" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <h4 className="text-xl font-bold text-white">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            {links.map((t, idx) => (
              <li key={`footer-link-${idx}`}>
                <a href={`#${t.toLowerCase()}`} className="hover:text-[#14FFEC] transition">{t}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          <h4 className="text-xl font-bold text-white">Get In Touch</h4>
          <p>Gudivada, Andhra Pradesh, India</p>
          <p className="mt-1">jitendrachinta@gmail.com</p>
          <p className="mt-1">Available for opportunities</p>
        </motion.div>
      </div>

      <div className="text-center text-sm text-[#A1A1A1] py-5 border-t border-gray-800">
        © {new Date().getFullYear()} <span className="font-semibold text-[#0D7377]">Jitendra Chinta</span>. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
