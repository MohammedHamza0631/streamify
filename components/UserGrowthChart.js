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
import { userGrowth } from '@/lib/mockData';

export default function UserGrowthChart() {
  return (
    <div className="bg-dashboard-card rounded-xl p-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white">
          Listeners/year
        </h3>
        <span className="text-xs text-white/60">Last 12 Months</span>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={userGrowth}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="month" 
              stroke="rgba(255,255,255,0.6)"
              style={{
                fontSize: '0.75rem',
              }}
            />
            <YAxis
              stroke="rgba(255,255,255,0.6)"
              style={{
                fontSize: '0.75rem',
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1D1D',
                border: 'none',
                borderRadius: '0.75rem',
                color: '#fff',
              }}
            />
            <Legend 
              wrapperStyle={{
                paddingTop: '1rem',
              }}
            />
            <Line
              type="monotone"
              dataKey="totalUsers"
              name="Total Users"
              stroke="#98E5DD"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              name="Active Users"
              stroke="#EEB58F"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 