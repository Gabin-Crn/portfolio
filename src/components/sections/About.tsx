"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, Network, Lock } from "lucide-react";

const skills = [
  {
    icon: Shield,
    title: "Sécurité",
    description: "Cryptographie, PKI, TLS/SSL, HSM, hardening Linux",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: Terminal,
    title: "Langages",
    description: "Python, Bash",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Network,
    title: "Réseau",
    description: "TCP/IP, DNS, HTTP(S), VLANs, SSH, firewalls",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Lock,
    title: "Tooling",
    description: "OpenSSL, ELK, Git, Wireshark, Nmap",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            À propos de moi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ingénieur cybersécurité avec 3 ans d'expérience en systèmes embarqués.
            Hardening Linux, conception/intégration de SIEM, mise en place de contrôles
            de sécurité (authentification, chiffrement, gestion des secrets) et développement
            de scripts Bash/Python.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${skill.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <skill.icon className={`w-6 h-6 ${skill.color}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-500">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
