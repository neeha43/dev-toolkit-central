import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Tool Pages
import JsonFormatterPage from "./components/tools/JsonFormatter";
import Base64Page from "./components/tools/Base64Tool";
import UrlEncoderPage from "./components/tools/UrlTool";
import RegexTesterPage from "./components/tools/RegexTester";
import UuidGeneratorPage from "./components/tools/UuidGenerator";
import ColorPickerPage from "./components/tools/ColorPicker";
import HtmlBeautifierPage from "./components/tools/HtmlBeautifier";
import CssBeautifierPage from "./components/tools/CssBeautifier";
import JsBeautifierPage from "./components/tools/JsBeautifier";
import TimestampConverterPage from "./components/tools/TimestampConverter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
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
