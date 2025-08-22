import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroStatsCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  bgColor: string;
  textColor: string;
  iconColor: string;
}

export function HeroStatsCard({ icon: Icon, value, label, bgColor, textColor, iconColor }: HeroStatsCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-xl p-6 flex flex-col items-center justify-center text-center",
        bgColor,
        textColor
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", iconColor)}>
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-4xl font-bold mb-1">{value}</p>
      <p className="text-sm">{label}</p>
    </motion.div>
  );
}