import React, { useState } from "react";
import { motion, useSpring } from "framer-motion";
import {
  FiLayers,
  FiTarget,
  FiBox,
  FiArrowRight,
  FiCode,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";

const ProjectCard = ({ project, index, t, onOpenDetails }) => {
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    rotateX.set(y);
    rotateY.set(x);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col gap-8 py-20 px-8 md:px-12 glass-panel hover:bg-white/[0.04] hover:border-white/25 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-700 mb-12 rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => onOpenDetails(project)}
    >
      {/* Hover badge */}
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="px-6 py-3 bg-white text-black font-bold uppercase text-[11px] tracking-widest rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
          Explorar →
        </div>
      </div>

      {/* Project Thumbnail */}
      {project.image && (
        <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-100 scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        </div>
      )}

      {/* Visual Number Indicator */}
      <div className="absolute top-8 right-8 font-mono text-4xl text-white/[0.03] font-bold group-hover:text-white/[0.05] transition-colors">
        0{index + 1}
      </div>

      <div className="flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full border ${project.statusColor} bg-white/[0.02]`}
            >
              {project.status}
            </div>
          </div>
          <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-white/50 text-lg md:text-xl font-light max-w-3xl leading-relaxed">
          {project.longDesc}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Stack */}
          <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl group/info hover:border-white/10 transition-colors md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white/40">
              <FiLayers size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Stack
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-md bg-white/[0.03] text-[9px] font-mono text-white/60 border border-white/[0.05]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Challenge */}
          <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl group/info hover:border-white/10 transition-colors md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white/40">
              <FiTarget size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Core Challenge
              </span>
            </div>
            <p className="text-[11px] text-white/60 leading-relaxed font-medium italic">
              {project.challenge}
            </p>
          </div>

          {/* Technical View Button */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(project);
            }}
            className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl flex flex-col justify-center items-center text-center group/tech cursor-pointer hover:border-white/20 transition-all md:col-span-1"
          >
            <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover/tech:bg-white group-hover/tech:text-black transition-all duration-500">
              <FiCode size={20} />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover/tech:text-white transition-colors mt-3">
              Case Study
            </span>
          </div>

          {/* Action */}
          <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl flex flex-col justify-center items-center text-center group/action cursor-pointer hover:border-white/20 transition-all md:col-span-1">
            {project.link !== "#" ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3"
                aria-label={`Launch ${project.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover/action:bg-white group-hover/action:text-black transition-all duration-500">
                  <FiBox size={20} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover/action:text-white transition-colors">
                  {t("projects.launchApp")}
                </span>
              </a>
            ) : (
              <div className="flex flex-col items-center gap-3 opacity-20">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <FiBox size={20} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
                  {t("projects.privateAccess")}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-8 pt-6 border-t border-white/[0.05]">
            {project.metrics.map((m, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-2xl font-extrabold text-white">{m.value}</span>
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">{m.label}</span>
              </div>
            ))}
          </div>
        )}

      {/* Bottom accent glow */}
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/[0.02] blur-[80px] rounded-full group-hover:bg-white/[0.05] transition-all duration-1000" />
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });
  const [selectedProject, setSelectedProject] = useState(null);
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
    <section id="projects" className="py-40 bg-black relative">
      <div className="premium-container relative z-10">
        <div className="mb-24">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-6 block"
          >
            {t("projects.label")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-extrabold text-white tracking-tight uppercase leading-[0.9]"
          >
            Architecting
            <br />
            Experience.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-16"
          >
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                  activeFilter === tech
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white/60"
                }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              t={t}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      <ProjectDetails
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
