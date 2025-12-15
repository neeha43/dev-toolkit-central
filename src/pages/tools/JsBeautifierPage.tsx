import ToolPageLayout from "@/components/layout/ToolPageLayout";
import JsBeautifier from "@/components/tools/JsBeautifier";
import { getToolSEOData } from "@/lib/seoData";

const seo = getToolSEOData("js")!;

const JsBeautifierPage = () => {
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
      <JsBeautifier />
    </ToolPageLayout>
  );
};

export default JsBeautifierPage;
