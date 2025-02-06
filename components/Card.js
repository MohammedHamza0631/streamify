'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';

const Card = memo(function Card({ title, value, trend, icon: Icon, isText = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-dashboard-card rounded-xl p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent-mint/10 rounded-lg">
            <Icon className="w-5 h-5 text-accent-mint" />
          </div>
          <span className="text-sm text-white/60">{title}</span>
        </div>
        {trend !== undefined && (
          <span className={`text-sm ${trend >= 0 ? 'text-accent-mint' : 'text-accent-coral'}`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <p className={`text-2xl font-semibold text-white ${isText ? 'truncate' : ''}`}>
        {value}
      </p>
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card; 