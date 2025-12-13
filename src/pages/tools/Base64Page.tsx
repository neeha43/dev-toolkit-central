import ToolPageLayout from "@/components/layout/ToolPageLayout";
import Base64Tool from "@/components/tools/Base64Tool";

const Base64Page = () => {
  return (
    <ToolPageLayout
      title="Base64 Encoder & Decoder"
      description="Encode text to Base64 or decode Base64 strings back to plain text instantly."
      metaTitle="Base64 Encoder & Decoder - Free Online Tool | DevTools"
      metaDescription="Free online Base64 encoder and decoder. Convert text to Base64 and decode Base64 strings instantly. No data stored, privacy-focused."
    >
      <Base64Tool />
    </ToolPageLayout>
  );
};

export default Base64Page;
