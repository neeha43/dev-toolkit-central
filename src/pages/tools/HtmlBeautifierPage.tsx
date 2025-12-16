import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";
import HtmlBeautifierTool from "@/features/tools/HtmlBeautifier";

export default function HtmlBeautifierPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />

      <Helmet>
        <title>HTML Beautifier | Dev Toolkit Central</title>
        <meta 
          name="google-adsense-account" 
          content="ca-pub-7839812208426780"
        />
        <meta name="description" content="Beautify and format HTML code online. Clean, indent, and structure your HTML for better readability and maintenance." />
        <meta name="keywords" content="HTML Beautifier, HTML formatter, online HTML tool, developer tools" />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/html-beautifier" />
        <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"What is HTML Beautifier?","acceptedAnswer":{"@type":"Answer","text":"HTML Beautifier formats and organizes HTML code to improve readability and maintainability."}},
              {"@type":"Question","name":"Does it modify my HTML?","acceptedAnswer":{"@type":"Answer","text":"It only formats your HTML, keeping the structure and content intact."}},
              {"@type":"Question","name":"Can I customize indentation?","acceptedAnswer":{"@type":"Answer","text":"Yes, you can choose indentation styles for better code organization."}}
            ]
          }
        `}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">HTML Beautifier</h1>
      <p className="mb-6 text-gray-700">
        Beautify messy or minified HTML into readable, well-structured code. Ideal for web developers, designers, and students working on templates, projects, or debugging HTML files.
      </p>

      <h2 className="text-xl font-semibold mb-3">How to Use</h2>
      <p className="mb-6 text-gray-700">
        Paste your HTML code and click "Beautify". View the formatted HTML with proper indentation and line breaks. Copy or download the output for your projects.
      </p>

      <h2 className="text-xl font-semibold mb-3">Benefits & Common Uses</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Improves readability and maintainability of HTML</li>
        <li>Corrects indentation and spacing automatically</li>
        <li>Supports large files and templates</li>
        <li>Speeds up debugging and editing workflows</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Tips & Notes</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Always keep a backup of your original code.</li>
        <li>Check the output for complex nested elements.</li>
        <li>Use consistent formatting across all projects.</li>
      </ul>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <HtmlBeautifierTool />
      </div>
    </main>
  );
}
