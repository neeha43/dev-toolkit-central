import React from "react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import { tools } from "@/features/tools/tools.config";

const Index = () => {

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
          {/* Page Header */}
          <div className="w-full border-2 border-gray-300 rounded-xl p-3 sm:p-4 md:p-6 mb-10 bg-gray-50 flex flex-col items-center text-center gap-3 sm:gap-4">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              Dev Toolkit Central
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1 sm:mt-2">
              A collection of free online developer tools to format, convert, and test your code efficiently.
            </p>
            <a
              href="https://buymeacoffee.com/neeharikakv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-3 py-2 rounded hover:bg-yellow-500 transition text-sm sm:text-base mt-2"
            >
              <FaCoffee className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold">Buy Me a Coffee</span>
            </a>
          </div>

          {/* Tools Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="lg:col-span-3 grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <div
                  key={tool.path}
                  className="group relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105 p-4 sm:p-6 flex flex-col justify-between"
                >
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition">
                    {tool.title}
                  </h2>
                  <p className="text-gray-600 mb-4 sm:mb-6">{tool.desc}</p>
                  <RouterLink
                    to={tool.path}
                    className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center font-medium shadow-sm hover:shadow-md transition"
                  >
                    Open Tool →
                  </RouterLink>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-6">
              <div className="lg:sticky lg:top-24">
                <div className="hidden lg:block bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center transition-shadow duration-300 hover:shadow-lg">
                  <h3 className="font-semibold mb-2 text-gray-800">Support Me</h3>
                  <a
                    href="https://buymeacoffee.com/neeharikakv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
                  >
                    Buy Me a Coffee ☕
                  </a>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center mt-4 sm:mt-6 transition-shadow duration-300 hover:shadow-lg">
                  <h3 className="font-semibold mb-2 text-gray-800">Advertisement</h3>
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">Ad Space</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Content Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Why Use Dev Toolkit Central?</h2>
            <p className="mb-4 text-gray-700">
              Dev Toolkit Central provides developers with quick, reliable, and free online tools. From formatting JSON and code beautification to color selection and regex testing, our platform helps you save time and improve your workflow.
            </p>
            <p className="mb-4 text-gray-700">
              Each tool is designed to run entirely in your browser, ensuring privacy and instant results. No registration is required, and no data leaves your device.
            </p>
            <p className="mb-4 text-gray-700">
              Whether you are debugging code, working on web projects, or learning programming, Dev Toolkit Central is your all-in-one solution for online developer utilities.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
