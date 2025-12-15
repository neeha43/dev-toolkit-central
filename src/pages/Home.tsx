import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
import {
  FileJson,
  Lock,
  Link,
  Search,
  Hash,
  Palette,
  Code,
  FileCode,
  Braces,
  Clock,
  Wrench,
  Coffee,
} from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import SEOHead, { generateToolSchema } from "@/components/SEOHead";
import { homepageSEO, getToolSEOData } from "@/lib/seoData";

import JsonFormatter from "@/components/tools/JsonFormatter";
import Base64Tool from "@/components/tools/Base64Tool";
import UrlTool from "@/components/tools/UrlTool";
import RegexTester from "@/components/tools/RegexTester";
import UuidGenerator from "@/components/tools/UuidGenerator";
import ColorPicker from "@/components/tools/ColorPicker";
import HtmlBeautifier from "@/components/tools/HtmlBeautifier";
import CssBeautifier from "@/components/tools/CssBeautifier";
import JsBeautifier from "@/components/tools/JsBeautifier";
import TimestampConverter from "@/components/tools/TimestampConverter";

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
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-foreground">DevTools</h1>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Developer Utilities</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Mobile Coffee Button */}
                <button
                  onClick={() => window.open('https://buymeacoffee.com/neeharikakv', '_blank')}
                  className="xl:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warning/10 border border-warning/30 text-warning hover:bg-warning/20 transition-colors text-sm font-medium"
                >
                  <Coffee className="w-4 h-4" />
                  <span className="hidden sm:inline">Buy Me a Coffee</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
            Dev Toolkit Central
          </h1>
          <p className="text-center mb-10 text-gray-600 text-lg">
            A collection of free online developer tools to format, convert, and test your code.
          </p>

          {/* Two-column layout: main grid + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Left Column: Tools Grid (span 3/4 on large screens) */}
            <div className="lg:col-span-3 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <div
                  key={tool.path}
                  className="group relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105 p-6 flex flex-col justify-between"
                >
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition">
                    {tool.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{tool.desc}</p>
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
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Buy Me a Coffee */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center">
                <h3 className="font-semibold mb-2 text-gray-800">Support Me</h3>
                <a
                  href="https://www.buymeacoffee.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
                >
                  Buy Me a Coffee ☕
                </a>
              </div>

              {/* Ads / Additional content */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center">
                <h3 className="font-semibold mb-2 text-gray-800">Advertisement</h3>
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                  {/* Replace with your ad code or iframe */}
                  <span className="text-gray-500">Ad Space</span>
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
