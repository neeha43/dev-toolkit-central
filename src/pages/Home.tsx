import React from "react";
import { Helmet } from "react-helmet-async";
import { tools } from "@/features/tools/tools.config";
import Sidebar from "@/components/layout/Sidebar";
import ToolsGrid from "@/components/common/ToolsGrid";
import HeaderSection from "@/components/layout/HeaderSection";
import SeoContent from "@/components/common/SeoContent";

const Home = () => {

  // Generate JSON-LD FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tools.flatMap(tool =>
      tool.faq.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-background">

      <Helmet>
        <title>Dev Toolkit Central – Free Online Developer Tools</title>
        <meta
          name="description"
          content="Access free online developer tools including JSON Formatter, Base64 Encoder, HTML/CSS/JS Beautifiers, Color Picker, Regex Tester, Timestamp Converter, URL Encoder, and UUID Generator."
        />
        <meta 
          name="google-adsense-account" 
          content="ca-pub-7839812208426780"
        />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Background gradient effect */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, hsl(187, 90%, 51%, 0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative flex flex-col min-h-screen">
        <main className="max-w-7xl mx-auto px-4 py-4 sm:py-6 md:py-12">
          <HeaderSection />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            <ToolsGrid tools={tools} />
            {/*<Sidebar />*/}
          </div>
          <SeoContent />
        </main>
      </div>
    </div>
  );
};

export default Home;
