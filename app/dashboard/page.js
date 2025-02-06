'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import UserGrowthChart from '@/components/UserGrowthChart';
import RevenueDistributionChart from '@/components/RevenueDistributionChart';
import TopSongsChart from '@/components/TopSongsChart';
import DataTable from '@/components/DataTable';
import UserEngagement from '@/components/UserEngagement';
import GenreDistribution from '@/components/GenreDistribution';

import PlatformUsage from '@/components/PlatformUsage';
import { metrics } from '@/lib/mockData';
import {
  UsersIcon,
  UserGroupIcon,
  MusicalNoteIcon,
  CurrencyDollarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-primary p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-white/60">Track your music streaming platform's performance and user engagement.</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card
            title="Total Users"
            value={metrics.totalUsers.toLocaleString()}
            trend={8.5}
            icon={UsersIcon}
          />
          <Card
            title="Active Users"
            value={metrics.activeUsers.toLocaleString()}
            trend={12.3}
            icon={UserGroupIcon}
          />
          <Card
            title="Total Streams"
            value={metrics.totalStreams.toLocaleString()}
            trend={15.7}
            icon={MusicalNoteIcon}
          />
          <Card
            title="Revenue"
            value={`$${metrics.revenue.toLocaleString()}`}
            trend={10.2}
            icon={CurrencyDollarIcon}
          />
          <Card
            title="Top Artist"
            value={metrics.topArtist}
            icon={TrophyIcon}
            isText
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserGrowthChart />
          <RevenueDistributionChart />
        </div>

        {/* User Engagement and Genre Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserEngagement />
          <GenreDistribution />
        </div>

        {/* Platform Usage and Top Songs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PlatformUsage />
          <TopSongsChart />
        </div>

        {/* Data Table */}
        <DataTable />
      </motion.div>
    </div>
  );
} 