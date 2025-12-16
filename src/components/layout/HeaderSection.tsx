import React from "react";
import { FaCoffee } from "react-icons/fa";

const HeaderSection = () => (
  <div className="w-full border-2 border-gray-300 rounded-xl p-3 sm:p-4 md:p-6 mb-10 bg-gray-50 flex flex-col items-center text-center gap-3 sm:gap-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
      Dev Toolkit Central
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1 sm:mt-2">
      A collection of free online developer tools to format, convert, and test your code efficiently.
    </p>

    {/* MOBILE ONLY BUTTON */}
    <div className="block lg:hidden mt-2">
      <a
        href="https://buymeacoffee.com/neeharikakv"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-3 py-2 rounded hover:bg-yellow-500 transition text-sm sm:text-base"
      >
        <FaCoffee className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-semibold">Buy Me a Coffee</span>
      </a>
    </div>
  </div>
);

export default HeaderSection;
