'use client';

import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, ComputerDesktopIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { platformUsage } from '@/lib/mockData';

const PlatformCard = ({ platform, percentage, icon: Icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-dashboard-hover rounded-xl p-4"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`p-2 ${color} rounded-lg`}>
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span className="text-white font-medium">{platform}</span>
      </div>
      <span className="text-lg font-semibold text-white">{percentage}%</span>
    </div>
    <div className="h-2 bg-dashboard-card rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1 }}
        className={`h-full ${color}`}
      />
    </div>
  </motion.div>
);

export default function PlatformUsage() {
  const platforms = [
    {
      name: "Mobile App",
      icon: DevicePhoneMobileIcon,
      color: "bg-accent-mint",
      percentage: platformUsage["Mobile App"]
    },
    {
      name: "Web Player",
      icon: GlobeAltIcon,
      color: "bg-accent-coral",
      percentage: platformUsage["Web Player"]
    },
    {
      name: "Desktop App",
      icon: ComputerDesktopIcon,
      color: "bg-purple-500",
      percentage: platformUsage["Desktop App"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dashboard-card rounded-xl p-4"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white">Platform Usage</h3>
        <span className="text-xs text-white/60">Last 30 Days</span>
      </div>

      <div className="space-y-4">
        {platforms.map((platform, index) => (
          <PlatformCard
            key={platform.name}
            platform={platform.name}
            percentage={platform.percentage}
            icon={platform.icon}
            color={platform.color}
          />
        ))}
      </div>

      <div className="mt-6 p-4 bg-dashboard-hover rounded-xl">
        <h4 className="text-sm font-medium text-white mb-2">Quick Stats</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-white/60">Most Active Platform</p>
            <p className="text-lg font-semibold text-white">Mobile App</p>
          </div>
          <div>
            <p className="text-sm text-white/60">Platform Growth</p>
            <p className="text-lg font-semibold text-accent-mint">+12.5%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 