'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { topSongs } from '../../lib/mockData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 p-3 rounded-lg shadow">
        <p className="text-white text-sm font-medium">{label}</p>
        <p className="text-blue-400 text-sm">
          {`${payload[0].value.toLocaleString()} streams`}
        </p>
      </div>
    );
  }
  return null;
};

export default function TopSongsChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
        Top 5 Streamed Songs
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={topSongs}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              stroke="#6B7280"
              style={{
                fontSize: '0.875rem',
              }}
            />
            <YAxis
              stroke="#6B7280"
              style={{
                fontSize: '0.875rem',
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="streams"
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 