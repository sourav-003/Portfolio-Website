import React from "react";

const skillCategories = {
  "Programming & Databases": [
    "Python", "Java", "SQL", "MySQL", "MS SQL Server", "MongoDB", "ChromaDB"
  ],
  "Data Science & AI/ML": [
    "EDA", "KPI Reporting", "Statistical Analysis", "A/B Testing", "Hypothesis Testing",
    "Time Series Forecasting (ARIMA, LSTM)", "Predictive Modeling", "Machine Learning",
    "Model Evaluation", "Supervised Learning", "Unsupervised Learning", "Deep Learning",
    "NLP (BERT, VADER)", "Generative AI (LangChain, ChatGPT, Gemini)", 
    "Computer Vision (CNN, OpenCV)", "GANs", "Autoencoders", "Feature Engineering", "SHAP", "LIME"
  ],
  "Libraries & Frameworks": [
    "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Hugging Face Transformers",
    "Matplotlib", "Seaborn", "Plotly", "BeautifulSoup"
  ],
  "BI Tools & Visualization": [
    "Power BI", "Tableau", "Advanced Excel", "DAX", "Power Query", "Dashboard Design", "Ad-hoc Reporting"
  ],
  "MLOps, Deployment & Automation": [
    "Streamlit", "FastAPI", "MLflow", "Docker", "Kubernetes", "Git", "DVC", "ETL Tools"
  ],
  "Cloud & APIs": [
    "AWS", "Azure", "GCP", "OpenAI API", "Dialogflow"
  ],
  "Business & Soft Skills": [
    "Business Acumen", "Data Storytelling", "Stakeholder Communication", 
    "Requirement Gathering", "Team Collaboration"
  ]
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">
          Skills
        </h2>
        <div className="space-y-10">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-blue-200 mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800 bg-opacity-50 py-3 px-5 rounded-xl shadow-lg hover:shadow-blue-500/100 transition-all duration-300 backdrop-blur-sm border border-blue-500 text-center"
                  >
                    <span className="text-base font-medium text-blue-100">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
