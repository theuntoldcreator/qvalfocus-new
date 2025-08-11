import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/theme-provider";
import { AuthProvider } from "@/providers/auth-provider"; // Re-added AuthProvider
import { ProtectedRoute } from "@/components/protected-route"; // Re-added ProtectedRoute

import NotFound from "@/pages/not-found";
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
import AdminLoginPage from "@/pages/admin/login"; // Re-added AdminLoginPage
import AdminDashboardPage from "@/pages/admin/dashboard"; // Re-added AdminDashboardPage

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/staffing-solution" component={StaffingSolutionPage} />
      <Route path="/services/project-solution" component={ProjectSolutionPage} />
      <Route path="/industries" component={IndustriesPage} />
      <Route path="/industries/:slug" component={IndustryPage} />
      <Route path="/jobs" component={JobsPage} />
      <Route path="/jobs/:slug" component={JobPage} />
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/blogs/:slug" component={BlogPostPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/legal/privacy" component={PrivacyPage} />
      <Route path="/legal/terms" component={TermsPage} />
      
      {/* Admin Routes */}
      <Route path="/admin/login" component={AdminLoginPage} />
      <Route path="/admin/dashboard/:rest*"> {/* Catch-all for admin dashboard and its sub-routes */}
        <ProtectedRoute>
          <AdminDashboardPage />
        </ProtectedRoute>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider> {/* AuthProvider re-added */}
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;