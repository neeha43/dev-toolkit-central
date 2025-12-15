import ToolPageLayout from "@/components/layout/ToolPageLayout";
import TimestampConverter from "@/components/tools/TimestampConverter";
import { getToolSEOData } from "@/lib/seoData";

const seo = getToolSEOData("timestamp")!;

const TimestampConverterPage = () => {
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
      <TimestampConverter />
    </ToolPageLayout>
  );
};

export default TimestampConverterPage;
