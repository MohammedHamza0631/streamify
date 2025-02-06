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
    <div className="bg-dashboard-card rounded-xl p-4 transition-all duration-200 hover:bg-dashboard-hover">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-white/60">
          {title}
        </h3>
        {Icon && (
          <Icon className="w-5 h-5 text-accent-mint" />
        )}
      </div>
      <div className="flex items-baseline">
        <p className="text-xl font-semibold text-white">
          {typeof value === 'number' 
            ? new Intl.NumberFormat().format(count)
            : value}
        </p>
        {trend && (
          <span className={`ml-2 text-sm font-medium ${
            trend > 0 
              ? 'text-accent-mint' 
              : 'text-accent-coral'
          }`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
    </div>
  );
} 