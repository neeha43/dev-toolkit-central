import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";
import RegexTesterTool from "@/features/tools/RegexTester";

export default function RegexTesterPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />

      <Helmet>
        <title>Regex Tester – Free Online Tool | Dev Toolkit Central</title>
        <meta 
          name="google-adsense-account" 
          content="ca-pub-7839812208426780"
        />
        <meta name="description" content="Test and debug regular expressions instantly. Highlight matches in text and improve your regex workflow." />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/regex-tester" />
        <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"What is Regex Tester?","acceptedAnswer":{"@type":"Answer","text":"Regex Tester allows testing and debugging regular expressions with instant match highlighting."}},
              {"@type":"Question","name":"Is data sent to server?","acceptedAnswer":{"@type":"Answer","text":"No, all regex testing happens locally in your browser."}},
              {"@type":"Question","name":"Can I use flags?","acceptedAnswer":{"@type":"Answer","text":"Yes, you can apply global, case-insensitive, and multiline flags for testing."}}
            ]
          }
        `}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Regex Tester</h1>
      <p className="mb-6 text-gray-700">
        Test and debug regular expressions online. Highlight matches in real-time and fine-tune your regex for web development, scripting, and data validation tasks.
      </p>
      <p className="mb-6 text-gray-700">
        Explore more utilities in our{" "}
        <a href="/tools" className="text-blue-600 underline">
          free developer tools collection
        </a>.
      </p>

      <h2 className="text-xl font-semibold mb-3">How to Use</h2>
      <p className="mb-6 text-gray-700">
        Enter your regular expression and test string. Matches are highlighted instantly. Use flags for global, case-insensitive, or multiline matching.
      </p>

      <h2 className="text-xl font-semibold mb-3">Benefits & Common Uses</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Instantly validate and debug regex</li>
        <li>Real-time match highlighting</li>
        <li>Supports standard regex flags</li>
        <li>Helps avoid errors in scripts, forms, or APIs</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Tips & Notes</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Start simple and test with sample text before complex patterns.</li>
        <li>Use capture groups to extract specific matches.</li>
        <li>Experiment with flags to refine your results.</li>
      </ul>

      <section
        aria-label="Regex Tester Tool"
        className="max-w-4xl mx-auto px-4 py-10"
      >
        <RegexTesterTool />
      </section>
    </main>
  );
}
