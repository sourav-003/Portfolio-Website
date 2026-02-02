import React from "react";
import profileImg from "../assets/photoSourav.jpg"; // Ensure path is correct
import resumeFile from "../assets/Resume.pdf"; // Ensure path is correct

export default function Profile() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 pt-20 md:pt-0"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left space-y-6 animate-fade-in">
          <p className="text-blue-400 font-medium text-lg tracking-wide">
            👋 Hello, I am
          </p>
          
          {/* Name with Gradient Text Effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            <span className="gradient-text">Sourav Kumar</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold">
            Data Science & AI Enthusiast
          </h2>
          
          <p className="text-gray-400 text-lg italic border-l-4 border-blue-500 pl-4">
            "Turning data into decisions | Building intelligent solutions"
          </p>

          <p className="text-gray-400 leading-relaxed text-lg max-w-lg mx-auto md:mx-0">
            Passionate about solving real-world problems through Machine Learning, 
            NLP, and Data Analytics. Skilled in Python, SQL, and Power BI, 
            I build scalable AI solutions that drive impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href={resumeFile}
              download="Sourav_Kumar_Resume.pdf"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition duration-300 flex items-center justify-center"
            >
              📄 Download Resume
            </a>
            <a
              href="#contacts"
              className="px-8 py-3 border border-blue-500 text-blue-400 font-bold rounded-full hover:bg-blue-500/10 transition duration-300 flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex justify-center md:justify-end animate-zoom-in">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glowing Ring Effect behind image */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            
            <img
              src={profileImg}
              alt="Sourav Kumar"
              className="relative w-full h-full rounded-full object-cover border-4 border-gray-800 shadow-2xl hover:border-blue-500 transition-colors duration-300"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}