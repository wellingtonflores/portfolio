# Portfólio de Análise de Dados & Business Intelligence - Wellington Flores

Este é o repositório do meu portfólio profissional de dados, projetado para expor de forma interativa e dinâmica meus dashboards de Business Intelligence e análises de dados. 

O site foi construído com tecnologias modernas de frontend para fornecer uma experiência de navegação rápida, fluida e totalmente responsiva para recrutadores e parceiros profissionais.

---

## Tecnologias Utilizadas

* **Next.js 15 (React Framework):** Utilização do App Router e SSG (Static Site Generation) para carregamento instantâneo.
* **Tailwind CSS v4:** Estilização baseada em tokens utilitários nativos em CSS, com suporte a efeitos avançados de glassmorphism (painéis translúcidos), gradientes e transições animadas.
* **TypeScript:** Garantia de segurança de tipos em todos os componentes e dados da aplicação.
* **Power BI Embedded:** Integração via Iframe de relatórios públicos de forma responsiva (16:9) e interativa.

---

## Como Rodar o Projeto Localmente

Siga as etapas abaixo para executar o site na sua máquina de desenvolvimento:

1. **Instale as dependências:**
   No diretório raiz do projeto, execute:
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse no Navegador:**
   Abra o endereço abaixo para visualizar o site:
   👉 [http://localhost:3000](http://localhost:3000)

---

## Como Adicionar Novos Dashboards Dinamicamente

O portfólio foi desenhado com arquitetura escalável. Se você desenvolver um novo painel no Power BI e quiser adicioná-lo ao portfólio, **não precisa mexer no código das páginas**. Basta seguir estes passos:

1. Obtenha o link de compartilhamento público do seu relatório no Power BI Service (*Publicar na Web*).
2. Abra o arquivo de configuração [`src/config/projects.ts`](file:///C:/Users/wellington-flores/Desktop/portfolio/src/config/projects.ts).
3. Adicione um novo objeto na lista `PROJECTS` seguindo o formato:
   ```typescript
   {
     id: "id-do-projeto",
     title: "Título do Dashboard",
     description: "Breve descrição sobre o objetivo do painel...",
     longDescription: "Explicação técnica detalhada da modelagem...",
     category: "Análise de Dados & BI",
     technologies: ["Power BI", "SQL", "DAX"],
     featured: false, // Defina como true se quiser substituir o projeto principal da Home
     metrics: [
       { label: "Métrica 1", value: "R$ 10M", description: "Descrição opcional" }
     ],
     insights: [
       { title: "Insight extraído", description: "O que os dados revelaram..." }
     ],
     embedUrl: "SUA_URL_PUBLICA_DO_POWER_BI",
     githubUrl: "https://github.com/wellingtonflores/seu-repositorio"
   }
   ```
4. Salve o arquivo. O Next.js gerará automaticamente o card na página inicial e a página de exibição em tela cheia para o novo dashboard.

---

## Deploy e Publicação

Este projeto está configurado para deploy automático na **Vercel**:
1. Faça o push do código para o seu repositório no GitHub.
2. Acesse a Vercel, crie um novo projeto e vincule o repositório do portfólio.
3. O deploy será feito automaticamente e novas atualizações na branch `main` atualizarão o site no ar instantaneamente.

