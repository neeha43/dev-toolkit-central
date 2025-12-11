import { useState, useRef, useEffect } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
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

const tools = [
  { id: "json", name: "JSON Formatter", icon: FileJson, component: JsonFormatter },
  { id: "base64", name: "Base64", icon: Lock, component: Base64Tool },
  { id: "url", name: "URL Encoder", icon: Link, component: UrlTool },
  { id: "regex", name: "Regex Tester", icon: Search, component: RegexTester },
  { id: "uuid", name: "UUID Generator", icon: Hash, component: UuidGenerator },
  { id: "color", name: "Color Picker", icon: Palette, component: ColorPicker },
  { id: "html", name: "HTML Beautifier", icon: Code, component: HtmlBeautifier },
  { id: "css", name: "CSS Beautifier", icon: FileCode, component: CssBeautifier },
  { id: "js", name: "JS Beautifier", icon: Braces, component: JsBeautifier },
  { id: "timestamp", name: "Timestamp", icon: Clock, component: TimestampConverter },
];

const Index = () => {
  const [activeTool, setActiveTool] = useState("json");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  const ActiveComponent = tools.find((t) => t.id === activeTool)?.component || JsonFormatter;

  const checkScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

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
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">DevTools</h1>
                <p className="text-xs text-muted-foreground">Developer Utilities</p>
              </div>
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-[73px] z-40">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center">
              {/* Left Arrow */}
              <button
                onClick={() => scroll("left")}
                className={`
                  absolute left-0 z-10 w-8 h-8 flex items-center justify-center
                  bg-card/90 backdrop-blur-sm border border-border rounded-full
                  text-muted-foreground hover:text-foreground hover:bg-secondary
                  transition-all duration-200 shadow-lg
                  ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Tabs Container */}
              <div
                ref={tabsRef}
                onScroll={checkScroll}
                className="flex overflow-x-auto scrollbar-thin py-2 gap-1 mx-10 scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  const isActive = activeTool === tool.id;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => setActiveTool(tool.id)}
                      className={`
                        flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap
                        transition-all duration-200 flex-shrink-0
                        ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tool.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scroll("right")}
                className={`
                  absolute right-0 z-10 w-8 h-8 flex items-center justify-center
                  bg-card/90 backdrop-blur-sm border border-border rounded-full
                  text-muted-foreground hover:text-foreground hover:bg-secondary
                  transition-all duration-200 shadow-lg
                  ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* Tool Content */}
            <div className="flex-1 min-w-0">
              <ActiveComponent />
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card/30 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              Free developer tools • No data stored • Works offline
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
