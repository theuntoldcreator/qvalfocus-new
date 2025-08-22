import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { AuthProvider } from "./providers/auth-provider";
import { ThemeProvider } from "./providers/theme-provider";
import ScrollToTop from "./components/scroll-to-top";
import { Toaster } from "./components/ui/toaster";

// Layout Components
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { MobileNav } from "./components/layout/mobile-nav"; // Import MobileNav

// Pages
import Home from "./pages/home";
import AboutPage from "./pages/about";
import JobsPage from "./pages/jobs";
import JobPage from "./pages/job/[slug]";
import ContactPage from "./pages/contact";
import StaffingSolutionPage from "./pages/services/staffing-solution";
import ProjectSolutionPage from "./pages/services/project-solution";
import IndustriesPage from "./pages/industries";
import IndustryPage from "./pages/industry/[slug]";
import BlogsPage from "./pages/blogs";
import BlogPostPage from "./pages/blog/[slug]";
import PrivacyPage from "./pages/legal/privacy";
import TermsPage from "./pages/legal/terms";
import AdminLoginPage from "./pages/admin/login";
import AdminRegisterPage from "./pages/admin/register";
import NewJobPage from "./pages/admin/new-job";
import EditJobPage from "./pages/admin/edit-job";
import NotFound from "./pages/pages/not-found"; // Corrected path
import CaseStudiesPage from "./pages/case-studies";
import ChangelogPage from "./pages/changelog";
import CustomersPage from "./pages/customers";
import GuidesPage from "./pages/guides";
import PricingPage from "./pages/pricing";

// Admin Components
import AdminDashboardLayout from "./components/layout/admin-dashboard-layout";
import ProtectedRoute from "./components/protected-route";
import { DashboardOverview } from "./components/admin/dashboard-overview";
import { JobsManagement } from "./components/admin/jobs-management";
import { ApplicationsManagement } from "./components/admin/applications-management";
import { ContactsManagement } from "./components/admin/contacts-management";
import { NewsletterManagement } from "./components/admin/newsletter-management";

const publicNavLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services/staffing-solution", label: "Staffing Solutions" },
  { to: "/services/project-solution", label: "Project Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/jobs", label: "Careers" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/changelog", label: "Changelog" },
  { to: "/customers", label: "Customers" },
  { to: "/guides", label: "Guides" },
  { to: "/pricing", label: "Pricing" },
  { to: "/legal/privacy", label: "Privacy Policy" },
  { to: "/legal/terms", label: "Terms of Service" },
];

const RootLayout = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Header onToggleMobileMenu={toggleMobileNav} />
      <MobileNav isOpen={isMobileNavOpen} onClose={toggleMobileNav} navLinks={publicNavLinks} />
      <Outlet />
      <Toaster />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/jobs", element: <JobsPage /> },
      { path: "/jobs/:slug", element: <JobPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/services/staffing-solution", element: <StaffingSolutionPage /> },
      { path: "/services/project-solution", element: <ProjectSolutionPage /> },
      { path: "/industries", element: <IndustriesPage /> },
      { path: "/industries/:slug", element: <IndustryPage /> },
      { path: "/blogs", element: <BlogsPage /> },
      { path: "/blogs/:slug", element: <BlogPostPage /> },
      { path: "/legal/privacy", element: <PrivacyPage /> },
      { path: "/legal/terms", element: <TermsPage /> },
      { path: "/case-studies", element: <CaseStudiesPage /> },
      { path: "/changelog", element: <ChangelogPage /> },
      { path: "/customers", element: <CustomersPage /> },
      { path: "/guides", element: <GuidesPage /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/admin/login", element: <AdminLoginPage /> },
      { path: "/admin/register", element: <AdminRegisterPage /> },
      {
        path: "/admin/dashboard",
        element: (
          <ProtectedRoute>
            <AdminDashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <DashboardOverview /> },
          { path: "jobs", element: <JobsManagement /> },
          { path: "jobs/new", element: <NewJobPage /> },
          { path: "jobs/edit/:slug", element: <EditJobPage /> },
          { path: "applications", element: <ApplicationsManagement /> },
          { path: "contacts", element: <ContactsManagement /> },
          { path: "newsletter", element: <NewsletterManagement /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;