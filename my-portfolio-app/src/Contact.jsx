import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "khanguhaursula@gmail.com",
    href: "mailto:khanguhaursula@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nakuru, KENYA",
  },
];

const socialLinks = [
  { icon: Github, name: "GitHub", href: "https://github.com/Ursullah" },
  { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/in/ursullah-khanguha" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 text-gray-800 overflow-hidden"
    >
      {/* Background animation (copied from Hero section) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Contact content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12 text-gray-600"
        >
          I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.
          Feel free to get in touch — I’d love to connect!
        </motion.p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl border border-white/40 transition"
            >
              <div className="flex items-center justify-center gap-3">
                <info.icon className="text-pink-500 w-6 h-6" />
                {info.href ? (
                  <a href={info.href} className="text-gray-700 hover:text-pink-600 font-medium">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition"
            >
              <social.icon size={20} />
              {social.name}
            </a>
          ))}
        </motion.div>

        <motion.a
          href="mailto:hello@sophiachen.dev"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-block mt-10 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
        >
          Send Me an Email
        </motion.a>
      </div>
    </section>
  );
}
