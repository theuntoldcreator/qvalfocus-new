import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import IndexPage from "./pages/Index";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";
import BlogPostPage from "./pages/blog/[slug]";
import CareersPage from "./pages/careers";
import JobPage from "./pages/careers/[slug]";
import ContactPage from "./pages/contact";
import ChangelogPage from "./pages/changelog";
import CustomersPage from "./pages/customers";
import GuidesPage from "./pages/guides";
import PricingPage from "./pages/pricing";
import LoginPage from "./pages/login";
import AdminLayout from "./pages/admin/layout";
import AdminDashboardPage from "./pages/admin/dashboard";
import AdminBlogsPage from "./pages/admin/blogs";
import AdminBlogCreatePage from "./pages/admin/blogs/create";
import AdminBlogEditPage from "./pages/admin/blogs/[id]/edit";
import AdminJobsPage from "./pages/admin/jobs";
import AdminJobCreatePage from "./pages/admin/jobs/create";
import AdminJobEditPage from "./pages/admin/jobs/[id]/edit";
import AdminApplicationsPage from "./pages/admin/applications";
import AdminContactsPage from "./pages/admin/contacts";
import AdminSubscribersPage from "./pages/admin/subscribers";
import NotFoundPage from "./pages/404";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="careers/:slug" element={<JobPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="changelog" element={<ChangelogPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="guides" element={<GuidesPage />} />
        <Route path="pricing" element={<PricingPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="blogs" element={<AdminBlogsPage />} />
        <Route path="blogs/create" element={<AdminBlogCreatePage />} />
        <Route path="blogs/:id/edit" element={<AdminBlogEditPage />} />
        <Route path="jobs" element={<AdminJobsPage />} />
        <Route path="jobs/create" element={<AdminJobCreatePage />} />
        <Route path="jobs/:id/edit" element={<AdminJobEditPage />} />
        <Route path="applications" element={<AdminApplicationsPage />} />
        <Route path="contacts" element={<AdminContactsPage />} />
        <Route path="subscribers" element={<AdminSubscribersPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}