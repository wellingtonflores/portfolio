import Link from "next/link";
import ProjectCard from "@/components/dashboard/ProjectCard";
import { PROJECTS } from "@/config/projects";

export default function Home() {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => p.id !== featuredProject.id);

  return (
    <div className="space-y-24 pb-20" id="home">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-12">
        {/* Floating gradient glow behind Hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-neon/10 rounded-full blur-[100px] pointer-events-none animate-cyber-pulse" />
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center justify-center">
            <span className="tech-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-pulse-glow" />
              Análise de Dados & BI
            </span>
          </div>

          <h1 className="font-premium-display text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white">
            Wellington <span className="text-gradient-cyan">Flores</span>
          </h1>

          <p className="text-xl sm:text-2xl font-light text-graphite-300 max-w-2xl mx-auto leading-relaxed">
            Estruturando e tratando dados com programação para gerar inteligência estratégica de negócios.
          </p>

          <p className="text-sm sm:text-base text-graphite-400 max-w-xl mx-auto leading-relaxed">
            Focado em construir automações ETL rápidas com Python, modelar bancos de dados com SQL e desenhar painéis executivos no Power BI.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="#projetos" className="btn-cyber">
              Ver Projetos
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#sobre"
              className="px-6 py-2.5 rounded-lg text-sm font-semibold border border-white/10 hover:border-cyan-neon hover:bg-white/3 text-graphite-200 hover:text-white transition-all duration-300"
            >
              Sobre Mim
            </a>
          </div>
        </div>
      </section>

      {/* 2. SKILLS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="habilidades">
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-neon">Stack Profissional</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Habilidades & Tecnologias</h2>
          <div className="h-[2px] w-20 bg-cyan-neon mt-4 mx-auto md:mx-0" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Card 1: Python */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-graphite-900/30 flex flex-col justify-between hover:border-cyan-neon/30 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V5h-6a1.5 1.5 0 00-1.5 1.5v3h1.5V8A1.5 1.5 0 0113.5 6.5h6A1.5 1.5 0 0021 5V2.25a2.25 2.25 0 00-2.25-2.25H15c-.25 0-.47.06-.69.18zm-4.5 23.64l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V19h6a1.5 1.5 0 001.5-1.5v-3h-1.5v1.5A1.5 1.5 0 0110.5 17.5h-6A1.5 1.5 0 003 19v2.75A2.25 2.25 0 005.25 24H9c.25 0 .47-.06.69-.18zM7.5 15a1.5 1.5 0 00-1.5 1.5v1.5c0 .83.67 1.5 1.5 1.5H9v-1.5H7.5V16.5H9V15H7.5zm9-6A1.5 1.5 0 0018 7.5V6c0-.83-.67-1.5-1.5-1.5H15v1.5h1.5v1.5H15V9h1.5z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2">Python</h3>
              <p className="text-graphite-400 text-xs leading-relaxed">
                Desenvolvimento de scripts de automação, conectores de APIs e rotinas ETL para tratamento de dados.
              </p>
            </div>
            <span className="text-[10px] font-mono text-cyan-neon/60 mt-4 block">Automação & ETL</span>
          </div>

          {/* Card 2: Pandas */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-graphite-900/30 flex flex-col justify-between hover:border-cyan-neon/30 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2">Pandas</h3>
              <p className="text-graphite-400 text-xs leading-relaxed">
                Manipulação estruturada, limpeza de nulos, transformação e engenharia de atributos complexos.
              </p>
            </div>
            <span className="text-[10px] font-mono text-cyan-neon/60 mt-4 block">Tratamento em memória</span>
          </div>

          {/* Card 3: SQL */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-graphite-900/30 flex flex-col justify-between hover:border-cyan-neon/30 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2">SQL</h3>
              <p className="text-graphite-400 text-xs leading-relaxed">
                Consultas analíticas complexas, subqueries com CTEs (WITH), joins e agregadores em bancos relacionais.
              </p>
            </div>
            <span className="text-[10px] font-mono text-cyan-neon/60 mt-4 block">Banco de Dados</span>
          </div>

          {/* Card 4: Power BI */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-graphite-900/30 flex flex-col justify-between hover:border-cyan-neon/30 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-4 text-yellow-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2">Power BI</h3>
              <p className="text-graphite-400 text-xs leading-relaxed">
                Design de dashboards responsivos, modelagem dimensional em estrela e fórmulas DAX de inteligência temporal.
              </p>
            </div>
            <span className="text-[10px] font-mono text-cyan-neon/60 mt-4 block">Visualização & BI</span>
          </div>
        </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="projetos">
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-neon">Portfólio Analítico</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Projetos em Destaque</h2>
          <div className="h-[2px] w-20 bg-cyan-neon mt-4 mx-auto md:mx-0" />
        </div>

        {/* Featured Project Showcase (Steam Games) */}
        <div className="mb-12">
          <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 bg-graphite-900/35 p-6 sm:p-8 lg:p-10 relative group">
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-neon to-transparent opacity-50" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 space-y-6">
                <span className="tech-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-pulse" />
                  {featuredProject.category}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-neon transition-colors duration-300">
                  {featuredProject.title}
                </h3>
                
                <p className="text-graphite-300 text-sm sm:text-base leading-relaxed">
                  {featuredProject.longDescription}
                </p>

                {/* Metrics Row inside Featured card */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white/2 border border-white/5">
                  {featuredProject.metrics.slice(0, 4).map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] text-graphite-400 uppercase tracking-wider font-semibold">
                        {metric.label}
                      </span>
                      <span className="text-lg font-black text-white text-gradient-cyan mt-1">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-cyan-neon/90 px-3 py-1 rounded-full bg-cyan-neon/5 border border-cyan-neon/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={`/projetos/${featuredProject.id}`}
                    className="btn-cyber inline-flex"
                  >
                    Abrir Painel Power BI & SQL
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Side visual representation for Featured Project */}
              <div className="lg:col-span-2 relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 bg-graphite-950 flex flex-col justify-center p-6 space-y-4">
                <div className="absolute inset-0 bg-dots-tech bg-radial-fade opacity-30" />
                <div className="relative z-10 text-center space-y-3">
                  <div className="mx-auto w-16 h-16 rounded-full bg-cyan-neon/10 border border-cyan-neon/30 flex items-center justify-center text-cyan-neon animate-float">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold text-sm">Dashboard Steam Games</h4>
                  <p className="text-graphite-400 text-xs max-w-xs mx-auto">
                    Medições de cruzamento de tiers de preço, discount_count e volume de vendas no Power BI
                  </p>
                </div>
                <div className="relative z-10 p-3 rounded-lg bg-graphite-900 border border-white/5 font-mono text-[10px] text-graphite-400 overflow-hidden select-none">
                  <span className="text-purple-neon">WITH</span> tb_media_descontos <span className="text-purple-neon">AS</span> (...
                  <br />
                  <span className="text-purple-neon">SELECT</span> tier, faturamento_total_estimado...
                  <br />
                  <span className="text-purple-neon">ORDER BY</span> faturamento_medio DESC;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-graphite-400">
              Outros Painéis & Automações
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="h-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. ABOUT SECTION */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-20" id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-neon">Sobre Wellington Flores</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Análise de dados guiada por código e rigor técnico</h2>
          <div className="h-[2px] w-20 bg-cyan-neon mt-4" />
          
          <p className="text-graphite-300 text-sm sm:text-base leading-relaxed">
            Olá! Sou desenvolvedor de software em transição para a área de Dados, focado em estruturar pipelines de ETL, realizar modelagens analíticas e desenhar relatórios interativos. Minha bagagem sólida com lógica de programação e escrita de código em Python facilita a criação de rotinas de higienização eficientes no Pandas e a manipulação ágil de consultas em bancos de dados relacionais via SQL.
          </p>
          <p className="text-graphite-300 text-sm sm:text-base leading-relaxed">
            Acredito que o desenvolvimento de software e a análise de dados se complementam. Construir códigos limpos para a preparação das tabelas garante que as métricas comerciais exibidas em relatórios no Power BI sejam totalmente seguras e tragam insights comerciais confiáveis para a tomada de decisões.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/wellingtonflores"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-graphite-300 hover:text-cyan-neon transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </a>
            <span className="text-graphite-600">|</span>
            <a
              href="https://linkedin.com/in/wellington-flores"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-graphite-300 hover:text-cyan-neon transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-graphite-900/20 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-neon/5 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-white font-bold text-lg">Informações Rápidas</h3>
          
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-graphite-400">Localização</span>
              <span className="text-white font-medium">Brasil</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-graphite-400">Atuação</span>
              <span className="text-white font-medium">Analista de Dados & BI</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-graphite-400">Especialidade</span>
              <span className="text-white font-medium">ETL, SQL, Power BI</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-graphite-400">Status</span>
              <span className="text-cyan-neon font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-neon animate-pulse" />
                Disponível para trabalho / estágio
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
