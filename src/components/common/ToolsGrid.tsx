import React from "react";
import { Link as RouterLink } from "react-router-dom";

export interface Tool {
  title: string;
  desc: string;
  path: string;
  icon: string;
}

interface ToolsGridProps {
  tools: Tool[];
}

const ToolsGrid: React.FC<ToolsGridProps> = ({ tools }) => (
  <div className="lg:col-span-3 grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
    {tools.map((tool) => (
      <div
        key={tool.path}
        className="group relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105 p-4 sm:p-6 flex flex-col justify-between"
      >
        <div className="text-4xl mb-4">{tool.icon}</div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition">
          {tool.title}
        </h2>
        <p className="text-gray-600 mb-4 sm:mb-6">{tool.desc}</p>
        <RouterLink
          to={tool.path}
          className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center font-medium shadow-sm hover:shadow-md transition"
        >
          Open Tool →
        </RouterLink>
      </div>
    ))}
  </div>
);

export default ToolsGrid;
