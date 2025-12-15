import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { privacyPageSEO } from "@/lib/seoData";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={privacyPageSEO.metaTitle}
        description={privacyPageSEO.metaDescription}
        canonicalPath={privacyPageSEO.canonicalPath}
        keywords={privacyPageSEO.keywords}
      />

      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, hsl(187, 90%, 51%, 0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative">
        <header className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to DevTools
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <article>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
                <p>
                  Welcome to DevTools. We are committed to protecting your privacy and ensuring you have a positive experience on our website. This policy outlines our data handling practices.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
                <p>
                  DevTools is designed with privacy in mind. Our tools run entirely in your browser, which means:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not collect, store, or transmit any data you input into our tools</li>
                  <li>All processing happens locally on your device</li>
                  <li>No personal information is required to use our services</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Cookies and Tracking</h2>
                <p>
                  We may use cookies and similar tracking technologies to improve your browsing experience. These may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand how visitors interact with our website</li>
                  <li>Advertising cookies from third-party services like Google AdSense</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Third-Party Services</h2>
                <p>
                  We may use third-party services that collect information used to identify you. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics - for website traffic analysis</li>
                  <li>Google AdSense - for displaying advertisements</li>
                </ul>
                <p>
                  These services have their own privacy policies governing the use of your information.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Data Security</h2>
                <p>
                  Since we don't collect or store your data, there is minimal risk of data breaches affecting your personal information through our tools. However, we recommend using secure connections (HTTPS) when accessing our website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access any personal data we hold about you</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of analytics and advertising cookies</li>
                  <li>Contact us with any privacy concerns</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
                </p>
              </section>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
