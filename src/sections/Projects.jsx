import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ProjectImage from "../components/ProjectImage";
import AnimatedSection from "../components/AnimatedSection";
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenModal = (project, index) => {
    setSelectedProject(project);
    setSelectedIndex(index);
  };

  return (
    <AnimatedSection className="py-28 section-alt">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.8rem] font-bold text-white mb-16">
          {t("projects.heading")}
        </h2>

        <div className="space-y-28">
          {projects.map((project, i) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={project.title}
              className="group rounded-xl p-6 -mx-6 hover:bg-white/[0.015] transition-colors duration-500 cursor-pointer"
              onClick={() => handleOpenModal(project, i)}
            >
              <ProjectImage
                title={project.title}
                index={i}
                stack={project.stack}
              />

              <h3 className="text-[1.2rem] font-bold text-white mb-3 group-hover:text-accent/90 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-[0.95rem] text-[#777] leading-relaxed mb-5 max-w-[700px]">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.75rem] text-[#555] font-mono"
                  >
                    {tech}
                    {tech !== project.stack[project.stack.length - 1] && (
                      <span className="ml-2 text-[#333]">·</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-[0.85rem] text-[#888] group-hover:text-accent transition-colors duration-300 inline-flex items-center gap-2">
                {t("projects.viewDetails", "Ver detalhes")} <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject}
        index={selectedIndex}
      />
    </AnimatedSection>
  );
};

export default Projects;
