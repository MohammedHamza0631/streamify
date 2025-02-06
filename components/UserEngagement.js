'use client';

import { motion } from 'framer-motion';
import { ClockIcon, MusicalNoteIcon, ListBulletIcon, ShareIcon } from '@heroicons/react/24/outline';
import { userEngagement } from '../lib/mockData';

const MetricCard = ({ icon: Icon, label, value, unit }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-dashboard-hover p-4 rounded-xl min-w-[140px]"
  >
    <div className="flex items-start gap-3">
      <div className="p-2 bg-accent-mint/10 rounded-lg shrink-0">
        <Icon className="w-5 h-5 text-accent-mint" />
      </div>
      <div className="min-w-0">
        <p className="text-sm text-white/60 truncate">{label}</p>
        <div className="flex items-baseline gap-1">
          <p className="text-lg font-semibold text-white truncate">{value}</p>
          <span className="text-sm text-white/60 shrink-0">{unit}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function UserEngagement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dashboard-card rounded-xl p-4"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white">User Engagement</h3>
        <span className="text-xs text-white/60">Last 30 Days</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          icon={ClockIcon}
          label="Avg. Session Duration"
          value={userEngagement.averageSessionDuration}
          unit="min"
        />
        <MetricCard
          icon={MusicalNoteIcon}
          label="Songs per Session"
          value={userEngagement.songsPerSession}
          unit="songs"
        />
        <MetricCard
          icon={ListBulletIcon}
          label="Playlists per User"
          value={userEngagement.playlistsPerUser}
          unit="playlists"
        />
        <MetricCard
          icon={ShareIcon}
          label="Share Rate"
          value={userEngagement.shareRate}
          unit="%"
        />
      </div>
    </motion.div>
  );
} 