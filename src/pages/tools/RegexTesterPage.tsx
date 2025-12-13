import ToolPageLayout from "@/components/layout/ToolPageLayout";
import RegexTester from "@/components/tools/RegexTester";

const RegexTesterPage = () => {
  return (
    <ToolPageLayout
      title="Regex Tester & Validator"
      description="Test and validate your regular expressions with real-time matching and highlighting."
      metaTitle="Regex Tester & Validator - Free Online Tool | DevTools"
      metaDescription="Free online regex tester and validator. Test regular expressions with real-time matching, highlighting, and pattern validation. No data stored."
    >
      <RegexTester />
    </ToolPageLayout>
  );
};

export default RegexTesterPage;
