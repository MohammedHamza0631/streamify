'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { HomeIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/dashboard', label: 'Dashboard', icon: ChartBarIcon },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent-mint rounded-full"></div>
            <span className="text-white font-medium hidden sm:block">Streamify</span>
          </div>

          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-dashboard-hover text-accent-mint'
                      : 'text-white/60 hover:bg-dashboard-hover hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="hidden sm:block">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 