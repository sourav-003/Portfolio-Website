import React from "react";

const workExperience = [
  {
    title: "Junior Data Analyst",
    company: "Rare Metals and Chemicals",
    startDate: "Dec 2024",
    endDate: "Present",
    location: "Ranchi, Jharkhand",
    responsibilities: [
      "Automating daily production reports using Python & Excel macros, reducing manual effort by 25%.",
      "Designing interactive Power BI dashboards to monitor yield, material consumption, and batch flow KPIs.",
      "Collaborating with production teams to identify inefficiencies and implement data-backed improvements.",
    ],
    technologies: ["Python", "Excel Macros", "Power BI", "DAX"],
  },
  {
    title: "Data Science Intern",
    company: "LearnVista Pvt Ltd",
    startDate: "Feb 2024",
    endDate: "Oct 2024",
    location: "Remote",
    responsibilities: [
      "Developed ML models for fraud detection and healthcare prediction using Scikit-learn & Pandas.",
      "Applied NLP & Generative AI tools (ChatGPT, Gemini) for sentiment analysis and automated content generation.",
      "Visualized trends using Matplotlib, Seaborn, and Power BI to drive data-driven decision-making.",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Power BI",
      "Matplotlib",
      "Seaborn",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 md:px-8"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">
        Work Experience
      </h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {workExperience.map((job, index) => (
          <article
            key={index}
            className="group relative bg-gray-800 bg-opacity-40 p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-900/20"
          >
            {/* Header: Role & Company */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {job.title}
                </h3>
                <p className="text-lg text-blue-200 font-medium">
                  {job.company}
                </p>
              </div>
              
              {/* Date & Location Tag */}
              <div className="text-right mt-2 md:mt-0">
                <div className="inline-block bg-blue-900/20 border border-blue-500/30 rounded-lg px-3 py-1">
                  <p className="text-sm font-mono text-blue-200">
                    {job.startDate} – {job.endDate}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1 italic text-right">
                  {job.location}
                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-6">
              {job.responsibilities.map((resp, i) => (
                <li key={i} className="text-gray-300 flex items-start text-base">
                  <span className="text-blue-500 mr-3 mt-1.5 text-xs">●</span>
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="border-t border-gray-700 pt-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-gray-900 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-300 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;