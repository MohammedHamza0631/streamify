'use client';

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { genreDistribution } from '@/lib/mockData';

const COLORS = ['#98E5DD', '#EEB58F', '#B8A1E3', '#F7D794', '#88D1F1'];

export default function GenreDistribution() {
  const data = Object.entries(genreDistribution).map(([name, value]) => ({
    name,
    value
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dashboard-hover p-2 rounded-lg border border-white/10">
          <p className="text-white text-sm">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dashboard-card rounded-xl p-4"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white">Genre Distribution</h3>
        <span className="text-xs text-white/60">By Stream Count</span>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  className="transition-all duration-300 hover:opacity-80"
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {data.map((genre, index) => (
          <motion.div
            key={genre.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dashboard-hover rounded-lg p-3"
          >
            <div className="flex items-center gap-2 mb-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-sm text-white">{genre.name}</span>
            </div>
            <p className="text-lg font-semibold text-white">{genre.value}%</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 