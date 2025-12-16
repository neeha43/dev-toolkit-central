import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />
      <Helmet>
        <title>Privacy Policy | Dev Toolkit Central</title>
        <meta
          name="description"
          content="Privacy Policy for Dev Toolkit Central. Learn how we handle data and cookies safely."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4 text-gray-700">
        At Dev Toolkit Central, we respect your privacy and are committed to protecting your personal information. 
        This Privacy Policy explains how your data is handled when using our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Information Collection</h2>

      <p className="mb-4 text-gray-700">
        Dev Toolkit Central does not collect, store, or share any personal information. All tools run entirely in your browser, 
        meaning your inputs and files remain local and are not transmitted to our servers.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Cookies</h2>

      <p className="mb-4 text-gray-700">
        Our website itself does not use cookies to track users. However, third-party services such as Google AdSense may use cookies 
        to serve relevant ads based on user activity. These cookies are controlled by the third-party service, not by us.
      </p>

      <p className="mb-4 text-gray-700">
        You can manage or disable cookies through your browser settings. For more information about Google’s cookies, please visit 
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ads Privacy</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Third-Party Services</h2>

      <p className="mb-4 text-gray-700">
        Dev Toolkit Central may include content, advertisements, or analytics from third-party services. 
        These services have their own privacy policies, and we recommend reviewing them if you interact with such content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Data Security</h2>

      <p className="mb-4 text-gray-700">
        Since no personal data is collected, we focus on ensuring the security of the platform itself. 
        The website is hosted securely and follows best practices to prevent unauthorized access or modifications.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Consent</h2>

      <p className="text-gray-700">
        By using Dev Toolkit Central, you agree to this Privacy Policy and consent to our use of third-party services that may collect anonymized data for ad serving and analytics.
      </p>

      <p className="mb-4 text-gray-700">
        This Privacy Policy may be updated from time to time. Any changes will be posted on this page.
      </p>
    </main>
  );
}
