import ToolPageLayout from "@/components/layout/ToolPageLayout";
import Base64Tool from "@/components/tools/Base64Tool";
import { getToolSEOData } from "@/lib/seoData";

const seo = getToolSEOData("base64")!;

const Base64Page = () => {
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
      <Base64Tool />
    </ToolPageLayout>
  );
};

export default Base64Page;
