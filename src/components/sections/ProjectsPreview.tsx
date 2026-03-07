"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-end justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Projets récents
            </h2>
            <p className="text-gray-600 text-lg">
              Quelques-uns de mes projets favoris
            </p>
          </div>
          <Link
            href="/projets"
            className="hidden sm:flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            Tous les projets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/projets/${project.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-400 text-xs font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </span>
                    )}
                    {project.demo && (
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            Tous les projets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
