import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";
import ColorPickerTool from "@/features/tools/ColorPicker";

export default function ColorPickerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />

      <Helmet>
        <title>Color Picker | Dev Toolkit Central</title>
        <meta 
          name="google-adsense-account" 
          content="ca-pub-7839812208426780"
        />
        <meta name="description" content="Pick, convert, and explore colors online. Generate HEX, RGB, and HSL codes easily for web design or development." />
        <meta name="keywords" content="Color Picker, online color tool, HEX RGB HSL, web design tool" />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/color-picker" />
        <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"What is Color Picker?","acceptedAnswer":{"@type":"Answer","text":"Color Picker allows you to select colors and view their HEX, RGB, and HSL values instantly."}},
              {"@type":"Question","name":"Can I copy color codes?","acceptedAnswer":{"@type":"Answer","text":"Yes, you can copy any color code to use in your design or development projects."}},
              {"@type":"Question","name":"Does it work offline?","acceptedAnswer":{"@type":"Answer","text":"Yes, all color picking and conversions happen in your browser."}}
            ]
          }
        `}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Color Picker</h1>
      <p className="mb-6 text-gray-700">
        Pick, convert, and explore colors online. Generate HEX, RGB, and HSL codes quickly and use them in web design, UI development, or graphic projects.
      </p>

      <h2 className="text-xl font-semibold mb-3">How to Use</h2>
      <p className="mb-6 text-gray-700">
        Select a color from the palette or input a HEX/RGB/HSL value. The tool shows all equivalent color codes and allows easy copying.
      </p>

      <h2 className="text-xl font-semibold mb-3">Benefits & Common Uses</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Instantly get HEX, RGB, HSL values</li>
        <li>Supports web and UI design workflows</li>
        <li>Works entirely in the browser</li>
        <li>Easy copy for CSS or graphics projects</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Tips & Notes</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Use the color codes consistently across your project.</li>
        <li>Check contrast for accessibility before applying colors.</li>
        <li>Experiment with shades and opacity for design precision.</li>
      </ul>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <ColorPickerTool />
      </div>
    </main>
  );
}
