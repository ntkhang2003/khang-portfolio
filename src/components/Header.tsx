"use client";

import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Awards', href: '/#awards' },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 dark:bg-black/70 dark:border-neon-purple/30">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter hover:text-neon-purple transition-colors cursor-pointer group">
          <Link href="/">
            ntkhang<span className="text-neon-blue group-hover:text-neon-green">.</span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-neon-blue transition-colors border-b border-transparent hover:border-black dark:hover:border-neon-blue"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
