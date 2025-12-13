import ToolPageLayout from "@/components/layout/ToolPageLayout";
import JsBeautifier from "@/components/tools/JsBeautifier";

const JsBeautifierPage = () => {
  return (
    <ToolPageLayout
      title="JavaScript Beautifier & Formatter"
      description="Format and beautify your JavaScript code with proper indentation and structure."
      metaTitle="JavaScript Beautifier & Formatter - Free Online Tool | DevTools"
      metaDescription="Free online JavaScript beautifier and formatter. Format, indent, and beautify JS code instantly. Clean up minified JavaScript. No data stored."
    >
      <JsBeautifier />
    </ToolPageLayout>
  );
};

export default JsBeautifierPage;
