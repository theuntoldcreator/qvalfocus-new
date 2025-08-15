import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "January 1, 2024";

  return (
    <div className="min-h-screen">
      <Header />
      
      <main> {/* Removed pt-20 */}
        {/* Header */}
        <section className="pt-20 md:pt-28 pb-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <Badge className="mb-6">Legal</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                How we collect, use, and protect your personal information
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Highlights */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Data Protection</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Industry-standard security measures</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Transparency</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Clear data usage policies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">User Control</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Manage your data preferences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">GDPR Compliant</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Meets international standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              
              <h2>1. Information We Collect</h2>
              
              <h3>Personal Information</h3>
              <p>
                When you use our services, we may collect the following types of personal information:
              </p>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Professional Information:</strong> Resume, work history, skills, certifications, salary expectations</li>
                <li><strong>Company Information:</strong> Company name, job requirements, hiring needs, budget</li>
                <li><strong>Account Information:</strong> Username, password, profile preferences</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                We automatically collect certain information when you visit our website:
              </p>
              <ul>
                <li><strong>Usage Data:</strong> Pages visited, time spent on site, click patterns</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                <li><strong>Cookies and Tracking:</strong> Information stored through cookies and similar technologies</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              
              <p>We use the information we collect for the following purposes:</p>
              
              <h3>Service Delivery</h3>
              <ul>
                <li>Match candidates with job opportunities</li>
                <li>Facilitate communication between clients and candidates</li>
                <li>Provide consulting and managed services</li>
                <li>Process job applications and placements</li>
              </ul>

              <h3>Communication</h3>
              <ul>
                <li>Send job alerts and opportunities</li>
                <li>Provide updates on application status</li>
                <li>Share industry insights and newsletters</li>
                <li>Respond to inquiries and support requests</li>
              </ul>

              <h3>Improvement and Analytics</h3>
              <ul>
                <li>Analyze website usage and performance</li>
                <li>Improve our services and user experience</li>
                <li>Conduct market research and analysis</li>
                <li>Develop new features and services</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              
              <p>We may share your information in the following circumstances:</p>

              <h3>With Clients and Candidates</h3>
              <ul>
                <li>Share candidate profiles with potential employers (with consent)</li>
                <li>Provide client company information to candidates</li>
                <li>Facilitate interviews and hiring processes</li>
              </ul>

              <h3>Service Providers</h3>
              <ul>
                <li>Third-party vendors who assist in service delivery</li>
                <li>Background check and verification services</li>
                <li>Technology and infrastructure providers</li>
                <li>Payment processing services</li>
              </ul>

              <h3>Legal Requirements</h3>
              <ul>
                <li>Comply with legal obligations and court orders</li>
                <li>Protect our rights and prevent fraud</li>
                <li>Respond to law enforcement requests</li>
                <li>Enforce our terms of service</li>
              </ul>

              <h2>4. Data Security</h2>
              
              <p>
                We implement industry-standard security measures to protect your personal information:
              </p>
              
              <ul>
                <li><strong>Encryption:</strong> Data is encrypted in transit and at rest using industry-standard protocols</li>
                <li><strong>Access Controls:</strong> Limited access to personal information based on job requirements</li>
                <li><strong>Security Monitoring:</strong> Continuous monitoring for unauthorized access and security threats</li>
                <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                <li><strong>Employee Training:</strong> Regular privacy and security training for all staff members</li>
              </ul>

              <h2>5. Data Retention</h2>
              
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy:
              </p>
              
              <ul>
                <li><strong>Active Accounts:</strong> Information retained while account is active and for reasonable period after</li>
                <li><strong>Candidate Profiles:</strong> Typically retained for 3-5 years to facilitate future opportunities</li>
                <li><strong>Client Information:</strong> Retained for duration of business relationship and as required by law</li>
                <li><strong>Legal Requirements:</strong> Some information may be retained longer to comply with legal obligations</li>
              </ul>

              <h2>6. Your Rights and Choices</h2>
              
              <p>You have the following rights regarding your personal information:</p>

              <h3>Access and Portability</h3>
              <ul>
                <li>Request a copy of personal information we hold about you</li>
                <li>Receive your data in a portable format</li>
                <li>Verify the accuracy of your information</li>
              </ul>

              <h3>Correction and Updates</h3>
              <ul>
                <li>Update or correct inaccurate information</li>
                <li>Complete incomplete information</li>
                <li>Modify your profile and preferences</li>
              </ul>

              <h3>Deletion and Restriction</h3>
              <ul>
                <li>Request deletion of your personal information</li>
                <li>Restrict processing of your data</li>
                <li>Withdraw consent for data processing</li>
              </ul>

              <h3>Communication Preferences</h3>
              <ul>
                <li>Opt out of marketing communications</li>
                <li>Adjust notification settings</li>
                <li>Unsubscribe from newsletters and job alerts</li>
              </ul>

              <h2>7. Cookies and Tracking Technologies</h2>
              
              <p>
                We use cookies and similar technologies to enhance your experience on our website:
              </p>
              
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver personalized advertisements</li>
              </ul>

              <p>
                You can control cookie settings through your browser preferences, though disabling certain cookies may affect website functionality.
              </p>

              <h2>8. International Data Transfers</h2>
              
              <p>
                As a global company, we may transfer your personal information across borders:
              </p>
              
              <ul>
                <li>Transfers are made only to countries with adequate data protection laws</li>
                <li>We use standard contractual clauses and other safeguards</li>
                <li>Data is protected according to this privacy policy regardless of location</li>
              </ul>

              <h2>9. Children's Privacy</h2>
              
              <p>
                Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>

              <h2>10. Changes to This Privacy Policy</h2>
              
              <p>
                We may update this privacy policy from time to time. When we make changes:
              </p>
              
              <ul>
                <li>We will post the updated policy on our website</li>
                <li>We will update the "Last Updated" date</li>
                <li>For material changes, we will provide additional notice</li>
                <li>Your continued use of our services constitutes acceptance of changes</li>
              </ul>

              <h2>11. Contact Us</h2>
              
              <p>
                If you have questions about this privacy policy or our data practices, please contact us:
              </p>
              
              <div className="glass dark:glass-dark rounded-xl p-6 my-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Data Protection Officer</h4>
                    <p>Email: privacy@qvalfocus.com</p>
                    <p>Phone: +1 (415) 555-0199</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Mailing Address</h4>
                    <p>QvalFocus Privacy Team<br />
                    123 Market Street, Suite 500<br />
                    San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <p>
                We will respond to your inquiry within 30 days of receipt. For urgent matters, please call our privacy hotline.
              </p>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Our privacy team is here to help you understand and manage your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/contact">Contact Privacy Team</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/legal/terms">View Terms of Service</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}