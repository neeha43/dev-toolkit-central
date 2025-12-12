import { Link } from "react-router-dom";
import { ArrowLeft, Info, Zap, Shield, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
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
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <Info className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">About DevTools</h1>
          </div>

          <div className="space-y-8 text-muted-foreground">
            <section className="space-y-4">
              <p className="text-lg">
                DevTools is a comprehensive collection of free online developer utilities designed to make your coding life easier. Whether you're formatting JSON, encoding URLs, testing regex patterns, or converting timestamps, we've got you covered.
              </p>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Fast & Efficient</h3>
                <p className="text-sm">
                  All tools run directly in your browser with no server processing, ensuring lightning-fast performance.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Privacy First</h3>
                <p className="text-sm">
                  Your data never leaves your browser. We don't store, log, or transmit any information you enter.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Works Offline</h3>
                <p className="text-sm">
                  Once loaded, most tools work without an internet connection, perfect for on-the-go development.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Our Tools</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  JSON Formatter & Validator
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Base64 Encoder/Decoder
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  URL Encoder/Decoder
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Regex Tester
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  UUID Generator
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Color Picker & Converter
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  HTML/CSS/JS Beautifiers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Timestamp Converter
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Our Mission</h2>
              <p>
                We believe that essential developer tools should be free, fast, and respect your privacy. Our mission is to provide a reliable, ad-supported platform where developers can access the utilities they need without compromising their data or workflow.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Get in Touch</h2>
              <p>
                Have suggestions, feedback, or found a bug? We'd love to hear from you! Visit our <Link to="/contact" className="text-primary hover:underline">Contact page</Link> to get in touch.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
