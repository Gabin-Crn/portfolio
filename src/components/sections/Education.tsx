"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";
import { education, experiences } from "@/data/education";

export default function Education() {
  return (
    <section id="parcours" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mon Parcours
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Formation académique et expériences professionnelles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Études</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  className="relative pl-8 before:absolute before:left-[7px] before:top-10 before:bottom-0 before:w-px before:bg-gray-200 last:before:hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-indigo-100 border-[3px] border-indigo-600" />
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-indigo-600 font-medium text-sm mb-2">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Expériences Professionnelles
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  className="relative pl-8 before:absolute before:left-[7px] before:top-10 before:bottom-0 before:w-px before:bg-gray-200 last:before:hidden"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-amber-100 border-[3px] border-amber-600" />
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">
                        {exp.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-amber-600 font-medium text-sm mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-1.5 mb-3">
                      {exp.description.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-gray-600 flex gap-2"
                        >
                          <span className="text-amber-400 mt-1.5 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
