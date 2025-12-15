import ToolPageLayout from "@/components/layout/ToolPageLayout";
import JsonFormatter from "@/components/tools/JsonFormatter";
import { getToolSEOData } from "@/lib/seoData";

const seo = getToolSEOData("json")!;

const JsonFormatterPage = () => {
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
      <JsonFormatter />
    </ToolPageLayout>
  );
};

export default JsonFormatterPage;
