import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-panel-interactive flex flex-col h-full rounded-2xl overflow-hidden p-6 border border-white/5 bg-graphite-900/40 relative group">
      {/* Decorative Cyan Neon Top Border line on group hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex-1 flex flex-col">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="tech-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-pulse" />
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-neon transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-graphite-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Highlights/Key Metrics (Preview of 2 metrics) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-lg bg-white/2">
            {project.metrics.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[10px] text-graphite-500 uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="text-base font-extrabold text-white text-gradient-cyan">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies list */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-graphite-300 px-2 py-0.5 rounded bg-graphite-800/60 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono text-graphite-500 self-center pl-1">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-graphite-500">
          {project.featured ? "★ Projeto Destaque" : "Projeto Adicional"}
        </span>
        <Link
          href={`/projetos/${project.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-neon group-hover:text-white transition-colors duration-300"
        >
          Visualizar Painel
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
