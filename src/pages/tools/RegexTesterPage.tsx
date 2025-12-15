import ToolPageLayout from "@/components/layout/ToolPageLayout";
import RegexTester from "@/components/tools/RegexTester";
import { getToolSEOData } from "@/lib/seoData";

const seo = getToolSEOData("regex")!;

const RegexTesterPage = () => {
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
      <RegexTester />
    </ToolPageLayout>
  );
};

export default RegexTesterPage;
