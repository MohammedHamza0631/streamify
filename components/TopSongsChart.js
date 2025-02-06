'use client';

import { useMemo, memo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { motion } from 'framer-motion';
import { topSongs } from '../lib/mockData';

const CustomTooltip = memo(({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dashboard-hover p-3 rounded-xl">
        <p className="text-white text-sm font-medium">{label}</p>
        <p className="text-accent-mint text-sm">
          {`${payload[0].value.toLocaleString()} streams`}
        </p>
      </div>
    );
  }
  return null;
});

CustomTooltip.displayName = 'CustomTooltip';

const SongCard = memo(({ song, index }) => (
  <div
    key={song.name}
    className="bg-dashboard-hover rounded-lg p-2 text-center"
  >
    <p className="text-xs text-white/60 truncate">{song.artist}</p>
    <p className="text-sm text-white font-medium truncate">{song.name}</p>
    <p className={`text-xs ${song.trend > 0 ? 'text-accent-mint' : 'text-accent-coral'}`}>
      {song.trend > 0 ? '+' : ''}{song.trend}%
    </p>
  </div>
));

SongCard.displayName = 'SongCard';

function TopSongsChart() {
  // Memoize chart data formatting
  const chartData = useMemo(() => topSongs, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dashboard-card rounded-xl p-4 h-full"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white">
          Top 5 Streamed Songs
        </h3>
        <span className="text-xs text-white/60">Last 30 Days</span>
      </div>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 20,
            }}
            barSize={32}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey="name"
              stroke="rgba(255,255,255,0.6)"
              style={{
                fontSize: '0.75rem',
              }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              stroke="rgba(255,255,255,0.6)"
              style={{
                fontSize: '0.75rem',
              }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="streams"
              fill="#98E5DD"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-4">
        {chartData.map((song, index) => (
          <SongCard key={song.name} song={song} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default memo(TopSongsChart); 