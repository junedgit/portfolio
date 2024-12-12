import React from "react";

const Professional = () => {
  return (
    <div className="  pb-10 flex justify-center items-center flex-col ">
      <h1 className="sm:text-4xl text-3xl font-bold text-center pb-6">
        Professional <span className="text-purple">History</span>
      </h1>
      <div className="w-full max-w-2xl bg-white/10 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple/90 mb-1">
            Software Intern
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            EdTech Startup | sep-2024
          </p>

          <ul className="list-disc list-inside opacity-80 font-semibold">
            <li>Worked on Frontend and Backend Repository.</li>
            <li>Added new feature for the existing project.</li>
            <li>Practiced Git and GitHub.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Professional;
