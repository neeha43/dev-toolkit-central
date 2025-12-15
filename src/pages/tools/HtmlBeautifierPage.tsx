import ToolPageLayout from "@/components/layout/ToolPageLayout";
import HtmlBeautifier from "@/components/tools/HtmlBeautifier";
import { getToolSEOData } from "@/lib/seoData";

const seo = getToolSEOData("html")!;

const HtmlBeautifierPage = () => {
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
      <HtmlBeautifier />
    </ToolPageLayout>
  );
};

export default HtmlBeautifierPage;
