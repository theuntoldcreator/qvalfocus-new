import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react";

export default function TermsPage() {
  const lastUpdated = "January 1, 2024";

  return (
    <div className="min-h-screen">
      {/* Header and Footer are now handled by RootLayout */}
      
      <main className="pt-20 md:pt-28">
        {/* Header */}
        <section className="pb-16 bg-slate-50 dark:bg-slate-900">
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
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                Terms and conditions for using QvalFocus services
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Fair Terms</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Transparent and balanced agreements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Clear Rights</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Your rights and responsibilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Risk Management</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Limitation of liability</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Legal Compliance</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Meets regulatory requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              
              <h2>1. Acceptance of Terms</h2>
              
              <p>
                By accessing and using the QvalFocus website and services ("Services"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you and QvalFocus, Inc. ("QvalFocus," "we," "us," or "our") governing your use of our website, platform, and services.
              </p>

              <h2>2. Description of Service</h2>
              
              <p>QvalFocus provides the following services:</p>
              
              <ul>
                <li><strong>Staffing Services:</strong> Permanent, contract, and executive search placements</li>
                <li><strong>Consulting Services:</strong> Digital transformation, cloud migration, and technology consulting</li>
                <li><strong>Managed Services:</strong> End-to-end project management and dedicated team solutions</li>
                <li><strong>Platform Services:</strong> Job board, candidate profiles, and matching technology</li>
              </ul>

              <h2>3. User Accounts and Registration</h2>
              
              <h3>Account Creation</h3>
              <ul>
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must promptly notify us of any unauthorized use of your account</li>
                <li>You may only create one account per individual or organization</li>
              </ul>

              <h3>Account Responsibilities</h3>
              <ul>
                <li>You are solely responsible for all activity that occurs under your account</li>
                <li>You must keep your profile information current and accurate</li>
                <li>You may not share your account with others or allow others to use your account</li>
                <li>You may not create false identities or impersonate others</li>
              </ul>

              <h2>4. User Conduct and Prohibited Activities</h2>
              
              <p>When using our services, you agree not to:</p>
              
              <ul>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Post false, misleading, or inaccurate information</li>
                <li>Upload malicious code, viruses, or other harmful software</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Use automated tools to scrape data from our platform</li>
                <li>Harass, discriminate against, or abuse other users</li>
                <li>Engage in spam or unsolicited communications</li>
                <li>Use the service for any illegal or unauthorized purpose</li>
              </ul>

              <h2>5. Client Terms</h2>
              
              <h3>Service Agreements</h3>
              <p>
                Specific terms for staffing and consulting services will be outlined in separate service agreements. These Terms serve as the general framework for all interactions.
              </p>

              <h3>Payment Terms</h3>
              <ul>
                <li>Fees are due according to the payment terms specified in your service agreement</li>
                <li>Late payments may incur additional charges and interest</li>
                <li>You are responsible for all taxes related to services provided</li>
                <li>Disputed charges must be reported within 30 days of billing</li>
              </ul>

              <h3>Placement Guarantees</h3>
              <ul>
                <li>Replacement guarantees vary by service type and are specified in service agreements</li>
                <li>Guarantees are subject to compliance with our recommended onboarding processes</li>
                <li>Claims must be made in writing within the guarantee period</li>
              </ul>

              <h2>6. Candidate Terms</h2>
              
              <h3>Profile Accuracy</h3>
              <ul>
                <li>You must provide accurate information about your skills, experience, and qualifications</li>
                <li>False information may result in disqualification from opportunities</li>
                <li>You must notify us of any changes to your employment status or availability</li>
              </ul>

              <h3>Confidentiality</h3>
              <ul>
                <li>You may be exposed to confidential client information during the placement process</li>
                <li>You agree to maintain strict confidentiality of all client information</li>
                <li>Breach of confidentiality may result in legal action and account termination</li>
              </ul>

              <h2>7. Intellectual Property Rights</h2>
              
              <h3>QvalFocus IP</h3>
              <ul>
                <li>All website content, trademarks, and technology are owned by QvalFocus</li>
                <li>You may not copy, distribute, or create derivative works without permission</li>
                <li>Our algorithms and matching technology are proprietary and confidential</li>
              </ul>

              <h3>User Content</h3>
              <ul>
                <li>You retain ownership of content you provide (resumes, profiles, etc.)</li>
                <li>You grant us a license to use your content for service delivery purposes</li>
                <li>You represent that you have the right to provide all content you upload</li>
              </ul>

              <h2>8. Privacy and Data Protection</h2>
              
              <p>
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of your information as outlined in our Privacy Policy.
              </p>

              <h2>9. Service Availability and Modifications</h2>
              
              <ul>
                <li>We strive to maintain service availability but cannot guarantee uninterrupted access</li>
                <li>We may modify, suspend, or discontinue services at any time with reasonable notice</li>
                <li>Scheduled maintenance will be announced in advance when possible</li>
                <li>We are not liable for temporary unavailability of services</li>
              </ul>

              <h2>10. Disclaimers and Limitations of Liability</h2>
              
              <h3>Service Disclaimers</h3>
              <ul>
                <li>Services are provided "as is" without warranties of any kind</li>
                <li>We do not guarantee specific outcomes or placement success</li>
                <li>We are not responsible for the actions of clients or candidates</li>
                <li>Employment decisions are made solely by clients</li>
              </ul>

              <h3>Limitation of Liability</h3>
              <p>
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, QVALFOCUS'S TOTAL LIABILITY TO YOU FOR ANY DAMAGES ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO QVALFOCUS IN THE 12 MONTHS PRECEDING THE CLAIM.</strong>
              </p>

              <p>
                We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
              </p>

              <h2>11. Indemnification</h2>
              
              <p>
                You agree to indemnify and hold harmless QvalFocus, its officers, directors, employees, and agents from any claims, damages, or expenses arising from:
              </p>
              
              <ul>
                <li>Your violation of these Terms</li>
                <li>Your use of the services</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you provide or actions you take</li>
              </ul>

              <h2>12. Termination</h2>
              
              <h3>Termination by You</h3>
              <ul>
                <li>You may terminate your account at any time by contacting us</li>
                <li>Certain obligations may survive termination</li>
                <li>Outstanding payments remain due after termination</li>
              </ul>

              <h3>Termination by Us</h3>
              <ul>
                <li>We may terminate accounts for violation of these Terms</li>
                <li>We may suspend services for non-payment</li>
                <li>We provide notice when reasonably possible</li>
                <li>Immediate termination may occur for serious violations</li>
              </ul>

              <h2>13. Dispute Resolution</h2>
              
              <h3>Governing Law</h3>
              <p>
                These Terms are governed by the laws of the State of California, without regard to conflict of law provisions.
              </p>

              <h3>Arbitration</h3>
              <p>
                Most disputes can be resolved informally. For disputes that cannot be resolved through negotiation, both parties agree to binding arbitration under the rules of the American Arbitration Association, except for:
              </p>
              <ul>
                <li>Claims for intellectual property infringement</li>
                <li>Claims for breach of confidentiality</li>
                <li>Claims for seeking injunctive relief</li>
              </ul>

              <h3>Class Action Waiver</h3>
              <p>
                You agree that any arbitration or legal proceeding shall be conducted on an individual basis and not as part of a class action or representative action.
              </p>

              <h2>14. General Provisions</h2>
              
              <h3>Severability</h3>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
              </p>

              <h3>Entire Agreement</h3>
              <p>
                These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and QvalFocus.
              </p>

              <h3>Assignment</h3>
              <p>
                You may not assign your rights under these Terms without our written consent. We may assign our rights to any affiliate or successor entity.
              </p>

              <h3>Waiver</h3>
              <p>
                Our failure to enforce any provision of these Terms does not constitute a waiver of our right to enforce such provision in the future.
              </p>

              <h2>15. Changes to Terms</h2>
              
              <p>
                We may modify these Terms from time to time. When we make material changes:
              </p>
              
              <ul>
                <li>We will provide at least 30 days' notice</li>
                <li>Notice will be provided via email or website posting</li>
                <li>Continued use of services constitutes acceptance of changes</li>
                <li>You may terminate your account if you disagree with changes</li>
              </ul>

              <h2>16. Contact Information</h2>
              
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              
              <div className="glass dark:glass-dark rounded-xl p-6 my-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Legal Department</h4>
                    <p>Email: legal@qvalfocus.com</p>
                    <p>Phone: +1 (415) 555-0188</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Mailing Address</h4>
                    <p>QvalFocus Legal Team<br />
                    123 Market Street, Suite 500<br />
                    San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <p>
                We will respond to legal inquiries within 10 business days of receipt.
              </p>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Our legal team is available to clarify any aspects of these terms and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/contact">Contact Legal Team</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/legal/privacy">View Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}