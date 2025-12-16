import { Helmet } from "react-helmet-async";
import BackToTools from "@/components/common/BackToTools";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <BackToTools />
      <Helmet>
        <title>About Dev Toolkit Central</title>
        <meta
          name="description"
          content="Learn more about Dev Toolkit Central, a free online platform offering practical and privacy-friendly developer tools."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">About Dev Toolkit Central</h1>

      <p className="mb-4 text-gray-700">
        Dev Toolkit Central is a free online platform built for developers, students, and anyone working with code. 
        Our mission is simple: to provide a collection of practical, lightweight, and easy-to-use tools that help you work faster and smarter.
      </p>

      <p className="mb-4 text-gray-700">
        The platform brings together commonly used developer utilities in one place. From formatting JSON, HTML, CSS, and JavaScript, 
        to testing regular expressions, encoding and decoding data, or converting timestamps, our goal is to save your time and streamline repetitive tasks.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Why Dev Toolkit Central Exists</h2>

      <p className="mb-4 text-gray-700">
        As developers ourselves, we noticed that the web is full of scattered tools that are often outdated, cluttered, or slow. 
        Some websites even request unnecessary permissions or collect personal data, which can be frustrating and unsafe. 
        Dev Toolkit Central solves these problems by providing browser-based tools that run locally, without sending your data anywhere.
      </p>

      <p className="mb-4 text-gray-700">
        We focus on speed, simplicity, and privacy. Each tool is designed to perform its function efficiently while maintaining a clean and responsive user interface. 
        Our platform is constantly evolving, with new tools and improvements added based on user feedback and modern development needs.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Who Can Benefit</h2>

      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>Professional developers looking for quick utilities</li>
        <li>Students learning coding or web development</li>
        <li>Software engineers working with APIs, JSON, or front-end frameworks</li>
        <li>Anyone who regularly manipulates code or data formats</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Our Technology Approach</h2>

      <p className="mb-4 text-gray-700">
        Dev Toolkit Central is a frontend-only application built using modern web technologies like React, TypeScript, and Vite. 
        All tools execute locally in your browser, meaning there’s no backend server storing or processing your data. 
        This approach ensures privacy, speed, and reliability.
      </p>

      <p className="mb-4 text-gray-700">
        Our tools are mobile-friendly, responsive, and optimized for both desktop and mobile browsers. 
        We aim to create a consistent and professional user experience that makes development tasks easier, whether you’re on a laptop or a tablet.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Our Vision</h2>

      <p className="mb-4 text-gray-700">
        We envision Dev Toolkit Central as the go-to platform for online developer tools — a reliable, ad-free, and privacy-conscious resource for coders worldwide. 
        By keeping the platform lightweight and browser-focused, we ensure that every tool is fast, intuitive, and accessible.
      </p>

      <p className="mb-4 text-gray-700">
        Whether you are learning, experimenting, or working professionally, Dev Toolkit Central provides the tools you need without distractions, ads (except for unobtrusive AdSense), or unnecessary complexity.
      </p>
    </main>
  );
}
