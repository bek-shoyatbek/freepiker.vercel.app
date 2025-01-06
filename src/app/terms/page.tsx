import React from "react";
import { Card } from "@/components/ui/card";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Last updated: January 6, 2025
        </p>

        <Card className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to Freepiker. By accessing our website and using our
              services, you agree to these Terms of Service. Please read them
              carefully before using our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                "Service" refers to the Freepiker platform and all its features.
              </p>
              <p>
                "User" refers to any individual or entity using our Service.
              </p>
              <p>
                "Resources" refers to all downloadable content available through
                our Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p>You must be 18 years or older to use this Service.</p>
              <p>
                You are responsible for maintaining the security of your
                account.
              </p>
              <p>
                You are responsible for all activities that occur under your
                account.
              </p>
              <p>
                You must provide accurate and complete information when creating
                an account.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Subscription and Payments
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Subscription fees are billed in advance on a monthly basis.</p>
              <p>
                Subscriptions automatically renew unless cancelled before the
                renewal date.
              </p>
              <p>
                Refunds are available within 7 days of purchase if you're not
                satisfied.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Usage Rights</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Downloaded resources can be used according to the license terms.
              </p>
              <p>
                Reselling or redistributing resources is strictly prohibited.
              </p>
              <p>Attribution is not required but appreciated.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Prohibited Uses</h2>
            <div className="space-y-4 text-gray-600">
              <p>You may not use the Service for any illegal purposes.</p>
              <p>You may not share your account credentials with others.</p>
              <p>
                You may not attempt to access restricted areas of the Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We reserve the right to terminate accounts for violations of
                these terms.
              </p>
              <p>
                You can terminate your account at any time through your account
                settings.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p>We reserve the right to modify these terms at any time.</p>
              <p>Users will be notified of significant changes via email.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              9. Contact Information
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>For any questions about these Terms, please contact us at:</p>
              <p>Email: legal@freepiker.vercel.app</p>
              <p>Address: 123 Business Street, Suite 100, New York, NY 10001</p>
            </div>
          </section>
        </Card>
      </div>
    </div>
  );
};

export default TermsPage;
