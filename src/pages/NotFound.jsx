import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-24">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <p className="text-white/60 mb-8">
          A página que você está procurando não existe.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          <FiArrowLeft size={16} />
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
