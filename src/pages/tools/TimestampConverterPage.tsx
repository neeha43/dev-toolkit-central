import ToolPageLayout from "@/components/layout/ToolPageLayout";
import TimestampConverter from "@/components/tools/TimestampConverter";

const TimestampConverterPage = () => {
  return (
    <ToolPageLayout
      title="Unix Timestamp Converter"
      description="Convert Unix timestamps to human-readable dates and vice versa. Supports seconds and milliseconds."
      metaTitle="Unix Timestamp Converter - Free Online Tool | DevTools"
      metaDescription="Free online Unix timestamp converter. Convert timestamps to dates and dates to Unix timestamps. Supports seconds and milliseconds. No data stored."
    >
      <TimestampConverter />
    </ToolPageLayout>
  );
};

export default TimestampConverterPage;
