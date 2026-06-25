import { Project } from "../types/project";

export const PROJECTS: Project[] = [
  {
    id: "steam-games-analytics",
    title: "Steam Games: Pipeline ETL & Data Analytics",
    description: "Pipeline ETL automatizado com Python, Pandas e SQL que higieniza e analisa dados financeiros de jogos da Steam, culminando em relatórios estratégicos de faturamento.",
    longDescription: "Este projeto de análise de dados automatiza a extração, tratamento e carregamento (ETL) de informações da base de jogos da Steam. A solução processa dados brutos e não estruturados, aplicando engenharia de atributos (como a conversão de faixas de vendas em formato texto para médias numéricas para possibilitar agregações financeiras) e armazena os dados em um banco de dados estruturado. Através de consultas SQL otimizadas e modelagem de dados, extraímos insights críticos sobre quais faixas de preços e dinâmicas de descontos geram maior volume de receita.",
    category: "Análise de Dados & BI",
    technologies: ["Python", "Pandas", "SQL", "SQLAlchemy", "Power BI", "ETL"],
    featured: true,
    metrics: [
      {
        label: "Faturamento Estimado",
        value: "R$ 75.38 Bi",
        description: "Faturamento bruto total estimado dos jogos analisados"
      },
      {
        label: "Jogos Processados",
        value: "126.000+",
        description: "Registros limpos e armazenados no banco de dados"
      },
      {
        label: "Volume Médio de Vendas",
        value: "482k un",
        description: "Média de proprietários estimados por jogo"
      },
      {
        label: "Conversão de Atributos",
        value: "100%",
        description: "Mapeamento bem-sucedido de dados não-estruturados"
      }
    ],
    insights: [
      {
        title: "Impacto dos Descontos no Faturamento",
        description: "Jogos na faixa de preço 'Barato' (até $20) com frequência de desconto acima da média geram um volume de faturamento total maior do que jogos da mesma faixa com baixa frequência de desconto, provando a alta elasticidade de preço desse segmento."
      },
      {
        title: "Volume vs. Faturamento nos Gratuitos",
        description: "Jogos gratuitos ('Gratuito') possuem a maior média de proprietários (volume), mas geram faturamento direto nulo no pipeline principal. Isso ressalta a necessidade de monitorar dados adicionais de DLCs e microtransações para mapear a receita indireta real."
      },
      {
        title: "Segmentação Premium Resiliente",
        description: "O segmento 'Premium' (acima de $50) apresenta baixa sensibilidade à quantidade de descontos em termos de volume de vendas unitárias, mas seu faturamento médio por jogo é o maior entre todas as faixas, justificando o posicionamento de preço alto de títulos AAA."
      },
      {
        title: "Eficiência da Pipeline ETL",
        description: "A automação com Python e Pandas reduziu o tempo de processamento e carga de dados, eliminando registros corrompidos ou sem identificação de nome no banco final."
      }
    ],
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMGM4YTZiNjEtZjZlOS00MDlhLWE4NzItODg5MDRmMTc2N2ZmIiwidCI6ImM5MWUxNDk0LTg5Y2MtNDg3NS05NTk2LWMyNzhlMDk1M2FlOCJ9",
    githubUrl: "https://github.com/wellingtonflores/project-steam",
    sqlQuery: `WITH tb_media_qtde_descontos AS (
  SELECT AVG(discount_count) AS media_qtde_descontos 
  FROM steam_games
),

tb_cruzamentos AS (
  SELECT 
    CASE
      WHEN price = 0 THEN 'Gratuito'
      WHEN price <= 20 THEN 'Barato'
      WHEN price > 20 AND price <= 50 THEN 'Médio'
      ELSE 'Premium'
    END AS tier,
    ROUND(AVG(estimated_owners_avg)) AS volume_medio_vendas,
    ROUND(SUM(estimated_owners_avg * price)) AS faturamento_total_estimado,
    ROUND(AVG(estimated_owners_avg * price)) AS faturamento_medio_por_jogo,
    COUNT(*) AS volume_de_jogos,
    CASE 
      WHEN discount_count > (SELECT media_qtde_descontos FROM tb_media_qtde_descontos) THEN 'Acima da Média'
      ELSE 'Abaixo da Média'
    END AS perfil_frequencia_desconto
  FROM steam_games
  GROUP BY tier, perfil_frequencia_desconto
)

SELECT * FROM tb_cruzamentos
ORDER BY faturamento_medio_por_jogo DESC;`
  }
];

