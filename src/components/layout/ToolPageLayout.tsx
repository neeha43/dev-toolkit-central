import { ReactNode, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Wrench, ArrowLeft, Coffee } from "lucide-react";
import Sidebar from "./Sidebar";

interface ToolPageLayoutProps {
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  children: ReactNode;
}

const ToolPageLayout = ({
  title,
  description,
  metaTitle,
  metaDescription,
  children,
}: ToolPageLayoutProps) => {
  useEffect(() => {
    document.title = metaTitle;
    
    // Update meta description
    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
      metaDescTag = document.createElement('meta');
      metaDescTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescTag);
    }
    metaDescTag.setAttribute('content', metaDescription);

    return () => {
      document.title = 'DevTools - Free Developer Utilities';
    };
  }, [metaTitle, metaDescription]);

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
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <RouterLink to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-foreground">DevTools</h1>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Developer Utilities</p>
                </div>
              </RouterLink>
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Mobile Coffee Button */}
                <button
                  onClick={() => window.open('https://buymeacoffee.com/neeharikakv', '_blank')}
                  className="xl:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warning/10 border border-warning/30 text-warning hover:bg-warning/20 transition-colors text-sm font-medium"
                >
                  <Coffee className="w-4 h-4" />
                  <span className="hidden sm:inline">Buy Me a Coffee</span>
                </button>
                <RouterLink 
                  to="/" 
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">All Tools</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </header>

        {/* Tool Title Section */}
        <div className="border-b border-border bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h1>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex gap-4 lg:gap-6">
            <div className="flex-1 min-w-0">
              {children}
            </div>
            <Sidebar />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card/30 py-4 sm:py-6">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {new Date().getFullYear()} DevTools. Free developer tools • No data stored
              </p>
              <nav className="flex items-center gap-4 sm:gap-6">
                <RouterLink to="/" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Tools
                </RouterLink>
                <RouterLink to="/about" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </RouterLink>
                <RouterLink to="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </RouterLink>
                <RouterLink to="/contact" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
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

export default ToolPageLayout;
