import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Tool Pages
import JsonFormatterPage from "./pages/tools/JsonFormatterPage";
import Base64Page from "./pages/tools/Base64Page";
import UrlEncoderPage from "./pages/tools/UrlEncoderPage";
import RegexTesterPage from "./pages/tools/RegexTesterPage";
import UuidGeneratorPage from "./pages/tools/UuidGeneratorPage";
import ColorPickerPage from "./pages/tools/ColorPickerPage";
import HtmlBeautifierPage from "./pages/tools/HtmlBeautifierPage";
import CssBeautifierPage from "./pages/tools/CssBeautifierPage";
import JsBeautifierPage from "./pages/tools/JsBeautifierPage";
import TimestampConverterPage from "./pages/tools/TimestampConverterPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Tool Pages */}
          <Route path="/json-formatter" element={<JsonFormatterPage />} />
          <Route path="/base64-encoder-decoder" element={<Base64Page />} />
          <Route path="/url-encoder" element={<UrlEncoderPage />} />
          <Route path="/regex-tester" element={<RegexTesterPage />} />
          <Route path="/uuid-generator" element={<UuidGeneratorPage />} />
          <Route path="/color-picker" element={<ColorPickerPage />} />
          <Route path="/html-beautifier" element={<HtmlBeautifierPage />} />
          <Route path="/css-beautifier" element={<CssBeautifierPage />} />
          <Route path="/js-beautifier" element={<JsBeautifierPage />} />
          <Route path="/timestamp-converter" element={<TimestampConverterPage />} />
          
          {/* Info Pages */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
