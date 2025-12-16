import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";
import TimestampConverterTool from "@/features/tools/TimestampConverter";

export default function TimestampConverterPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />

      <Helmet>
        <title>Timestamp Converter | Dev Toolkit Central</title>
        <meta 
          name="google-adsense-account" 
          content="ca-pub-7839812208426780"
        />
        <meta name="description" content="Convert Unix timestamps to readable dates and vice versa. Instant, client-side conversion for developers and analysts." />
        <meta name="keywords" content="Timestamp Converter, Unix timestamp, online tool, developer tools" />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/timestamp-converter" />
        <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"What is Timestamp Converter?","acceptedAnswer":{"@type":"Answer","text":"Timestamp Converter converts Unix timestamps to readable dates and vice versa."}},
              {"@type":"Question","name":"Is my data sent to server?","acceptedAnswer":{"@type":"Answer","text":"No, all conversions happen in your browser for privacy."}},
              {"@type":"Question","name":"Can I convert multiple timestamps?","acceptedAnswer":{"@type":"Answer","text":"Yes, enter different timestamps or dates sequentially for conversion."}}
            ]
          }
        `}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Timestamp Converter</h1>
      <p className="mb-6 text-gray-700">
        Convert Unix timestamps to human-readable dates and vice versa instantly. Useful for developers, testers, and analysts working with logs, APIs, or databases.
      </p>

      <h2 className="text-xl font-semibold mb-3">How to Use</h2>
      <p className="mb-6 text-gray-700">
        Enter a timestamp or date, then click "Convert". The tool displays the corresponding date or timestamp instantly.
      </p>

      <h2 className="text-xl font-semibold mb-3">Benefits & Common Uses</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Quickly convert timestamps to readable dates</li>
        <li>Supports multiple formats and time zones</li>
        <li>Helps debug API responses and database entries</li>
        <li>All processing happens client-side for privacy</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Tips & Notes</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Select correct time zone for accurate conversions.</li>
        <li>Double-check output before using in APIs or logs.</li>
        <li>Use sequential conversions for multiple timestamps.</li>
      </ul>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <TimestampConverterTool />
      </div>
    </main>
  );
}
