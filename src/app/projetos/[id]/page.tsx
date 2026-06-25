import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/config/projects";
import DashboardViewer from "@/components/dashboard/DashboardViewer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Filter other projects for quick toggle navigation
  const otherProjects = PROJECTS.filter((p) => p.id !== id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* 1. Header Navigation & Title */}
      <div className="space-y-4">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-graphite-400 hover:text-cyan-neon transition-colors duration-200 group"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para o início
        </Link>

        {/* Project Header Info */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-white/5 pb-8">
          <div className="space-y-3">
            <span className="tech-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-pulse" />
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-graphite-300 text-sm sm:text-base max-w-4xl leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Action links: GitHub/Source code */}
          {project.githubUrl && (
            <div className="flex-shrink-0 self-start lg:self-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Código no GitHub
              </a>
            </div>
          )}
        </div>
      </div>

      {/* 2. Interactive Power BI Dashboard, Metrics & Insights Viewer */}
      <DashboardViewer project={project} />

      {/* 3. Toggle to other dashboards/projects */}
      {otherProjects.length > 0 && (
        <div className="border-t border-white/5 pt-12 space-y-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider text-graphite-400">
            Navegar para outros painéis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((op) => (
              <Link
                key={op.id}
                href={`/projetos/${op.id}`}
                className="glass-panel p-5 rounded-2xl border border-white/5 bg-graphite-900/30 hover:border-cyan-neon/30 hover:bg-graphite-900/50 transition-all duration-300 flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-cyan-neon uppercase tracking-wider block mb-1">
                    {op.category}
                  </span>
                  <h4 className="text-white font-bold group-hover:text-cyan-neon transition-colors duration-200">
                    {op.title}
                  </h4>
                </div>
                <svg
                  className="w-5 h-5 text-graphite-500 group-hover:text-cyan-neon group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
