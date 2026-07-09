import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

const ProjectCard = ({ project, index, t }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group rounded-xl border border-slate-800 overflow-hidden bg-slate-900/60 hover:border-sky-400/30 transition-colors"
  >
    {project.image && (
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
        />
      </div>
    )}

    <div className="p-6 md:p-8">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl md:text-2xl font-bold text-slate-100">
          {project.title}
        </h3>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span
            className={`px-2 py-0.5 text-xs rounded-full border ${project.statusColor}`}
          >
            {project.status}
          </span>
          {project.access && (
            <span className="px-2 py-0.5 text-[10px] rounded-full border border-slate-700 text-slate-400">
              {project.access}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-3 mb-5">
        <p className="text-sm text-slate-400 leading-relaxed">
          <span className="text-slate-200 font-medium">{t("projects.problem")}: </span>
          {project.problem}
        </p>
        <p className="text-sm text-slate-400 leading-relaxed">
          <span className="text-slate-200 font-medium">{t("projects.solution")}: </span>
          {project.solution}
        </p>
        <p className="text-sm text-slate-400 leading-relaxed">
          <span className="text-slate-200 font-medium">{t("projects.challenge")}: </span>
          {project.challenge}
        </p>
        <p className="text-sm text-slate-400 leading-relaxed">
          <span className="text-slate-200 font-medium">{t("projects.result")}: </span>
          {project.result}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-md bg-slate-800/80 text-slate-300 border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link !== "#" && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-100 hover:text-sky-300 transition-colors"
        >
          {t("projects.launchApp")}
          <FiExternalLink size={14} />
        </a>
      )}
    </div>
  </motion.article>
);

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("filter") || "Todos";

  const setFilter = (tech) => {
    if (tech === "Todos") searchParams.delete("filter");
    else searchParams.set("filter", tech);
    setSearchParams(searchParams, { replace: true });
  };

  const allTechs = ["Todos", ...new Set(projects.flatMap((p) => p.stack))];
  const filtered =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.stack.includes(activeFilter));

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 border-t border-slate-800/80"
      aria-labelledby="projects-heading"
    >
      <div className="premium-container">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-slate-400 mb-3 block"
        >
          {t("projects.label")}
        </motion.span>
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-100 mb-8"
        >
          {t("projects.heading")}
        </motion.h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                activeFilter === tech
                  ? "bg-sky-400 text-slate-950 border-sky-400"
                  : "text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-200"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
