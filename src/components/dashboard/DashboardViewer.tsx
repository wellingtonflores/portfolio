"use client";

import { Project } from "@/types/project";
import Image from "next/image";
import { useState } from "react";

interface DashboardViewerProps {
  project: Project;
}

export default function DashboardViewer({ project }: DashboardViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopySql = () => {
    if (project.sqlQuery) {
      navigator.clipboard.writeText(project.sqlQuery);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-8">
      {/* Power BI Dashboard Preview */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Relatório Power BI
          </h2>
        </div>
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-graphite-950">
          <Image
            src="/powerbiphoto.png"
            alt={`Dashboard Power BI — ${project.title}`}
            width={1280}
            height={720}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Metrics Row */}
      {project.metrics && project.metrics.length > 0 && (
        <div>
          <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider text-graphite-300">
            Principais Métricas do Projeto
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-xl border border-white/5 bg-graphite-900/20 flex flex-col justify-between"
              >
                <span className="text-xs text-graphite-400 font-medium mb-1">
                  {metric.label}
                </span>
                <span className="text-2xl font-extrabold text-gradient-cyan mb-2">
                  {metric.value}
                </span>
                {metric.description && (
                  <span className="text-[10px] text-graphite-500 leading-normal">
                    {metric.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Insights Row */}
      {project.insights && project.insights.length > 0 && (
        <div>
          <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider text-graphite-300">
            Insights Estratégicos Extraídos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.insights.map((insight, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-xl border border-white/5 bg-graphite-900/30 flex flex-col"
              >
                <h4 className="text-sm font-semibold text-cyan-neon mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon" />
                  {insight.title}
                </h4>
                <p className="text-graphite-300 text-xs leading-relaxed">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SQL Query Section */}
      {project.sqlQuery && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider text-graphite-300 flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Consulta SQL Analítica
            </h3>
            <button
              onClick={handleCopySql}
              className="text-xs text-graphite-400 hover:text-cyan-neon transition-colors duration-200 flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded border border-white/5 cursor-pointer active:scale-95"
            >
              {copied ? (
                <>
                  <svg className="w-3.5 h-3.5 text-emerald-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copiado!
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copiar Código
                </>
              )}
            </button>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-graphite-950/80 p-5 font-mono text-xs text-graphite-300 shadow-inner">
            <div className="absolute top-0 right-0 left-0 h-8 bg-graphite-900/60 border-b border-white/5 flex items-center px-4 justify-between">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <span className="text-[10px] text-graphite-500 uppercase tracking-widest">
                sql
              </span>
            </div>
            <pre className="overflow-x-auto mt-6 pt-2 leading-relaxed custom-scrollbar max-h-96">
              <code>{project.sqlQuery}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
