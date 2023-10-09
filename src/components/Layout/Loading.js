import React from "react";
import { FaSpinner } from "react-icons/fa";

function Loading() {
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-4xl text-sky-600">
        <FaSpinner className="animate-spin mr-2" />
      </div>
    </div>
  );
}

export default Loading;
