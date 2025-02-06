'use client';

import { useEffect, useState } from 'react';

export default function Card({ title, value, icon: Icon, trend }) {
  const [count, setCount] = useState(0);

  // Animate the counter
  useEffect(() => {
    const duration = 1000; // 1 second animation
    const steps = 20;
    const stepValue = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      if (currentStep === steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(stepValue * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-200 hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
        {Icon && (
          <Icon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        )}
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          {typeof value === 'number' 
            ? new Intl.NumberFormat().format(count)
            : value}
        </p>
        {trend && (
          <span className={`ml-2 text-sm font-medium ${
            trend > 0 
              ? 'text-green-600 dark:text-green-500' 
              : 'text-red-600 dark:text-red-500'
          }`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
    </div>
  );
} 