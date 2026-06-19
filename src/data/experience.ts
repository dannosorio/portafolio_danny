export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "Empresa Actual",
    period: "2024 — Presente",
    location: "Remoto",
    description:
      "Lidero el desarrollo de productos web modernos, mentoreo al equipo y defino la arquitectura técnica.",
    achievements: [
      "Reduje el tiempo de carga inicial en un 65% migrando a Astro + SSR.",
      "Diseñé una API modular que escala a más de 1M de requests diarios.",
      "Implementé pipelines de CI/CD que recortaron deploys de 25 a 4 minutos.",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "AWS"],
  },
  {
    role: "Full-Stack Developer",
    company: "Empresa Anterior",
    period: "2022 — 2024",
    location: "Híbrido",
    description:
      "Construí features end-to-end en un producto B2B SaaS usado por equipos en 12 países.",
    achievements: [
      "Lancé un módulo de billing con Stripe que generó +30% MRR.",
      "Migré el frontend legado a React + TypeScript sin downtime.",
      "Implementé un sistema de feature flags compartido entre equipos.",
    ],
    stack: ["React", "Node.js", "GraphQL", "MongoDB", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Agencia Digital",
    period: "2020 — 2022",
    location: "Presencial",
    description:
      "Entregué más de 20 sitios web y landings de alto rendimiento para clientes de distintas industrias.",
    achievements: [
      "Estandaricé un sistema de diseño reutilizable entre proyectos.",
      "Mejoré el Core Web Vitals promedio del portafolio de clientes.",
      "Mentoré a 3 desarrolladores juniors en buenas prácticas.",
    ],
    stack: ["Vue", "Nuxt", "Sass", "WordPress", "Figma"],
  },
];
