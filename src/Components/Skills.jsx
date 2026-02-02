import React from "react";

const skillCategories = {
  "Generative AI & NLP": [
    "RAG Pipelines", "LangChain", "LangGraph", "LLM APIs (Gemini/OpenAI)", 
    "ChromaDB (Vector DB)", "Prompt Engineering", "BERT", "Transformers"
  ],
  "Deep Learning & Computer Vision": [
    "TensorFlow", "Keras", "CNN & Transfer Learning", "EfficientNet", 
    "OpenCV", "GANs", "Autoencoders", "Image Processing"
  ],
  "Machine Learning & Data Science": [
    "Scikit-learn", "XGBoost", "Predictive Modeling", "Time Series (ARIMA/LSTM)", 
    "A/B Testing", "SHAP (XAI)", "Feature Engineering", "Hypothesis Testing"
  ],
  "MLOps & Deployment": [
    "Docker", "Kubernetes", "FastAPI", "Streamlit", 
    "MLflow", "Git & GitHub", "Gradio", "Hugging Face Spaces"
  ],
  "Languages & Databases": [
    "Python", "SQL", "NoSQL (MongoDB)", "MySQL", "MS SQL Server"
  ],
  "Visualization & Analytics": [
    "Power BI", "Tableau", "Pandas", "Matplotlib", "Seaborn", "Plotly", "DAX"
  ]
};

const Skills = () => {
  return (
    <section
      id="skills"
      // OPTIMIZATION: Changed 'to-gray-900' to 'to-black' for better visual depth
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">
          Technical Skills
        </h2>
        <div className="space-y-10">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-blue-200 mb-6 border-b border-blue-500/30 pb-2 inline-block">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    // OPTIMIZATION: Added 'hover:-translate-y-1' for a lift effect
                    className="bg-gray-800 bg-opacity-40 py-3 px-4 rounded-lg shadow-md hover:shadow-blue-500/50 hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 border border-gray-700 hover:border-blue-400 text-center flex items-center justify-center min-h-[60px]"
                  >
                    <span className="text-sm font-medium text-gray-200">
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