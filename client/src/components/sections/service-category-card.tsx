import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import React from "react";

interface ServiceCategoryCardProps {
  title: string;
  initialImage: string;
  hoverImage: string;
  iconName: keyof typeof LucideIcons;
  link: string;
}

export function ServiceCategoryCard({
  title,
  initialImage,
  hoverImage,
  iconName,
  link,
}: ServiceCategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = LucideIcons[iconName] as React.ElementType; 

  return (
    <Link
      to={link}
      className="relative block rounded-2xl overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-64">
        <img
          src={initialImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <AnimatePresence>
          {isHovered && (
            <motion.img
              src={hoverImage}
              alt={`${title} hover`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Content Area */}
      <div className="p-6 bg-white dark:bg-slate-800 flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
          {Icon && <Icon className="w-5 h-5" />}
        </div>
      </div>
    </Link>
  );
}