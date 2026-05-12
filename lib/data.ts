import {
  BadgeCheck,
  Boxes,
  Brush,
  Code2,
  Database,
  Figma,
  Gamepad2,
  Layers3,
  MousePointer2,
  Palette,
  Sparkles,
  Wand2
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" }
];

export const skills = [
  { name: "UI/UX Design", level: 92, icon: Palette, accent: "cyan" },
  { name: "Figma", level: 88, icon: Figma, accent: "violet" },
  { name: "Frontend Development", level: 90, icon: Code2, accent: "mint" },
  { name: "HTML", level: 94, icon: Layers3, accent: "cyan" },
  { name: "CSS", level: 91, icon: Brush, accent: "violet" },
  { name: "JavaScript", level: 84, icon: Sparkles, accent: "ember" },
  { name: "React", level: 80, icon: Boxes, accent: "cyan" },
  { name: "C#", level: 65, icon: BadgeCheck, accent: "violet" },
  { name: "SQL", level: 68, icon: Database, accent: "mint" },
  { name: "Entity Framework", level: 58, icon: Database, accent: "ember" },
  { name: "Interactive Design", level: 86, icon: MousePointer2, accent: "cyan" },
  { name: "Motion Design", level: 78, icon: Wand2, accent: "violet" }
];

export const projects = [
  {
    title: "Nexus Arena UI",
    description: "A competitive game dashboard concept with mission cards, animated status systems, and a cinematic command-center feel.",
    image: "/project-nexus.svg",
    stack: ["Next.js", "Framer Motion", "UI Systems"],
    demo: "#",
    github: "#"
  },
  {
    title: "Aurora SaaS Console",
    description: "A polished analytics interface shaped around fast scanning, glass panels, dense data cards, and premium product motion.",
    image: "/project-aurora.svg",
    stack: ["React", "Tailwind", "UX Design"],
    demo: "#",
    github: "#"
  },
  {
    title: "Arcane Portfolio Lab",
    description: "An experimental portfolio prototype mixing fantasy atmosphere, micro interactions, responsive layout, and accessible content.",
    image: "/project-arcane.svg",
    stack: ["Next.js", "Three.js", "Motion"],
    demo: "#",
    github: "#"
  }
];

export const journey = [
  {
    year: "2023",
    title: "UI/UX Foundation",
    description: "Built a sharp eye for hierarchy, spacing, visual mood, and user-centered interface decisions."
  },
  {
    year: "2024",
    title: "Frontend Craft",
    description: "Focused on responsive layouts, React components, polished CSS systems, and high-quality web interactions."
  },
  {
    year: "2025",
    title: "C# and .NET Track",
    description: "Expanded technical depth with C#, SQL, Entity Framework, and backend thinking for stronger products."
  },
  {
    year: "Now",
    title: "Interactive Worlds",
    description: "Exploring gamified interfaces, cinematic web experiences, and design-led digital products."
  }
];

export const socials = [
  { label: "Email", value: "hello@walidrabei.dev", href: "mailto:hello@walidrabei.dev" },
  { label: "LinkedIn", value: "linkedin.com/in/walidrabei", href: "https://linkedin.com/in/walidrabei" },
  { label: "GitHub", value: "github.com/walidrabei", href: "https://github.com/walidrabei" }
];
