import ToolPageLayout from "@/components/layout/ToolPageLayout";
import JsonFormatter from "@/components/tools/JsonFormatter";

const JsonFormatterPage = () => {
  return (
    <ToolPageLayout
      title="JSON Formatter & Validator"
      description="Format, validate, and beautify your JSON data with proper indentation and syntax highlighting."
      metaTitle="JSON Formatter & Validator - Free Online Tool | DevTools"
      metaDescription="Free online JSON formatter and validator. Format, beautify, and validate JSON data instantly. No data stored, works offline."
    >
      <JsonFormatter />
    </ToolPageLayout>
  );
};

export default JsonFormatterPage;
