import ToolPageLayout from "@/components/layout/ToolPageLayout";
import ColorPicker from "@/components/tools/ColorPicker";

const ColorPickerPage = () => {
  return (
    <ToolPageLayout
      title="Color Picker & Converter"
      description="Pick colors and convert between HEX, RGB, and HSL formats instantly."
      metaTitle="Color Picker & Converter - Free Online Tool | DevTools"
      metaDescription="Free online color picker and converter. Convert colors between HEX, RGB, and HSL formats. Visual color selection tool. No data stored."
    >
      <ColorPicker />
    </ToolPageLayout>
  );
};

export default ColorPickerPage;
