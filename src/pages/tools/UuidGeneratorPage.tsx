import ToolPageLayout from "@/components/layout/ToolPageLayout";
import UuidGenerator from "@/components/tools/UuidGenerator";

const UuidGeneratorPage = () => {
  return (
    <ToolPageLayout
      title="UUID Generator"
      description="Generate random UUIDs (Universally Unique Identifiers) for your applications and databases."
      metaTitle="UUID Generator - Free Online Tool | DevTools"
      metaDescription="Free online UUID generator. Generate random UUIDs (v4) instantly for your applications. Copy with one click. No data stored."
    >
      <UuidGenerator />
    </ToolPageLayout>
  );
};

export default UuidGeneratorPage;
