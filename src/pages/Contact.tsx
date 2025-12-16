import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />
      <Helmet>
        <title>Contact | Dev Toolkit Central</title>
        <meta 
          name="google-adsense-account" 
          content="ca-pub-7839812208426780"
        />
        <meta
          name="description"
          content="Contact Dev Toolkit Central for questions, feedback, or support regarding free online developer tools."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <p className="mb-4 text-gray-700">
        We are happy to hear from users of Dev Toolkit Central! Whether you have questions, suggestions, or feedback, 
        please use the contact details below to reach out.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Email</h2>
      <p className="mb-4 text-gray-700">
        The best way to contact us is via email:
        <br />
        <a
          href="mailto:your-email@example.com"
          className="text-blue-600 hover:underline"
        >
          your-email@example.com
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Feedback</h2>
      <p className="mb-4 text-gray-700">
        If you find a bug, have an idea for a new tool, or want to improve existing features, please share your thoughts. 
        We read every message and consider all suggestions when updating the platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Support Us</h2>
      <p className="mb-4 text-gray-700">
        Dev Toolkit Central is free to use and supported by contributions from our users. 
        If you enjoy the platform and want to support development, consider buying us a coffee. Your support helps maintain and improve the tools for everyone.
      </p>
    </main>
  );
}
