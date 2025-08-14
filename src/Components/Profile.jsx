import React from "react";
import profileImg from "../assets/photoSourav.jpg"; // ✅ Profile image
import resumeFile from "../assets/Resume.pdf"; // ✅ Resume PDF

export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center p-6">
      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Sourav Kumar"
        className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
      />

      {/* Name & Title */}
      <h1 className="text-3xl font-bold text-gray-900">Sourav Kumar</h1>
      <h2 className="text-lg text-gray-600 mb-4">
          Data Science & AI Enthusiast | Aspiring Data Analyst
      </h2>

      {/* Tagline */}
      <p className="text-gray-500 italic mb-4">
        Turning data into decisions 🚀
      </p>

      {/* Summary Section */}
      <p className="max-w-2xl text-gray-700 leading-relaxed mb-6">
        I am a passionate Data Science and AI enthusiast with hands-on experience 
        in machine learning, data analysis, and business intelligence tools. 
        Skilled in Python, SQL, Power BI, and cloud platforms, I enjoy solving 
        real-world problems through data-driven insights and building scalable AI solutions. 
        Currently seeking opportunities to apply my skills in impactful projects.
      </p>

      {/* Resume Download Button */}
      <a
        href={resumeFile}
        download="Sourav_Kumar_Resume.pdf"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        📄 Download Resume
      </a>
    </div>
  );
}
