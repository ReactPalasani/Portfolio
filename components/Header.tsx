"use client"; 

import { useState } from "react";
import Link from "next/link";
import CrownLogo from "../Assets/CrownLogo.png"
import Image from "next/image";
import LucideIcon from "./Lucide-icon";
interface NavLink {
    label: string;
    href: string;
    icon: string;
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Navigation items array for easy management
    const links: NavLink[] = [
        { label: "Home", href: "/", icon: "homeRoute" },
        { label: "About", href: "/about", icon: "aboutRoute" },
        { label: "Projects", href: "/projects", icon: "projectsRoute" },
        { label: "Skills", href: "/skills", icon: "skillsRoute" },
        { label: "experience", href: "/experience", icon: "experienceRoute" },
        { label: "Contact", href: "/contact", icon: "contactRoute" },
    ];

    return (
        <header className=" top-0 z-50 relative w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-black">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8">

                {/* Logo / Branding */}
                <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    <Image
                        src={CrownLogo}
                        alt="Nagendra Palasani Logo"
                        width={48}
                        height={48}
                        priority
                        className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                    />

                    <span className="bg-clip-text  text-white" >
                        Nagendra Palasani
                    </span>
                </Link>

                {/* Desktop Navigation Link Menu */}
                <nav className="hidden items-center gap-6 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-white flex gap-2"
                        >
                            <LucideIcon name={link.icon} className="h-5 w-5" />
                            {link.label}
                        </Link>
                    ))}
                    {/* <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                        Get Started
                    </button> */}
                </nav>

                {/* Mobile Menu Open Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 md:hidden dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900 relative"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        // Close X Icon
                        <svg className="h-5 w-5 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger Menu Icon
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>


            {/* Mobile Drawer Menu Panel */}
            {isOpen && (
                <div className="absolute left-0 top-full z-50 w-full border-t border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-950 md:hidden">
                    <nav className="flex flex-col gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 text-base font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
                            >
                                <LucideIcon
                                    name={link.icon}
                                    className="h-5 w-5"
                                />
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}


        </header>
    );
}
