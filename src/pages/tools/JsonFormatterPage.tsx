import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";
import JsonFormatterTool from "@/features/tools/JsonFormatter";

export default function JsonFormatterPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />
      
      <Helmet>
        <title>JSON Formatter | Dev Toolkit Central</title>
        <meta 
          name="google-adsense-account" 
          content="ca-pub-7839812208426780"
        />
        <meta name="description" content="Format, validate, and beautify JSON data quickly with Dev Toolkit Central. Make your JSON readable and error-free instantly." />
        <meta name="keywords" content="JSON Formatter, online JSON tool, JSON beautifier, free developer tools" />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/json-formatter" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is JSON Formatter?",
                "acceptedAnswer": { "@type": "Answer", "text": "JSON Formatter is an online tool to format, beautify, and validate JSON data instantly." }
              },
              {
                "@type": "Question",
                "name": "Is my data stored on the server?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. All formatting is done in your browser; your data is never sent to any server." }
              },
              {
                "@type": "Question",
                "name": "Can I use JSON Formatter for large files?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, it handles large JSON files efficiently, limited only by browser memory." }
              }
            ]
          }
        `}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">JSON Formatter</h1>
      <p className="mb-6 text-gray-700">
        JSON Formatter allows you to format, validate, and beautify JSON data quickly. Perfect for developers, testers, and students who work with APIs, configuration files, or datasets.
        Instantly make your JSON readable, error-free, and easy to debug.
      </p>

      <h2 className="text-xl font-semibold mb-3">How to Use</h2>
      <p className="mb-6 text-gray-700">
        Paste your JSON into the editor and click "Format" to see a properly indented output. Syntax errors, if any, are highlighted for easy debugging. Copy or download the formatted JSON directly.
      </p>

      <h2 className="text-xl font-semibold mb-3">Benefits & Common Uses</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Transforms messy JSON into readable format</li>
        <li>Quickly identifies and fixes syntax errors</li>
        <li>Supports both compact and pretty-printed JSON</li>
        <li>Ideal for APIs, config files, and data exchange</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Tips & Notes</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Always validate your JSON before using it in production.</li>
        <li>Use keyboard shortcuts to copy or select all JSON efficiently.</li>
        <li>Check nested objects when working with large datasets.</li>
      </ul>

      {/* Interactive Tool */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <JsonFormatterTool />
      </div>
    </main>
  );
}
