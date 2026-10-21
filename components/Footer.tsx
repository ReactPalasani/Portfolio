'use client'; 
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Footer() {

  // Structured link map for easy expansion
  const footerSections: FooterSection[] = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Integrations", href: "/integrations" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          
          {/* Brand/Logo Column */}
          <div className="col-span-2 flex flex-col gap-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              <span className="bg-clip-text text-white">
                Nagendra Palasani
              </span>
            </Link>
            <p className="max-w-xs text-sm font-normal text-slate-500 dark:text-slate-400">
              Building the future of modern web applications with cutting-edge architectures.
            </p>
          </div>

          {/* Dynamic Link Subheadings */}
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-normal text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar Divider & Copyright */}
        <div className="mt-12 border-t border-slate-100 pt-8 dark:border-slate-900">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs font-normal text-slate-400 dark:text-slate-500">
              &copy; 2023 Nagendra Palasani. All rights reserved.
            </p>
            
            {/* Simple Status/Subtext */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
