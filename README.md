# Portfolio · Danny

Portafolio personal estático construido con **Astro 6** y **Tailwind CSS v4**.
Diseño moderno, oscuro y con acentos neón.

## Stack

- [Astro 6](https://astro.build/) — generador de sitios estáticos
- [Tailwind CSS v4](https://tailwindcss.com/) — vía `@tailwindcss/vite`
- TypeScript estricto
- Cero JavaScript en runtime, salvo micro-interacciones (typing en hero, navbar móvil, reveal on scroll)

## Estructura

```
src/
├── components/
│   ├── icons/        # Iconos SVG inline
│   ├── sections/     # Secciones de la home (Hero, About, Skills, ...)
│   ├── ui/           # Componentes reutilizables (Section, Chip, NeonButton)
│   ├── Footer.astro
│   └── Navbar.astro
├── data/             # Contenido editable (info personal, proyectos, skills, experiencia)
├── layouts/
│   └── Layout.astro  # Layout base con SEO, fuentes y fondo neon
├── pages/
│   └── index.astro   # Página principal
└── styles/
    └── global.css    # Tema neon, utilidades y animaciones
```

## Editar contenido

Toda la información del portafolio vive en `src/data/`:

- `personal.ts` — nombre, rol, biografía, métricas, redes
- `skills.ts` — grupos de tecnologías y stack del marquee
- `projects.ts` — proyectos destacados
- `experience.ts` — experiencia profesional (timeline)

Editar esos archivos es suficiente para personalizar el sitio.

## Comandos

| Comando | Acción |
|---|---|
| `npm run dev` | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Genera el sitio estático en `./dist/` |
| `npm run preview` | Previsualiza el build localmente |

## Personalización del tema

Los colores neon, fuentes y radios están definidos como tokens en
`src/styles/global.css` bajo el bloque `@theme { ... }`. Cambia esos valores
para ajustar la paleta a tu gusto.
