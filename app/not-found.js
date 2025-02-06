'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
          className="flex justify-center mb-8"
        >
          <div className="w-32 h-32 bg-accent-mint/10 rounded-full flex items-center justify-center">
            <span className="text-6xl font-bold text-accent-mint">404</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Page Not Found
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/60 mb-8 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-mint text-primary rounded-lg hover:bg-accent-mint/90 transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 