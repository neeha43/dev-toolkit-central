import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";
import UrlEncoderTool from "@/features/tools/UrlTool";

export default function UrlEncoderPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />

      <Helmet>
        <title>URL Encoder/Decoder | Dev Toolkit Central</title>
        <meta 
          name="google-adsense-account" 
          content="ca-pub-7839812208426780"
        />
        <meta name="description" content="Encode or decode URLs safely for web development. Convert special characters and spaces to ensure error-free links." />
        <meta name="keywords" content="URL Encoder, URL Decoder, online tool, developer tools" />
        <link rel="canonical" href="https://dev-toolkit-central.pages.dev/url-encoder" />
        <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"What is URL Encoder?","acceptedAnswer":{"@type":"Answer","text":"URL Encoder converts special characters and spaces into URL-safe format."}},
              {"@type":"Question","name":"Does my data leave the browser?","acceptedAnswer":{"@type":"Answer","text":"No, all encoding and decoding happens locally in your browser."}},
              {"@type":"Question","name":"Can I decode URLs?","acceptedAnswer":{"@type":"Answer","text":"Yes, you can decode any URL back to its original readable format."}}
            ]
          }
        `}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">URL Encoder / Decoder</h1>
      <p className="mb-6 text-gray-700">
        Encode or decode URLs quickly to ensure safe and error-free links. Essential for web development, API testing, and working with URLs that contain special characters.
      </p>

      <h2 className="text-xl font-semibold mb-3">How to Use</h2>
      <p className="mb-6 text-gray-700">
        Enter a URL or string and click "Encode" to convert it to a safe format, or "Decode" to revert it to the original. Copy the result for websites, APIs, or emails.
      </p>

      <h2 className="text-xl font-semibold mb-3">Benefits & Common Uses</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Ensures URLs are safe and web-compliant</li>
        <li>Converts special characters to URL-encoded format</li>
        <li>Decodes previously encoded URLs for readability</li>
        <li>Reduces errors when integrating links in code or apps</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Tips & Notes</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Always encode URLs before using in HTML or query parameters.</li>
        <li>Check decoded output for correctness before deployment.</li>
        <li>Useful for handling spaces, symbols, or non-ASCII characters in links.</li>
      </ul>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <UrlEncoderTool />
      </div>
    </main>
  );
}
