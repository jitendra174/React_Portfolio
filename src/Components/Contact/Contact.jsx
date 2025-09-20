import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    emailjs
      .sendForm(
        "service_n5eg9m2",
        "template_crdiuqc",
        formRef.current,
        "Z4tDcjir4ocGX5ywa"
      )
      .then(
        () => {
          setStatus({ loading: false, ok: true, msg: "Message sent successfully!" });
          formRef.current.reset();
        },
        () => {
          setStatus({ loading: false, ok: false, msg: "Failed to send. Try later." });
        }
      );
  };

  return (
    <section id="contact" className="bg-[#040404] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { icon: <SiGmail aria-hidden="true" />, label: "Email", value: "jitendrachinta@gmail.com", color: "#D44638" },
              { icon: <FaPhoneAlt aria-hidden="true" />, label: "Phone", value: "+91 8885152919", color: "#0D7377" },
              { icon: <FaMapMarkerAlt aria-hidden="true" />, label: "Location", value: "Gudivada, Andhra Pradesh, India", color: "#0D7377" },
            ].map((c, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#333333] border border-gray-700 hover:shadow-[0_0_20px_2px_rgba(13,115,119,0.4)] transition"
              >
                <div style={{ color: c.color }} className="text-xl">{c.icon}</div>
                <div>
                  <p className="text-[#A1A1A1] text-sm">{c.label}</p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-6 p-4 rounded-xl bg-[#333333] border border-gray-700 hover:shadow-[0_0_20px_2px_rgba(13,115,119,0.4)] transition">
              {[
                { icon: FaLinkedin, url: "https://linkedin.com/in/jitendra-chinta-653172339", color: "#0A66C2" },
                { icon: SiGmail, url: "mailto:jitendrachinta@gmail.com", color: "#D44638" },
                { icon: FaTwitter, url: "https://x.com/s_tra_nge_r", color: "#1DA1F2" },
                { icon: FaInstagram, url: "https://www.instagram.com/mr.s_t_r_a_n_g_e_r_174/", color: "#E1306C" },
              ].map((s, i) => {
                const IconComp = s.icon;
                return (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-transform transform hover:scale-110"
                  >
                    <IconComp size={24} color={s.color} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-[#333333] border border-gray-700 space-y-4 shadow hover:shadow-[0_0_20px_2px_rgba(13,115,119,0.4)] transition"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="user_name"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg bg-[#333333] border border-gray-700 focus:border-[#0D7377] outline-none text-white"
                required
              />
              <input
                name="user_email"
                type="email"
                placeholder="you@example.com"
                className="px-4 py-3 rounded-lg bg-[#333333] border border-gray-700 focus:border-[#0D7377] outline-none text-white"
                required
              />
            </div>
            <input
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-[#333333] border border-gray-700 focus:border-[#0D7377] outline-none text-white"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here…"
              className="w-full px-4 py-3 rounded-lg bg-[#333333] border border-gray-700 focus:border-[#0D7377] outline-none text-white"
              required
            />
            <button
              disabled={status.loading}
              className="w-full py-3 rounded-lg bg-[#0D7377] hover:bg-[#14FFEC] transition font-semibold text-white"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>
            {status.msg && (
              <p className={`text-sm ${status.ok ? "text-green-400" : "text-red-400"}`}>
                {status.msg}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
