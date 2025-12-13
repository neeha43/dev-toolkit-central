import ToolPageLayout from "@/components/layout/ToolPageLayout";
import CssBeautifier from "@/components/tools/CssBeautifier";

const CssBeautifierPage = () => {
  return (
    <ToolPageLayout
      title="CSS Beautifier & Formatter"
      description="Format and beautify your CSS code with proper indentation and organization."
      metaTitle="CSS Beautifier & Formatter - Free Online Tool | DevTools"
      metaDescription="Free online CSS beautifier and formatter. Format, indent, and beautify CSS code instantly. Clean up minified CSS. No data stored."
    >
      <CssBeautifier />
    </ToolPageLayout>
  );
};

export default CssBeautifierPage;
