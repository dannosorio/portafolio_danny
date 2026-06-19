export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links: {
    demo?: string;
    repo?: string;
    case?: string;
  };
  highlight?: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Aurora Dashboard",
    description:
      "Panel de analítica en tiempo real para SaaS con visualizaciones interactivas, control de roles y exportación a múltiples formatos.",
    tags: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Tailwind"],
    links: {
      demo: "https://example.com/aurora",
      repo: "https://github.com/danny/aurora",
    },
    highlight: true,
    year: "2025",
  },
  {
    title: "Neon Commerce",
    description:
      "E-commerce headless con checkout optimizado, pagos con Stripe y arquitectura serverless escalable a millones de visitas.",
    tags: ["Astro", "Stripe", "Cloudflare Workers", "Sanity"],
    links: {
      demo: "https://example.com/neon-commerce",
      repo: "https://github.com/danny/neon-commerce",
    },
    highlight: true,
    year: "2025",
  },
  {
    title: "Pulse API",
    description:
      "API REST de alto rendimiento para procesamiento de eventos en streaming, con autenticación JWT y rate limiting distribuido.",
    tags: ["FastAPI", "Python", "Redis", "Docker", "AWS"],
    links: {
      repo: "https://github.com/danny/pulse-api",
    },
    year: "2024",
  },
  {
    title: "Lumen Chat",
    description:
      "Chat en tiempo real con IA integrada, soporte multi-canal y arquitectura basada en WebSockets y eventos.",
    tags: ["React", "Node.js", "WebSocket", "OpenAI", "MongoDB"],
    links: {
      demo: "https://example.com/lumen",
      repo: "https://github.com/danny/lumen-chat",
    },
    year: "2024",
  },
  {
    title: "Vault CLI",
    description:
      "Herramienta de línea de comandos para gestionar secretos y variables de entorno entre equipos, con cifrado end-to-end.",
    tags: ["TypeScript", "Node.js", "CLI", "Cryptography"],
    links: {
      repo: "https://github.com/danny/vault-cli",
    },
    year: "2024",
  },
  {
    title: "Portfolio v2",
    description:
      "Este portafolio. Construido con Astro y Tailwind v4, optimizado al máximo: 100/100 en Lighthouse y casi cero JavaScript.",
    tags: ["Astro", "Tailwind v4", "TypeScript"],
    links: {
      repo: "https://github.com/danny/portfolio",
    },
    year: "2026",
  },
];
