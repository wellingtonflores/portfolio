import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite-950 border-t border-white/5 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Col 1: About */}
          <div>
            <span className="flex items-center gap-2 font-premium-display text-base tracking-wider mb-4">
              <svg
                className="w-5 h-5 text-cyan-neon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"
                />
              </svg>
              <span className="text-white">
                WELLINGTON<span className="text-cyan-neon font-light">.FLORES</span>
              </span>
            </span>
            <p className="text-graphite-400 text-sm leading-relaxed max-w-sm">
              Analista de Dados & BI. Desenvolvendo pipelines de dados robustos e transformando volumes brutos em decisões inteligentes.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-graphite-400">
              <li>
                <Link href="/" className="hover:text-cyan-neon transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#projetos" className="hover:text-cyan-neon transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/#habilidades" className="hover:text-cyan-neon transition-colors">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-cyan-neon transition-colors">
                  Sobre Mim
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contato & Redes</h3>
            <ul className="space-y-2 text-sm text-graphite-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:wellingtonluiscardoso@hotmail.com" className="hover:text-cyan-neon transition-colors">
                  wellingtonluiscardoso@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-neon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <a href="https://linkedin.com/in/wellington-flores" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-neon transition-colors">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-neon" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <a href="https://github.com/wellingtonflores" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-neon transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-graphite-500">
          <p>&copy; {currentYear} Wellington Flores. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
