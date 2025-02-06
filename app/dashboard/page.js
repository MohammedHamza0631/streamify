'use client';

import { useEffect, useState } from 'react';
import Card from './components/Card';
import UserGrowthChart from './components/UserGrowthChart';
import RevenueDistributionChart from './components/RevenueDistributionChart';
import TopSongsChart from './components/TopSongsChart';
import DataTable from './components/DataTable';
import { metrics } from '../lib/mockData';
import { 
  UsersIcon, 
  UserGroupIcon, 
  PlayIcon,
  CurrencyDollarIcon,
  MusicalNoteIcon 
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Streamify Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Music Streaming Analytics Overview
          </p>
        </div>
        
        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-8">
          <Card
            title="Total Users"
            value={metrics.totalUsers}
            icon={UsersIcon}
            trend={5}
          />
          <Card
            title="Active Users"
            value={metrics.activeUsers}
            icon={UserGroupIcon}
            trend={2}
          />
          <Card
            title="Total Streams"
            value={metrics.totalStreams}
            icon={PlayIcon}
            trend={8}
          />
          <Card
            title="Revenue"
            value={`$${metrics.revenue.toLocaleString()}`}
            icon={CurrencyDollarIcon}
            trend={3}
          />
          <Card
            title="Top Artist"
            value={metrics.topArtist}
            icon={MusicalNoteIcon}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <UserGrowthChart />
          <div className="grid grid-cols-1 gap-8">
            <RevenueDistributionChart />
            <TopSongsChart />
          </div>
        </div>

        {/* Data Table Section */}
        <DataTable />
      </div>
    </main>
  );
} 