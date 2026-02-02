import React from "react";

const Education = () => {
  const education = [
    {
      id: 1,
      institution: "Microsoft Certified",
      degree: "Azure Fundamentals (AZ-900)",
      years: "May 2025",
      desc: "Covered cloud concepts, Azure services, deployment models, and cloud security.",
    },
    {
      id: 2,
      institution: "IBM",
      degree: "Advanced Data Science & AI Specialization",
      years: "Apr 2025",
      desc: "Focused on Python, Machine Learning, Deep Learning, GenAI, and Data Science methodology.",
    },
    {
      id: 3,
      institution: "Learnbay",
      degree: "Tableau & Power BI Certification",
      years: "Nov 2024",
      desc: "Hands-on training with dashboarding, DAX, Power Query, and data storytelling.",
    },
    {
      id: 4,
      institution: "I.K. Gujral Punjab Technical University (Main Campus)",
      degree: "B.Tech in Computer Science and Engineering",
      years: "Jul 2020 - Jun 2024",
      desc: "Graduated with 75%. Built strong foundations in Data Structures, Algorithms, and Core CS concepts.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-300">
          Education & Certifications
        </h2>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="relative pl-8 border-l-4 border-blue-500/30 hover:border-blue-400 transition-colors duration-300"
            >
              {/* Dot on the timeline */}
              <div className="absolute -left-[11px] top-0 bg-gray-900 border-4 border-blue-500 w-5 h-5 rounded-full"></div>

              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm shadow-md hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {edu.institution}
                  </h3>
                  <span className="text-blue-300 font-mono text-sm bg-blue-500/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    {edu.years}
                  </span>
                </div>
                <h4 className="text-lg text-blue-200 mb-3">{edu.degree}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;