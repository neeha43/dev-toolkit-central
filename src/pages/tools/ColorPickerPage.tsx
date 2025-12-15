import ToolPageLayout from "@/components/layout/ToolPageLayout";
import ColorPicker from "@/components/tools/ColorPicker";
import { getToolSEOData } from "@/lib/seoData";

const seo = getToolSEOData("color")!;

const ColorPickerPage = () => {
  return (
    <ToolPageLayout
      title={seo.title}
      description={seo.description}
      metaTitle={seo.metaTitle}
      metaDescription={seo.metaDescription}
      canonicalPath={seo.canonicalPath}
      keywords={seo.keywords}
      faqs={seo.faqs}
    >
      <ColorPicker />
    </ToolPageLayout>
  );
};

export default ColorPickerPage;
