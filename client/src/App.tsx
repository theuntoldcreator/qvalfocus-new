import { Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/theme-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { queryClient } from "./lib/queryClient";
import ScrollToTop from "@/components/scroll-to-top";

// Layouts
import AdminDashboardLayout from "@/components/layout/admin-dashboard-layout";
import ProtectedRoute from "@/components/protected-route";

// Public Pages
import Home from "@/pages/home";
import StaffingSolutionPage from "@/pages/services/staffing-solution";
import ProjectSolutionPage from "@/pages/services/project-solution";
import IndustriesPage from "@/pages/industries";
import IndustryPage from "@/pages/industry/[slug]";
import JobsPage from "@/pages/jobs";
import JobPage from "@/pages/job/[slug]";
import BlogsPage from "@/pages/blogs";
import BlogPostPage from "@/pages/blog/[slug]";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import PrivacyPage from "@/pages/legal/privacy";
import TermsPage from "@/pages/legal/terms";
import NotFound from "@/pages/not-found";

// Admin Pages
import AdminLoginPage from "@/pages/admin/login";
import { DashboardOverview } from "@/components/admin/dashboard-overview";
import { JobsManagement } from "@/components/admin/jobs-management";
import { ContactsManagement } from "@/components/admin/contacts-management";
import NewJobPage from "@/pages/admin/new-job";

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services/staffing-solution" element={<StaffingSolutionPage />} />
        <Route path="/services/project-solution" element={<ProjectSolutionPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:slug" element={<JobPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogPostPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal/privacy" element={<PrivacyPage />} />
        <Route path="/legal/terms" element={<TermsPage />} />
        
        {/* Admin Auth */}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Protected Admin Segment */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardOverview />} />
          <Route path="jobs" element={<JobsManagement />} />
          <Route path="jobs/new" element={<NewJobPage />} />
          <Route path="contacts" element={<ContactsManagement />} />
        </Route>
        
        {/* Redirect for base /admin path */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <AppRoutes />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;