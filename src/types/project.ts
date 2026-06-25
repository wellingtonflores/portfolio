export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectInsight {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  metrics: ProjectMetric[];
  insights: ProjectInsight[];
  embedUrl: string;
  githubUrl?: string;
  sqlQuery?: string;
  featured?: boolean;
}
