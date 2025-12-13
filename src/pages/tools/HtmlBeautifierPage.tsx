import ToolPageLayout from "@/components/layout/ToolPageLayout";
import HtmlBeautifier from "@/components/tools/HtmlBeautifier";

const HtmlBeautifierPage = () => {
  return (
    <ToolPageLayout
      title="HTML Beautifier & Formatter"
      description="Format and beautify your HTML code with proper indentation and structure."
      metaTitle="HTML Beautifier & Formatter - Free Online Tool | DevTools"
      metaDescription="Free online HTML beautifier and formatter. Format, indent, and beautify HTML code instantly. Clean up messy HTML. No data stored."
    >
      <HtmlBeautifier />
    </ToolPageLayout>
  );
};

export default HtmlBeautifierPage;
