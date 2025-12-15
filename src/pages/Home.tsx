import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";

// Tools array (same as before)
const tools = [
  {
    title: "JSON Formatter",
    desc: "Format, validate, and beautify JSON.",
    path: "/json-formatter",
    icon: "📝",
  },
  {
    title: "Base64 Encoder/Decoder",
    desc: "Encode or decode Base64 strings quickly.",
    path: "/base64-encoder-decoder",
    icon: "🔢",
  },
  {
    title: "HTML Beautifier",
    desc: "Beautify HTML code easily.",
    path: "/html-beautifier",
    icon: "🌐",
  },
  {
    title: "CSS Beautifier",
    desc: "Format and beautify your CSS code.",
    path: "/css-beautifier",
    icon: "🎨",
  },
  {
    title: "JS Beautifier",
    desc: "Format and beautify your JavaScript code.",
    path: "/js-beautifier",
    icon: "💻",
  },
  {
    title: "Color Picker",
    desc: "Pick and convert colors online.",
    path: "/color-picker",
    icon: "🖌️",
  },
  {
    title: "Regex Tester",
    desc: "Test and debug regular expressions.",
    path: "/regex-tester",
    icon: "🔍",
  },
  {
    title: "Timestamp Converter",
    desc: "Convert Unix timestamps to dates and vice versa.",
    path: "/timestamp-converter",
    icon: "⏰",
  },
  {
    title: "URL Encoder",
    desc: "Encode and Decode URLs online.",
    path: "/url-encoder",
    icon: "🔗",
  },
  {
    title: "UUID Generator",
    desc: "Generate unique UUIDs instantly.",
    path: "/uuid-generator",
    icon: "🆔",
  },
];

const Index = () => {
  const [searchParams] = useSearchParams();
  const toolFromUrl = searchParams.get("tool");

  const tabsRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      tabsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">

      <Helmet>
        <title>Dev Toolkit Central – Free Online Developer Tools</title>
        <meta
          name="description"
          content="Access free online developer tools including JSON Formatter, Base64 Encoder, HTML/CSS/JS Beautifiers, Color Picker, Regex Tester, and more."
        />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/" />
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
          {/* Page Header with Border */}
          <div className="w-full border-2 border-gray-300 rounded-xl p-3 sm:p-4 md:p-6 mb-10 bg-gray-50 flex flex-col items-center text-center gap-3 sm:gap-4">
            <div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Dev Toolkit Central
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-1 sm:mt-2">
                A collection of free online developer tools to format, convert, and test your code.
              </p>
            </div>

            {/* Mobile-only Buy Me a Coffee button */}
            <div className="block lg:hidden flex-shrink-0 mt-2">
              <a
                href="https://buymeacoffee.com/neeharikakv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-3 py-2 rounded hover:bg-yellow-500 transition text-sm sm:text-base"
              >
                <FaCoffee className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">Buy Me a Coffee</span>
              </a>
            </div>
          </div>

          {/* Two-column layout: main grid + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">

            {/* Left Column: Tools Grid */}
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

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-6">
              <div className="lg:sticky lg:top-24">
                {/* Desktop-only Buy Me a Coffee button */}
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

                {/* Ads / Additional content */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center mt-4 sm:mt-6 transition-shadow duration-300 hover:shadow-lg">
                  <h3 className="font-semibold mb-2 text-gray-800">Advertisement</h3>
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">Ad Space</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card/30 py-4 sm:py-6">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {new Date().getFullYear()} DevTools. Free developer tools • No data stored
              </p>
              <nav className="flex items-center gap-4 sm:gap-6" aria-label="Footer navigation">
                <RouterLink
                  to="/about"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </RouterLink>
                <RouterLink
                  to="/privacy"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </RouterLink>
                <RouterLink
                  to="/contact"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </RouterLink>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
