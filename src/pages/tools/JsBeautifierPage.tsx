import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";
import JsBeautifierTool from "@/features/tools/JsBeautifier";

export default function JsBeautifierPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />

      <Helmet>
        <title>JavaScript Beautifier – Free Online Tool | Dev Toolkit Central</title>
        <meta 
          name="google-adsense-account" 
          content="ca-pub-7839812208426780"
        />
        <meta name="description" content="Beautify and format JavaScript code online. Proper indentation, spacing, and readability for developers and learners." />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/js-beautifier" />
        <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"What is JS Beautifier?","acceptedAnswer":{"@type":"Answer","text":"JS Beautifier formats JavaScript code for readability and maintenance."}},
              {"@type":"Question","name":"Does it change code functionality?","acceptedAnswer":{"@type":"Answer","text":"No, it only formats code without altering behavior."}},
              {"@type":"Question","name":"Can I format large scripts?","acceptedAnswer":{"@type":"Answer","text":"Yes, large JS files are supported depending on browser memory."}}
            ]
          }
        `}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">JavaScript Beautifier</h1>
      <p className="mb-6 text-gray-700">
        Beautify JavaScript code instantly. Make your scripts readable, well-indented, and easier to debug or maintain for web projects.
      </p>
      <p className="mb-6 text-gray-700">
        Explore more utilities in our{" "}
        <a href="/tools" className="text-blue-600 underline">
          free developer tools collection
        </a>.
      </p>

      <h2 className="text-xl font-semibold mb-3">How to Use</h2>
      <p className="mb-6 text-gray-700">
        Paste your JS code and click "Beautify". The tool formats your code with proper spacing and indentation. Copy or download the result for your workflow.
      </p>

      <h2 className="text-xl font-semibold mb-3">Benefits & Common Uses</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Improves readability and maintainability of JS</li>
        <li>Corrects indentation and spacing automatically</li>
        <li>Speeds up debugging and editing scripts</li>
        <li>Handles large JS files efficiently</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Tips & Notes</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Keep backup of original JS before formatting.</li>
        <li>Use consistent formatting across your project.</li>
        <li>Minify only for production; keep formatted JS for development.</li>
      </ul>

      <section
        aria-label="JavaScript Beautifier Tool"
        className="max-w-4xl mx-auto px-4 py-10"
      >
        <JsBeautifierTool />
      </section>
    </main>
  );
}
