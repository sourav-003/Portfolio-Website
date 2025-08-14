import React from "react";

const workExperience = [
  {
    title: "Junior Data Analyst",
    company: "Rare Metals and Chemicals",
    role: "Role & Responsibilities",
    responsibilities: [
      "Automated daily and monthly production reports using Python scripts and Excel macros, reducing manual effort by 25%.",
      "Designed and deployed interactive dashboards in Excel and Power BI to monitor KPIs such as yield, material consumption, and batch flow.",
      "Collaborated with process and production teams to identify inefficiencies and implement data-backed improvements, enhancing output and quality.",
    ],
    startDate: "Jun 2024",
    endDate: "Jun 2025",
    location: "Ranchi, Jharkhand",
    technologies: ["Python", "Excel Macros", "Power BI", "DAX"],
  },
  {
    title: "Data Science Intern",
    company: "LearnVista Pvt Ltd",
    role: "Role & Responsibilities",
    responsibilities: [
      "Developed and deployed ML models for fraud detection, healthcare prediction, and recommendation systems using Python, Scikit-learn, and Pandas.",
      "Applied NLP techniques and Generative AI tools (ChatGPT, Gemini) for sentiment analysis, keyword extraction, and automated content generation.",
      "Created Power BI dashboards and visualized trends with Matplotlib, Seaborn, and Excel to support data-driven decision-making.",
    ],
    startDate: "Jan 2024",
    endDate: "Jun 2024",
    location: "Remote",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "Excel",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-16 px-4 md:px-8"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-300">
        Work Experience
      </h2>
      <div className="space-y-12 max-w-5xl mx-auto">
        {workExperience.map((job, index) => (
          <article
            key={index}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/100 transition-all duration-300 backdrop-blur-sm border border-blue-500/10"
          >
            <h3 className="text-3xl font-semibold text-blue-300">{job.title}</h3>
            <p className="text-xl text-blue-200 mt-2">{job.company}</p>
            <p className="mt-2 text-sm text-blue-400">
              {job.startDate} – {job.endDate}
            </p>
            {job.location && (
              <p className="text-sm text-blue-400">{job.location}</p>
            )}

            {/* Responsibilities */}
            <div className="mt-6">
              <h4 className="font-semibold text-lg text-blue-300">
                {job.role}
              </h4>
              <ul className="list-none mt-3 space-y-2">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mt-6">
              <h4 className="font-semibold text-lg text-blue-300">
                Technologies Used
              </h4>
              <ul className="flex flex-wrap gap-3 mt-3">
                {job.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm text-blue-200 hover:bg-blue-600 transition-colors duration-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
