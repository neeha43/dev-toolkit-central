import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  keywords?: string;
  structuredData?: object;
  faqData?: Array<{ question: string; answer: string }>;
}

const BASE_URL = "https://devtools.lovable.app";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export const SEOHead = ({
  title,
  description,
  canonicalPath = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  keywords,
  structuredData,
  faqData,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        const [attrName, attrValue] = selector.match(/\[([^\]]+)\]/)?.[1].split("=") || [];
        if (attrName && attrValue) {
          tag.setAttribute(attrName, attrValue.replace(/"/g, ""));
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute(attribute, content);
    };

    // Basic meta tags
    updateMetaTag('meta[name="description"]', "content", description);
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', "content", keywords);
    }

    // Open Graph tags
    updateMetaTag('meta[property="og:title"]', "content", title);
    updateMetaTag('meta[property="og:description"]', "content", description);
    updateMetaTag('meta[property="og:type"]', "content", ogType);
    updateMetaTag('meta[property="og:url"]', "content", `${BASE_URL}${canonicalPath}`);
    updateMetaTag('meta[property="og:image"]', "content", ogImage);
    updateMetaTag('meta[property="og:site_name"]', "content", "DevTools");

    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', "content", "summary_large_image");
    updateMetaTag('meta[name="twitter:title"]', "content", title);
    updateMetaTag('meta[name="twitter:description"]', "content", description);
    updateMetaTag('meta[name="twitter:image"]', "content", ogImage);

    // Canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", `${BASE_URL}${canonicalPath}`);

    // WebApplication structured data
    if (structuredData) {
      let scriptTag = document.querySelector('script[data-structured-data="tool"]');
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        scriptTag.setAttribute("data-structured-data", "tool");
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    // FAQ structured data
    if (faqData && faqData.length > 0) {
      let faqScriptTag = document.querySelector('script[data-structured-data="faq"]');
      if (!faqScriptTag) {
        faqScriptTag = document.createElement("script");
        faqScriptTag.setAttribute("type", "application/ld+json");
        faqScriptTag.setAttribute("data-structured-data", "faq");
        document.head.appendChild(faqScriptTag);
      }

      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };

      faqScriptTag.textContent = JSON.stringify(faqSchema);
    }

    // Cleanup on unmount
    return () => {
      const toolScript = document.querySelector('script[data-structured-data="tool"]');
      if (toolScript) toolScript.remove();
      const faqScript = document.querySelector('script[data-structured-data="faq"]');
      if (faqScript) faqScript.remove();
    };
  }, [title, description, canonicalPath, ogImage, ogType, keywords, structuredData, faqData]);

  return null;
};

// Helper to generate WebApplication schema
export const generateToolSchema = (
  name: string,
  description: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description,
  url,
  browserRequirements: "Requires JavaScript",
  softwareVersion: "1.0",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
});

// Helper to generate Organization schema
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevTools",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: "Free online developer tools and utilities",
  sameAs: [],
});

export default SEOHead;
