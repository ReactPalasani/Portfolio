
'use client';

import Image from 'next/image';
import B1 from"@/Assets/BeBadge Event Management Platform.png";
import B2 from"@/Assets/Book a Resort_ Tropical Booking Experience.png";
import B3 from"@/Assets/Smart Recruit AI Hiring Dashboard.png";


const projects = [
    {
        title: 'BeBadge',
        subtitle: 'Enterprise Event Management Platform',
        role: 'Lead Frontend Engineer',
        company: 'Billiton Services Private Limited',
        image: B1,
        accent: 'text-blue-600',
        border: 'hover:border-blue-400',
        gradient: 'from-blue-500 to-indigo-600',
        description:
            'A multi-tenant event management platform with dedicated dashboards and permissions for admins, organizations, exhibitors, and visitors.',
        tech: [
            'React.js',
            'Context API',
            'Tailwind CSS',
            'QR / Barcode Scanning',
            'Payment Gateway Integration',
            'Data Analytics & Reporting',
            'Real-Time Notifications',
            'Cloud Deployment & Scalability',
            'Security & Compliance',
        ],
        contributions: [
            'Built a dynamic form builder for custom visitor data collection.',
            'Developed RBAC dashboards for pass printing, room checking, and gate checking.',
            'Implemented digital profile exchange, photo uploads, registrations, and stall booking.',
        ],
    },
    {
        title: 'Book A Resort',
        subtitle: 'Full-Stack Resort Management Application',
        role: 'Full-Stack Developer',
        company: 'ITEQDATA',
        image: B2,
        accent: 'text-emerald-600',
        border: 'hover:border-emerald-400',
        gradient: 'from-emerald-500 to-teal-600',
        description:
            'An end-to-end resort management portal connecting lead generation, administrative approval, and contract booking.',
        tech: [
            'React.js',
            'Node.js',
            'Express.js',
            'SQL',
            'JWT Authentication',
            'Payment Gateways',
            'Data Tables & Reporting',
            "Zustand for State Management",
        ],
        contributions: [
            'Developed tiered Marketing and Admin modules with separate permissions.',
            'Implemented resort verification, approval, rejection, and query-note workflows.',
            'Integrated secure authentication and payment gateway functionality.',
        ],
    },
    {
        title: 'Smart Recruit',
        subtitle: 'AI-Powered Interview & Selection Portal',
        role: 'Independent Full-Stack Architect',
        company: 'Freelance / Training Solution',
        image: B3,
        accent: 'text-violet-600',
        border: 'hover:border-violet-400',
        gradient: 'from-violet-500 to-purple-600',
        description:
            'An intelligent candidate evaluation platform designed to manage and track multi-round recruitment workflows.',
        tech: [
            'Next.js',
            'Firebase',
            'Firestore',
            'Firebase Auth',
            'OpenAI / Anthropic APIs',
        ],
        contributions: [
            'Built candidate and HR dashboards with assessment score aggregation.',
            'Designed aptitude, reasoning, communication, and technical assessment rounds.',
            'Implemented real-time progress tracking and final evaluations using Firebase.',
        ],
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-zinc-50 px-4 py-20 font-sans dark:bg-black sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-14 text-center">
                 

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Featured{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
                        A showcase of my work in enterprise applications,
                        full-stack development, and AI-powered solutions.
                    </p>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-violet-600" />
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className={`group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 ${project.border}`}
                        >
                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                                <span
                                    className={`absolute bottom-4 left-4 rounded-full bg-gradient-to-r ${project.gradient} px-4 py-1.5 text-xs font-semibold text-white shadow-md`}
                                >
                                    {project.title}
                                </span>
                            </div>

                            {/* Project Details */}
                            <div className="flex flex-1 flex-col p-6">
                                <h2 className={`text-2xl font-bold ${project.accent}`}>
                                    {project.title}
                                </h2>

                                <h3 className="mt-2 text-base font-semibold leading-6 text-slate-800 dark:text-zinc-200">
                                    {project.subtitle}
                                </h3>

                                <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-zinc-400">
                                    <p>
                                        <span className="font-semibold text-slate-800 dark:text-zinc-200">
                                            Role:
                                        </span>{' '}
                                        {project.role}
                                    </p>

                                    <p>
                                        <span className="font-semibold text-slate-800 dark:text-zinc-200">
                                            Company:
                                        </span>{' '}
                                        {project.company}
                                    </p>
                                </div>

                                <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-zinc-400">
                                    {project.description}
                                </p>

                                {/* Technology Stack */}
                                <div className="mt-6">
                                    <h4 className="mb-3 font-bold text-slate-900 dark:text-white">
                                        Tech Stack
                                    </h4>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Contributions */}
                                <div className="mt-6">
                                    <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
                                        Key Contributions
                                    </h4>

                                    <ul className="space-y-3">
                                        {project.contributions.map(
                                            (contribution) => (
                                                <li
                                                    key={contribution}
                                                    className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-zinc-400"
                                                >
                                                    <span
                                                        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${project.gradient} text-xs text-white`}
                                                    >
                                                        ✓
                                                    </span>

                                                    <span>{contribution}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>

                                {/* Bottom Accent */}
                                <div
                                    className={`mt-7 h-1 w-0 rounded-full bg-gradient-to-r ${project.gradient} transition-all duration-500 group-hover:w-full`}
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
