import React from "react";

const workExperience = [
  {
    title: "Junior Data Analyst",
    company: "Rare Metals and Chemicals",
    startDate: "Feb 2025",
    endDate: "Feb 2026",
    location: "Ranchi, Jharkhand",
    responsibilities: [
      "Automated daily and monthly production reports using Python and Excel macros, streamlining workflows and reducing manual effort by 25% through script-based data processing.",
      "Designed interactive dashboards in Excel and Power BI to monitor KPIs like yield, material consumption, and batch-wise flow, enabling real-time insights.",
      "Partnered with process and production engineering teams to diagnose operational inefficiencies, deploying data-backed strategies that directly enhanced manufacturing output and product quality.",
    ],
    technologies: ["Python", "Excel Macros", "Power BI", "DAX", "Data Analytics"],
  },
  {
    title: "Data Science Intern",
    company: "LearnVista Pvt Ltd",
    startDate: "July 2024",
    endDate: "Jan 2025",
    location: "Remote",
    responsibilities: [
      "Engineered and deployed ML models for fraud detection, healthcare prediction, and recommendation systems, utilizing Python, Scikit-learn, and Pandas on complex datasets to drive actionable insights.",
      "Implemented advanced NLP techniques and generative AI models like ChatGPT and Gemini to automate sentiment analysis, keyword extraction, and scalable prompt-based content generation.",
      "Developed interactive Power BI dashboards and visualized complex trends using Matplotlib, Seaborn, and Excel to accelerate executive data-driven decision-making.",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "NLP",
      "Generative AI"
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