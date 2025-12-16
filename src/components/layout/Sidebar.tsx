import React from "react";

const Sidebar = () => (
  <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-6">
    <div className="lg:sticky lg:top-24 flex flex-col gap-4">
      {/* DESKTOP ONLY BUTTON */}
      <div className="hidden lg:block bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center transition-shadow duration-300 hover:shadow-lg">
        <h3 className="font-semibold mb-2 text-gray-800">Support Me</h3>
        <a
          href="https://buymeacoffee.com/neeharikakv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
        >
          Buy Me a Coffee ☕
        </a>
      </div>

      {/* Advertisement */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center mt-4 sm:mt-6 transition-shadow duration-300 hover:shadow-lg">
        <h3 className="font-semibold mb-2 text-gray-800">Advertisement</h3>
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-500">Ad Space</span>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
