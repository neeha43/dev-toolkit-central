import ToolPageLayout from "@/components/layout/ToolPageLayout";
import UrlTool from "@/components/tools/UrlTool";
import { getToolSEOData } from "@/lib/seoData";

const seo = getToolSEOData("url")!;

const UrlEncoderPage = () => {
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
      <UrlTool />
    </ToolPageLayout>
  );
};

export default UrlEncoderPage;
