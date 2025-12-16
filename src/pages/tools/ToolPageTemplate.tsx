import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";

interface ToolPageTemplateProps {
  title: string;
  description: string;
  usage: string;
  benefits: string[];
  tips?: string[];
}

export default function ToolPageTemplate({ title, description, usage, benefits, tips }: ToolPageTemplateProps) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />
      <Helmet>
        <title>{title} | Dev Toolkit Central</title>
        <meta
          name="description"
          content={description}
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <p className="mb-6 text-gray-700">{description}</p>

      <h2 className="text-xl font-semibold mb-3">How to Use</h2>
      <p className="mb-6 text-gray-700">{usage}</p>

      <h2 className="text-xl font-semibold mb-3">Benefits & Common Uses</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        {benefits.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>

      {tips && tips.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mb-3">Tips & Notes</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {tips.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
