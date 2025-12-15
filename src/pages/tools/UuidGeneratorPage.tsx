import ToolPageLayout from "@/components/layout/ToolPageLayout";
import UuidGenerator from "@/components/tools/UuidGenerator";
import { getToolSEOData } from "@/lib/seoData";

const seo = getToolSEOData("uuid")!;

const UuidGeneratorPage = () => {
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
      <UuidGenerator />
    </ToolPageLayout>
  );
};

export default UuidGeneratorPage;
