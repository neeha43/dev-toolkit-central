import ToolPageLayout from "@/components/layout/ToolPageLayout";
import UrlTool from "@/components/tools/UrlTool";

const UrlEncoderPage = () => {
  return (
    <ToolPageLayout
      title="URL Encoder & Decoder"
      description="Encode special characters for URLs or decode URL-encoded strings back to readable text."
      metaTitle="URL Encoder & Decoder - Free Online Tool | DevTools"
      metaDescription="Free online URL encoder and decoder. Encode special characters for safe URLs and decode URL-encoded strings. No data stored."
    >
      <UrlTool />
    </ToolPageLayout>
  );
};

export default UrlEncoderPage;
