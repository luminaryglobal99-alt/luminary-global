'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'บริการทั้งหมด', href: '/services' },
    { name: 'แพ็กเกจราคา', href: '/pricing' },
    { name: 'ผลงาน Before/After', href: '/portfolio' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-primary font-serif font-bold text-xl border border-primary/30 shadow-sm">
            L
          </div>
          <div>
            <span className="font-serif font-bold text-xl tracking-wider text-forest block leading-none">
              LUMINARY GLOBAL
            </span>
            <span className="text-[10px] tracking-widest text-primary-dark font-semibold uppercase">
              Luxury Cleaning Service
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href ? 'text-primary font-bold' : 'text-stone-700 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Portal Access & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-xs text-stone-500 border-r border-stone-200 pr-4">
            <Link href="/cleaner/dashboard" className="hover:text-primary">แม่บ้าน (PWA)</Link>
            <span>•</span>
            <Link href="/admin/jobs" className="hover:text-primary">Admin</Link>
          </div>
          <a href="https://line.me/R/ti/p/@muuhouse465" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm">
              ประเมินหน้างานฟรี
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-stone-600 hover:bg-stone-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-stone-200 bg-white px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-stone-800 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-stone-500 py-1">
              <Link href="/cleaner/dashboard" onClick={() => setIsOpen(false)}>พอร์ทัลแม่บ้าน (PWA)</Link>
              <Link href="/admin/jobs" onClick={() => setIsOpen(false)}>แอดมิน (Admin Portal)</Link>
            </div>
            <a href="https://line.me/R/ti/p/@muuhouse465" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md" className="w-full">
                แอดไลน์ @muuhouse465
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
