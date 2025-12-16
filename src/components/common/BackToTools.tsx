import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackToTools() {
  return (
    <div className="mb-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
      >
        <FaArrowLeft className="w-4 h-4" />
        Back to Tools
      </Link>
    </div>
  );
}
