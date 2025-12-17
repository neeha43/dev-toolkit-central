import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";
import UuidGeneratorTool from "@/features/tools/UuidGenerator";

export default function UuidGeneratorPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />

      <Helmet>
        <title>UUID Generator – Free Online Tool | Dev Toolkit Central</title>
        <meta
          name="google-adsense-account"
          content="ca-pub-7839812208426780"
        />
        <meta name="description" content="Generate unique UUIDs instantly for databases, APIs, or applications. Secure and client-side tool." />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/uuid-generator" />
        <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"What is a UUID?","acceptedAnswer":{"@type":"Answer","text":"UUID is a universally unique identifier used for keys, sessions, and resource identification."}},
              {"@type":"Question","name":"Is my UUID secure?","acceptedAnswer":{"@type":"Answer","text":"Yes, UUIDs generated are random and unique. All generation happens in the browser."}},
              {"@type":"Question","name":"Can I generate multiple UUIDs?","acceptedAnswer":{"@type":"Answer","text":"Yes, generate as many as needed sequentially."}}
            ]
          }
        `}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">UUID Generator</h1>
      <p className="mb-6 text-gray-700">
        Generate universally unique identifiers instantly for applications, databases, or projects. Useful for unique keys, session IDs, and resource tracking.
      </p>
      <p className="mb-6 text-gray-700">
        Explore more utilities in our{" "}
        <a href="/tools" className="text-blue-600 underline">
          free developer tools collection
        </a>.
      </p>

      <h2 className="text-xl font-semibold mb-3">How to Use</h2>
      <p className="mb-6 text-gray-700">Click 'Generate UUID' to create a unique identifier. Copy or generate multiple UUIDs for batch use.</p>

      <h2 className="text-xl font-semibold mb-3">Benefits & Common Uses</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Quickly generate unique identifiers</li>
        <li>Ideal for databases, APIs, and sessions</li>
        <li>All processing is client-side for privacy</li>
        <li>Supports version 4 UUIDs for randomness</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Tips & Notes</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Use as primary keys in non-sensitive applications.</li>
        <li>Avoid using UUIDs as encryption keys.</li>
        <li>Generate multiple UUIDs at once for batch operations.</li>
      </ul>

      <section
        aria-label="UUID Generator Tool"
        className="max-w-4xl mx-auto px-4 py-10"
      >
        <UuidGeneratorTool />
      </section>
    </main>
  );
}
