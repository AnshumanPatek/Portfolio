"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  ChevronRight,
  ExternalLink,
  Globe,
  Instagram,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  type: string;
  url?: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  companyUrl?: string;
}

interface TechItem {
  name: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

const GITHUB_PROFILE = "https://github.com/AnshumanPatek";
const CONTACT_EMAIL = "anshumanpatek369@gmail.com";
const MAILTO_WORK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Work opportunity")}`;
const LINKEDIN_URL = "https://www.linkedin.com/in/anshuman-patek/";
const INSTAGRAM_URL = "https://www.instagram.com/anshumanpatek369/";

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Denta Glow",
    description:
      "Full-stack AI dental appointment platform: 3-step booking, real-time availability, automated emails (Resend), and secure auth with Clerk (OAuth + RBAC) plus subscriptions—built with Next.js, TypeScript, Prisma, and PostgreSQL. Feature-rich admin dashboard and AI voice consultation via Vapi; 40+ reusable Shadcn/Tailwind components, Recharts analytics, TanStack Query, and Turbopack.",
    tags: [
      "Next.js",
      "Prisma",
      "Clerk",
      "Resend",
      "Vapi",
      "Shadcn",
    ],
    type: "NOV 2025 — PRESENT",
    url: "https://dentaglow.vercel.app/",
  },
  {
    id: 2,
    title: "HR chatbot",
    description:
      "AI-powered HR chatbot using React, Node.js, and Google Gemini with real-time communication via Socket.IO for 24/7 conversational support. RAG pipeline with a custom vector store, cosine semantic search, and document processing (PDF, TXT, MD), plus a responsive UI and scalable backend with persistent chat history.",
    tags: ["React", "Node.js", "Gemini", "Socket.IO", "RAG"],
    type: "SEP — NOV 2025",
    url: "https://ai-chat-bot-khaki-two.vercel.app/",
  },
  {
    id: 3,
    title: "Easy Way",
    description:
      "A comprehensive platform connecting users with services and solutions seamlessly. Built with a focus on user experience and scalable architecture.",
    tags: ["React", "Node.js", "MongoDB"],
    type: "FULL STACK",
    url: `${GITHUB_PROFILE}/Easy-Way-2.0`,
  },
];

const EXPERIENCE: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Inkepto Technologies",
    companyUrl: "https://www.inkepto.com/",
    location: "Remote",
    period: "JAN 2026 — PRESENT",
    bullets: [
      "Worked on multiple scalable products including website portals, e-commerce platforms, and HRMS systems, delivering end-to-end full stack solutions and admin panels.",
      "Built 300+ reusable frontend components and developed robust backend APIs, improving development speed and system scalability.",
      "Led a team of 5–10 developers, driving project execution, code quality, and timely delivery across multiple projects.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "PeerHire Technologies",
    companyUrl: "https://peerhire.in/",
    location: "Remote",
    period: "MAY 2025 — NOV 2025",
    bullets: [
      "Developed responsive frontend screens using Next.js, managing end-to-end UI flows for authentication, onboarding, project listing, and user dashboards.",
      "Integrated Google & LinkedIn OAuth and Persona KYC verification to ensure secure and seamless user experiences across all workflows.",
      "Dockerized applications and set up GitHub Actions CI/CD pipelines, along with Nginx reverse proxy and Prometheus & Grafana for automated deployments, monitoring, and performance tracking.",
    ],
  },
  {
    title: "Software Engineer",
    company: "TechImmortals Solutions",
    companyUrl: "https://techimmortals.co/",
    location: "Remote",
    period: "MAY 2024 — MAR 2025",
    bullets: [
      "Optimized game APIs, handling events like history, rebet, and double. Used PostgreSQL (Sequelize) and Redis for caching and high performance.",
      "Developed CMS portals and gaming platforms for QGGame onboarding, streamlining player and distributor management to enhance the gaming experience.",
      "Optimized various APIs across modules to improve scalability and response times, while working on all CMS portals and admin panels.",
      "Reduced Docker image size by 95% using multi-stage builds; configured CI/CD for dev and stage with GitHub Actions and Nginx as a reverse proxy.",
    ],
  },
];

const TECH_STACK: TechCategory[] = [
  {
    title: "FRONT END",
    items: [
      { name: "React js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn UI" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "BACK END",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Fast Api" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "Redis" },
    ],
  },
  {
    title: "DEVOPS & CLOUD",
    items: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS" },
      { name: "Github Actions" },
    ],
  },
];

function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h2 className="text-[10px] font-mono font-medium tracking-[0.2em] text-gray-400 uppercase">
        {"// "}
        {title}
      </h2>
      {action}
    </div>
  );
}

function contributionCellClass(level: number) {
  return cn(
    "github-cell",
    level === 0 && "bg-gray-50",
    level === 1 && "bg-green-100",
    level === 2 && "bg-green-300",
    level === 3 && "bg-green-500",
    level >= 4 && "bg-green-600",
  );
}

const FALLBACK_CELLS = Array.from({ length: 53 * 7 }, (_, i) =>
  ((i * 17 + 31) % 4) as number,
);

function GitHubContributions() {
  const [cells, setCells] = useState<number[]>(FALLBACK_CELLS);
  const [total, setTotal] = useState<number | null>(null);
  const [fromApi, setFromApi] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/github-contributions")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("bad"))))
      .then((data: { total?: number; cells?: number[] }) => {
        if (
          cancelled ||
          !Array.isArray(data.cells) ||
          data.cells.length !== 53 * 7
        ) {
          return;
        }
        setCells(data.cells);
        setTotal(typeof data.total === "number" ? data.total : null);
        setFromApi(true);
      })
      .catch(() => {
        /* keep fallback grid */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="py-8">
      <SectionHeader
        title="GITHUB CONTRIBUTIONS"
        action={
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-gray-400 underline decoration-gray-200 underline-offset-4 transition-colors hover:text-foreground"
          >
            @AnshumanPatek
          </a>
        }
      />
      <p className="mb-4 font-mono text-[10px] leading-relaxed text-gray-400">
        Live grid from your public contribution data (same source as the graph on{" "}
        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-200 underline-offset-2 hover:text-foreground"
        >
          github.com/AnshumanPatek
        </a>
        ), fetched server-side and cached for about an hour.
      </p>
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white p-6">
        <div className="mb-2 flex justify-between font-mono text-[10px] text-gray-400">
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
        </div>
        <div className="github-grid">
          {cells.map((level, i) => (
            <div key={i} className={contributionCellClass(level)} />
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-3 font-mono text-[10px] text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            {fromApi && total != null
              ? `${total.toLocaleString()} contributions in the last year`
              : fromApi
                ? "Contributions (last year)"
                : "Showing placeholder — live graph loads from GitHub"}
          </span>
          <div className="flex flex-wrap items-center gap-1">
            <span>Less</span>
            <div className="h-2 w-2 rounded-sm bg-gray-50" />
            <div className="h-2 w-2 rounded-sm bg-green-100" />
            <div className="h-2 w-2 rounded-sm bg-green-300" />
            <div className="h-2 w-2 rounded-sm bg-green-500" />
            <div className="h-2 w-2 rounded-sm bg-green-600" />
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 selection:bg-gray-200">
      <header className="mb-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-8 h-56 w-56 shrink-0 origin-center overflow-hidden rounded-full bg-gray-100 grayscale transition-[filter,transform] duration-500 ease-out hover:scale-110 hover:grayscale-0 sm:h-60 sm:w-60"
        >
          <Image
            src="/profile.jpg"
            alt="Anshuman Patek"
            width={747}
            height={1024}
            className="h-full w-full object-cover object-[center_22%]"
            sizes="(max-width: 640px) 280px, 300px"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="mb-2 text-sm font-medium text-gray-500">
            Namaste, I&apos;m
          </p>
          <h1 className="mb-2 text-4xl font-bold tracking-tight">
            Anshuman Patek
          </h1>
          <p className="mb-6 font-mono text-xs text-gray-400">
            /æn.ʃu.mæn pə.tek/ • noun • available for work
          </p>

          <p className="mb-4 max-w-lg leading-relaxed text-gray-600">
            A full stack{" "}
            <span className="text-foreground font-medium underline decoration-gray-200 underline-offset-4">
              product engineer
            </span>{" "}
            and designer with experience across research, strategy, and
            engineering. Focused on delivering well-designed digital products.
          </p>
          <p className="max-w-lg leading-relaxed text-gray-600">
            I help businesses turn ideas into{" "}
            <span className="text-foreground font-medium underline decoration-gray-200 underline-offset-4">
              scalable
            </span>{" "}
            user-friendly solutions that solve real problems.
          </p>
        </motion.div>
      </header>

      <section className="mb-20">
        <SectionHeader title="EXPERIENCE" />
        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-gray-600">
                  {exp.title} —{" "}
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-gray-200 underline-offset-4 hover:text-gray-600"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                <span className="shrink-0 font-mono text-[10px] text-gray-400">
                  {exp.period}
                </span>
              </div>
              <p className="mb-3 text-xs text-gray-400">{exp.location}</p>
              <ul className="mb-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-gray-500">
                {exp.bullets.map((item, j) => (
                  <li key={`${exp.company}-${j}`}>{item}</li>
                ))}
              </ul>
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[10px] font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-foreground"
                >
                  Company site <ExternalLink className="h-3 w-3" />
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8">
          <div className="absolute top-0 left-0 h-full w-1 bg-gray-100" />
          <SectionHeader title="LEARNINGS" />
          <h3 className="mb-4 text-xl font-semibold">
            I learnt a lot from my experiences
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-gray-500">
            Every project I&apos;ve worked on has taught me something valuable,
            not just about technology or design, but about people,
            expectations, and problem-solving. I&apos;ve learned that good work
            isn&apos;t only about skill; it&apos;s about listening carefully.
          </p>
          <button
            type="button"
            className="flex items-center gap-1 font-mono text-[10px] font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-foreground"
          >
            View More <ChevronRight className="h-3 w-3" />
          </button>
        </div>
      </section>

      <section className="mb-20">
        <SectionHeader
          title="PROJECTS"
          action={
            <button
              type="button"
              className="font-mono text-[10px] text-gray-400 underline decoration-gray-200 underline-offset-4 transition-colors hover:text-foreground"
            >
              All Projects
            </button>
          }
        />
        <div className="space-y-12">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="mb-2 flex items-baseline justify-between">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-gray-600">
                  {project.title}
                </h3>
                <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                  {project.type}
                </span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-500">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-gray-50 px-2 py-1 font-mono text-[10px] text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[10px] font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-foreground"
                >
                  {project.url.includes("github.com")
                    ? "View on GitHub"
                    : "Visit live site"}{" "}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <button
                  type="button"
                  className="flex items-center gap-1 font-mono text-[10px] font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-foreground"
                >
                  View More <ChevronRight className="h-3 w-3" />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <GitHubContributions />

      <section className="mb-20">
        <SectionHeader title="TECH STACK" />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {TECH_STACK.map((category) => (
            <div key={category.title}>
              <h4 className="mb-6 font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="group flex cursor-default items-center gap-3 text-sm font-medium text-gray-600"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-200 transition-colors group-hover:bg-gray-400" />
                    <span className="tracking-tight uppercase transition-colors group-hover:text-foreground">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="rounded-2xl border border-gray-100 bg-white p-8">
          <SectionHeader title="ACHIEVEMENTS" />
          <div className="mb-2 flex items-baseline justify-between">
            <h3 className="text-lg font-semibold">Top Rated Developer</h3>
            <span className="font-mono text-[10px] text-gray-400">2024</span>
          </div>
          <p className="mb-6 text-sm leading-relaxed text-gray-500">
            Recognized for consistent high-quality delivery and client
            satisfaction. Maintaining a 100% success rate across complex
            full-stack implementations.
          </p>
          <button
            type="button"
            className="flex items-center gap-1 font-mono text-[10px] font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-foreground"
          >
            View More <ChevronRight className="h-3 w-3" />
          </button>
        </div>
      </section>

      <section className="mb-20">
        <SectionHeader title="OFF THE SCREEN" />
        <div className="space-y-6">
          <p className="text-sm leading-relaxed text-gray-500">
            I believe design is an act of deliberate perception. Off the screen,
            I practice deceleration, attuning myself to subtleties, textures,
            and latent patterns that most overlook. I study the architecture
            behind products, the cadence of human interaction, and the quiet
            logic embedded in everyday systems. These observations are not idle
            curiosities, they are instruments that sharpen how I conceive,
            construct, and refine experiences for others.
          </p>
          <p className="text-sm leading-relaxed text-gray-500">
            Design, to me, is not decoration, it is stewardship. It is the
            responsibility to translate complexity into clarity, friction into
            flow, and ambiguity into meaning. I remain anchored in curiosity,
            guided by discernment, and committed to craft with unwavering
            resolve—on the canvas, in code, and in thought.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <SectionHeader title="GET IN TOUCH" />
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-sm font-medium text-gray-600">
            Help me improve by providing me work 🚀
          </p>
          <a
            href={MAILTO_WORK}
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Work with me
          </a>
        </div>
      </section>

      <footer className="flex justify-center border-t border-gray-100 pt-10">
        <div className="flex items-center gap-6 rounded-full border border-gray-100 bg-white px-6 py-3 shadow-sm">
          <Link
            href="/"
            className="text-gray-400 transition-colors hover:text-foreground"
            aria-label="Home"
          >
            <Globe className="h-4 w-4" />
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}
