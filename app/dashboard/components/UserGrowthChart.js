'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { userGrowth } from '../../lib/mockData';

export default function UserGrowthChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
        User Growth
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={userGrowth}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
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
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '0.375rem',
                color: '#F3F4F6',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalUsers"
              name="Total Users"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              name="Active Users"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 