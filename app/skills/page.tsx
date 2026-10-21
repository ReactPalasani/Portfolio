"use client";

import type { IconType } from "react-icons";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaShieldAlt,
  FaKey,
  FaCloud,
  FaTools,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiDatabricks,
  SiOpenid,
  SiAnthropic,
  SiNpm,
  SiYarn,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  GitBranch,
  ShieldCheck,
  Workflow,
} from "lucide-react";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillCategory = {
  title: string;
  description: string;
  icon: typeof Code2;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description:
      "Building responsive, accessible, and modern user interfaces.",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React.js", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Redux", icon: SiRedux, color: "text-purple-500" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
    ],
  },
  {
    title: "Backend & Cloud Integration",
    description:
      "Developing APIs, authentication systems, and data-driven applications.",
    icon: Server,
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-700 dark:text-white" },
      { name: "Python", icon: FaPython, color: "text-yellow-500" },
      { name: "SQL", icon: FaDatabase, color: "text-sky-500" },
      { name: "SQLite", icon: SiSqlite, color: "text-blue-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-500" },
      { name: "REST APIs", icon: FaCode, color: "text-emerald-500" },
      { name: "JWT Authentication", icon: SiJsonwebtokens, color: "text-purple-500" },
      { name: "RBAC Security", icon: FaShieldAlt, color: "text-red-500" },
    ],
  },
  {
    title: "Data Engineering & AI",
    description:
      "Working with data pipelines, ETL processes, and intelligent integrations.",
    icon: BrainCircuit,
    skills: [
      { name: "Databricks", icon: SiDatabricks, color: "text-red-500" },
      { name: "IICS", icon: FaDatabase, color: "text-blue-500" },
      { name: "Advanced SQL", icon: SiMysql, color: "text-blue-500" },
      { name: "ETL Processes", icon: Workflow as unknown as IconType, color: "text-purple-500" },
      { name: "Data Pipelines", icon: FaCloud, color: "text-sky-500" },
      { name: "Data Transformation", icon: FaDatabase, color: "text-green-500" },
      { name: "OpenAI API", icon: SiOpenid, color: "text-green-600" },
      { name: "Anthropic API", icon: SiAnthropic, color: "text-orange-500" },
    ],
  },
  {
    title: "Tools & Developer Workflow",
    description:
      "Using modern tools to develop, test, and maintain applications.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-black dark:text-white" },
      { name: "VS Code", icon: FaCode, color: "text-blue-500" },
      { name: "npm", icon: SiNpm, color: "text-red-500" },
      { name: "Yarn", icon: SiYarn, color: "text-blue-400" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Form Engines", icon: FaTools, color: "text-indigo-500" },
      { name: "QR & Barcode", icon: FaCode, color: "text-emerald-500" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "Authentication", icon: FaKey, color: "text-yellow-500" },
    ],
  },
];

const highlights = [
  {
    icon: Workflow,
    title: "Full-Stack Development",
    description:
      "Frontend interfaces, backend APIs, and database integration.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
    description:
      "JWT-based authentication and role-based permissions.",
  },
  {
    icon: Database,
    title: "Data Integration",
    description:
      "ETL workflows, SQL queries, and cloud data platforms.",
  },
  {
    icon: GitBranch,
    title: "Development Workflow",
    description:
      "Version control, API testing, and maintainable code.",
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-16 text-slate-900 dark:bg-black dark:text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <section className="mx-auto mb-14 max-w-3xl text-center">
     
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Technical{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Skills
            </span>
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Technologies and tools I use to build scalable full-stack
            applications, integrate data systems, and create reliable
            digital experiences.
          </p>
        </section>

        {/* Skill Categories */}
        <section
          aria-label="Technical skill categories"
          className="grid gap-6 md:grid-cols-2"
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <article
                key={category.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-800 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-300">
                    <CategoryIcon size={25} aria-hidden="true" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold sm:text-2xl">
                      {category.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Icons Instead of Skill Names */}
                <div className="mt-7 grid grid-cols-4 gap-4 sm:grid-cols-5 sm:gap-5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="group/skill relative flex aspect-square items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700 dark:hover:bg-blue-950"
                      >
                        <SkillIcon
                          size={34}
                          aria-hidden="true"
                          className={`${skill.color} transition-transform duration-300 group-hover/skill:scale-110 sm:h-9 sm:w-9`}
                        />

                        {/* Skill name appears on hover or keyboard focus */}
                        <span
                          role="tooltip"
                          className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/skill:opacity-100 group-focus-within/skill:opacity-100"
                        >
                          {skill.name}
                        </span>

                        <span className="sr-only">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </section>

        {/* Core Strengths */}
        <section className="mt-20">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Core Strengths
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              How I apply my technical knowledge to real-world projects.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <Icon
                    className="mb-4 text-blue-600 dark:text-blue-400"
                    size={28}
                    aria-hidden="true"
                  />

                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Closing Section */}
        <section className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center dark:border-blue-950 dark:bg-blue-950/30">
          <h2 className="text-2xl font-bold">
            Always Learning, Always Building
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
            I continuously explore modern technologies and development
            practices to build better applications, solve problems, and
            deliver meaningful user experiences.
          </p>
        </section>
      </div>
    </main>
  );
}