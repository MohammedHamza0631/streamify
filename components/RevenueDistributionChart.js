'use client';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';
import { revenueDistribution } from '@/lib/mockData';


const COLORS = ['#98E5DD', '#EEB58F'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dashboard-hover p-3 rounded-xl">
        <p className="text-white text-sm font-medium">{`${payload[0].name}: $${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

export default function RevenueDistributionChart() {
  const data = [
    { name: 'Subscriptions', value: revenueDistribution.subscriptions },
    { name: 'Advertisements', value: revenueDistribution.ads }
  ];

  return (
    <div className="bg-dashboard-card rounded-xl p-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white">
          Revenue Distribution
        </h3>
        <span className="text-xs text-white/60">Last 30 Days</span>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  stroke="transparent"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => <span className="text-white/60">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 