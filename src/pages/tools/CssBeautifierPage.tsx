import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";
import CssBeautifierTool from "@/features/tools/CssBeautifier";

export default function CssBeautifierPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />

      <Helmet>
        <title>CSS Beautifier | Dev Toolkit Central</title>
        <meta 
          name="google-adsense-account" 
          content="ca-pub-7839812208426780"
        />
        <meta name="description" content="Format and beautify CSS code online. Improve readability, maintain indentation, and organize stylesheets efficiently." />
        <meta name="keywords" content="CSS Beautifier, CSS formatter, online CSS tool, developer tools" />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/css-beautifier" />
        <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"What is CSS Beautifier?","acceptedAnswer":{"@type":"Answer","text":"CSS Beautifier formats CSS code, making it readable and well-structured."}},
              {"@type":"Question","name":"Does it change CSS behavior?","acceptedAnswer":{"@type":"Answer","text":"No, it only formats code without altering styles."}},
              {"@type":"Question","name":"Can I beautify large files?","acceptedAnswer":{"@type":"Answer","text":"Yes, it handles large CSS files efficiently."}}
            ]
          }
        `}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">CSS Beautifier</h1>
      <p className="mb-6 text-gray-700">
        Format and beautify CSS code instantly. Makes your stylesheets readable, well-indented, and easier to maintain for web development projects.
      </p>

      <h2 className="text-xl font-semibold mb-3">How to Use</h2>
      <p className="mb-6 text-gray-700">
        Paste your CSS and click "Beautify". The tool formats your code with proper indentation and line breaks. Copy or download the output for your workflow.
      </p>

      <h2 className="text-xl font-semibold mb-3">Benefits & Common Uses</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Improves readability and maintainability of CSS</li>
        <li>Automatically corrects indentation and spacing</li>
        <li>Speeds up debugging and stylesheet editing</li>
        <li>Handles large CSS files efficiently</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Tips & Notes</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Keep a backup of original CSS before formatting.</li>
        <li>Use consistent formatting styles across your project.</li>
        <li>Minify only for production; keep beautified CSS for development.</li>
      </ul>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CssBeautifierTool />
      </div>
    </main>
  );
}
