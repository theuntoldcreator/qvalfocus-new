import { Switch, Route, useLocation } from "wouter"; // Import useLocation
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/theme-provider";
import { useEffect } from "react"; // Import useEffect

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

function Router() {
  const [location] = useLocation(); // Get current location

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]); // Re-run effect when location changes

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
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;