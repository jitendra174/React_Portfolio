import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "certificates",
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 100;

      links.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - offset;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#212121] text-white shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wider relative cursor-pointer group">
          JITENDRA
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0D7377] transition-all group-hover:w-full" aria-hidden />
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((id) => (
            <li key={id}>
              <Link
                to={id}
                smooth
                duration={600}
                offset={-80}
                className={`cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#14FFEC] rounded ${
                  active === id ? "text-[#14FFEC] font-semibold" : "text-[#A1A1A1] hover:text-[#14FFEC]"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Jitendra_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#0D7377] hover:bg-[#14FFEC] text-black transition-colors focus:outline-none focus:ring-2 focus:ring-[#14FFEC]"
          >
            <FaDownload /> Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded text-2xl text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#14FFEC]"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 w-64 z-40 bg-[#212121] text-[#A1A1A1] shadow-lg"
            >
              <div className="flex flex-col items-center gap-6 py-10 font-medium">
                {links.map((id) => (
                  <Link
                    key={id}
                    to={id}
                    smooth
                    duration={600}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className={`cursor-pointer text-lg focus:outline-none ${
                      active === id ? "text-[#14FFEC] font-semibold" : "hover:text-[#14FFEC]"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Link>
                ))}

                <a
                  href="/Jitendra_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#0D7377] hover:bg-[#14FFEC] text-black transition-colors focus:outline-none focus:ring-2 focus:ring-[#14FFEC]"
                >
                  <FaDownload /> Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
