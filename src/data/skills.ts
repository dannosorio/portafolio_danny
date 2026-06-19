export interface SkillGroup {
  title: string;
  accent: "cyan" | "pink" | "violet" | "lime";
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    accent: "cyan",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "Vue",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    accent: "violet",
    items: [
      "Node.js",
      "Python",
      "FastAPI",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "DevOps & Cloud",
    accent: "pink",
    items: [
      "Docker",
      "AWS",
      "GitHub Actions",
      "Terraform",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    title: "Herramientas",
    accent: "lime",
    items: ["Git", "Figma", "Postman", "Linear", "VS Code", "Cursor"],
  },
];

export const marqueeStack: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Astro",
  "Tailwind",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "AWS",
  "GraphQL",
  "Redis",
  "Vite",
  "Figma",
];
