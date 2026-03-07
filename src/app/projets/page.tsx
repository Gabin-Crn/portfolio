"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Une sélection de projets personnels et professionnels qui reflètent
            mes compétences et ma passion pour le développement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/projets/${project.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h2>
                    <span className="text-xs text-gray-400 font-medium">
                      {new Date(project.date).toLocaleDateString("fr-FR", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <p className="text-gray-500 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-gray-50 text-gray-600 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <span className="flex items-center gap-1.5 text-sm text-gray-400">
                        <Github className="w-4 h-4" />
                        Code source
                      </span>
                    )}
                    {project.demo && (
                      <span className="flex items-center gap-1.5 text-sm text-gray-400">
                        <ExternalLink className="w-4 h-4" />
                        Démo live
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
