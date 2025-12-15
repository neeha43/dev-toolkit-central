import ToolPageLayout from "@/components/layout/ToolPageLayout";
import CssBeautifier from "@/components/tools/CssBeautifier";
import { getToolSEOData } from "@/lib/seoData";

const seo = getToolSEOData("css")!;

const CssBeautifierPage = () => {
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
      <CssBeautifier />
    </ToolPageLayout>
  );
};

export default CssBeautifierPage;
