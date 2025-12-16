import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";
import Base64Tool from "@/features/tools/Base64Tool";

export default function Base64Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />

      <Helmet>
        <title>Base64 Encoder/Decoder | Dev Toolkit Central</title>
        <meta name="description" content="Encode or decode text and binary data using Base64 quickly. Safe, client-side conversion for web developers and API testers." />
        <meta name="keywords" content="Base64 Encoder, Base64 Decoder, online converter, developer tools" />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/base64-encoder-decoder" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Base64 encoding?",
                "acceptedAnswer": { "@type": "Answer", "text": "Base64 encoding converts binary or text data into a plain text format for safe transmission or storage." }
              },
              {
                "@type": "Question",
                "name": "Is my data sent to a server?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. All encoding and decoding happens locally in your browser." }
              },
              {
                "@type": "Question",
                "name": "Can I encode files or large data?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can encode text or binary data, but extremely large files may be limited by your browser." }
              }
            ]
          }
        `}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Base64 Encoder / Decoder</h1>
      <p className="mb-6 text-gray-700">
        Quickly convert text or binary data to Base64 and decode it back. Essential for web developers, API testing, and securely transferring data without corruption.
      </p>

      <h2 className="text-xl font-semibold mb-3">How to Use</h2>
      <p className="mb-6 text-gray-700">
        Paste your input in the text box, then click 'Encode' or 'Decode'. Copy the result instantly for use in applications, APIs, or files.
      </p>

      <h2 className="text-xl font-semibold mb-3">Benefits & Common Uses</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Quickly encode/decode text or binary data</li>
        <li>Safe for API tokens, authentication, or data transmission</li>
        <li>All processing happens locally; no server storage</li>
        <li>Easy copy-paste workflow</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Tips & Notes</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Verify encoded output before using in production.</li>
        <li>Use decoding to check Base64 data from files, emails, or APIs.</li>
        <li>Large input may depend on browser memory.</li>
      </ul>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Base64Tool />
      </div>
    </main>
  );
}
