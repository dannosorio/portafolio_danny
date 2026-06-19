export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter" | "website";
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  taglines: string[];
  location: string;
  email: string;
  availability: string;
  about: string[];
  highlights: { label: string; value: string }[];
  socials: SocialLink[];
  resumeUrl?: string;
}

export const personal: PersonalInfo = {
  name: "Danny Osorio",
  shortName: "Danny",
  role: "Full-Stack Developer",
  taglines: [
    "Construyo experiencias web rápidas y elegantes.",
    "Diseño interfaces que se sienten vivas.",
    "Transformo ideas en productos digitales.",
  ],
  location: "Latinoamérica · Remoto",
  email: "hola@danny.dev",
  availability: "Disponible para nuevos proyectos",
  about: [
    "Soy un desarrollador apasionado por crear productos digitales que combinan rendimiento, diseño y una experiencia de usuario impecable. Me especializo en construir aplicaciones web modernas de extremo a extremo.",
    "Disfruto trabajar en la intersección entre el diseño y la ingeniería, cuidando cada detalle: desde la arquitectura del backend hasta las micro-interacciones del frontend.",
    "Siempre estoy explorando nuevas tecnologías, contribuyendo a la comunidad y buscando la forma más simple de resolver problemas complejos.",
  ],
  highlights: [
    { label: "Años de experiencia", value: "5+" },
    { label: "Proyectos entregados", value: "30+" },
    { label: "Clientes satisfechos", value: "20+" },
    { label: "Tecnologías dominadas", value: "15+" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/danny", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/danny",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:hola@danny.dev", icon: "mail" },
  ],
  resumeUrl: "/cv.pdf",
};
