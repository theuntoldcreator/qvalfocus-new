"use client";

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { Sidebar } from './Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

const mobileNavLinks = [
  { to: "/", label: "Recruitment Home" },
  { to: "/about", label: "About Us" },
  { to: "/services/staffing-solution", label: "Our Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blogs", label: "News & Insights" },
  { to: "/contact", label: "Contact Us" },
];

export function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // On desktop, the sidebar is always visible, so `isSidebarOpen` only controls the mobile overlay.
  // The main content needs to be pushed over by the sidebar's width.
  const mainContentClasses = isMobile ? "" : "md:ml-64"; // Adjust margin for desktop sidebar width

  return (
    <div className="flex min-h-screen bg-white dark:bg-slate-900">
      {/* Desktop Sidebar (always visible on md and up) */}
      {!isMobile && (
        <Sidebar isOpen={true} onClose={() => {}} navLinks={mobileNavLinks} />
      )}

      {/* Mobile Sidebar (overlay, controlled by isOpen) */}
      {isMobile && (
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} navLinks={mobileNavLinks} />
      )}

      <div className={`flex-1 flex flex-col ${mainContentClasses}`}>
        <Header onToggleMobileMenu={toggleSidebar} />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}