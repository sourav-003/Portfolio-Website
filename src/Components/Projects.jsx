import React from "react";

import ChatbotImg from "../assets/ChatbotImg.png";
import CarPriceImg from "../assets/CarPriceImg.png";
import EcommerceImg from "../assets/EcommerceImg.png";
import emocareImg from "../assets/emocareImg.png";
import CreditfraudImg from "../assets/CreditfraudImg.png";
import SmartECGImg from "../assets/SmartECGImg.png";
import PdfBotImg from "../assets/PdfBotImg.png";
import SchedulerImg from "../assets/SchedulerImg.png";

function Projects() {
  const projects = [
    {
      title: "Intelligent PDF Summarizer & QA Bot",
      image: PdfBotImg,
      description:
        "RAG-based agent that reads PDFs (including scans) to summarize & answer queries with citations.",
      tech: ["LangChain", "Gemini 2.5", "FAISS", "OCR", "Gradio"],
      features: [
        "Built a RAG pipeline using FAISS & SentenceTransformers for semantic retrieval.",
        "Integrated Tesseract OCR to extract text from scanned image-based documents.",
        "Delivers grounded Q&A with strict page-level citations using Gemini 2.5.",
      ],
      liveLink: "https://huggingface.co/spaces/Sourav-003/PDF-Analyst-Bot",
      sourceLink: "https://github.com/sourav-003/PDF-Analyst-Bot",
    },
    {
      title: "AI Patient Scheduling Assistant",
      image: SchedulerImg,
      description:
        "Stateful conversational agent that automates patient bookings with smart scheduling logic.",
      tech: ["LangGraph", "Gemini Flash", "Google Calendar API", "SQLite"],
      features: [
        "Engineered a stateful LangGraph agent to handle complex booking flows & patient memory.",
        "Integrated Google Calendar API for real-time availability checks & smart slot allocation.",
        "Includes a secure Admin Dashboard & automated email confirmations via SMTP.",
      ],
      liveLink: "https://huggingface.co/spaces/Sourav-003/ai-patient-scheduler",
      sourceLink: "https://github.com/sourav-003/ai-patient-scheduler",
    },
    {
      title: "SmartECG: Cardiac & COVID-19 Detection",
      image: SmartECGImg,
      description:
        "AI diagnostic tool classifying cardiac conditions & COVID-19 from ECG images using Deep Learning.",
      tech: ["TensorFlow", "EfficientNet", "Grad-CAM", "AutoML"],
      features: [
        "Classifies 5 conditions (COVID-19, MI, Abnormal) using CNNs & Transfer Learning (EfficientNet).",
        "Integrates Explainable AI (Grad-CAM) to visualize critical ECG regions for medical validation.",
        "Utilizes AutoML for hyperparameter optimization and Transfer Learning for robust accuracy.",
      ],
      liveLink: "https://huggingface.co/spaces/Sourav-003/SmartECG",
      sourceLink: "https://github.com/sourav-003/SmartECG",
    },
    {
      title: "Conversational RAG Chatbot",
      image: ChatbotImg,
      description:
        "Session-aware GenAI chatbot with memory, RAG-based retrieval, and live web lookup.",
      tech: ["LangChain", "Gemini 2.5", "ChromaDB", "Gradio"],
      features: [
        "Integrated Gemini + LangChain with persistent memory (SQLite).",
        "Implemented retrieval-augmented generation with ChromaDB.",
        "Deployed interactive app on Hugging Face Spaces.",
      ],
      liveLink: "https://huggingface.co/spaces/Sourav-003/my-chatbot-space",
      sourceLink: "https://github.com/sourav-003/Chatbot",
    },
    {
      title: "Credit Card Approval Prediction",
      image: CreditfraudImg,
      description:
        "Automated credit risk assessment system using XGBoost & Gradio.",
      tech: ["XGBoost", "Gradio", "SMOTE", "Python"],
      features: [
        "Optimized XGBoost Classifier handling class imbalance with SMOTE.",
        "Achieved ~95% training accuracy and >0.85 ROC-AUC score.",
        "Deployed an interactive web interface using Gradio for real-time risk scoring.",
      ],
      liveLink: "https://github.com/sourav-003/Credit-Card-Approval-Prediction-System",
      sourceLink: "https://github.com/sourav-003/Credit-Card-Approval-Prediction-System",
    },
    {
      title: "Emocare: Mental Health AI",
      image: emocareImg,
      description:
        "AI-driven NLP analysis to identify mental health trends in cancer survivors.",
      tech: ["Python", "NLP", "Scikit-learn"],
      features: [
        "Implemented text preprocessing & cleaning pipelines.",
        "Utilized TF-IDF vectorization for feature extraction.",
        "Analyzed emotional patterns to aid vulnerable groups.",
      ],
      liveLink: "https://huggingface.co/Sourav-003/mental-health-sentiment-biomedbert",
      sourceLink: "https://github.com/sourav-003/EmoCare-Sentiment-Analyzer-Resource-Recommender",
    },
    {
      title: "Used Car Price Predictor",
      image: CarPriceImg,
      description:
        "Machine Learning regression model to estimate market value of used vehicles.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Streamlit"],
      features: [
        "Trained Random Forest & XGBoost regressors on vehicle data.",
        "Engineered features and handled categorical data using One-Hot Encoding.",
        "Achieved high precision (R2 Score ~0.89) and deployed via Streamlit.",
      ],
      liveLink: "https://github.com/sourav-003/Used-Car-Price-Prediction",
      sourceLink: "https://github.com/sourav-003/Used-Car-Price-Prediction",
    },
    {
      title: "E-commerce Data Analytics",
      image: EcommerceImg,
      description: "End-to-end solution for e-commerce sales & trend analysis.",
      tech: ["MySQL", "Python", "Power BI"],
      features: [
        "Normalized relational schema for raw data.",
        "Wrote SQL queries for revenue KPIs.",
        "Built Power BI dashboards with slicers & visuals.",
      ],
      liveLink: "https://github.com/sourav-003/ecommerce-data-analysis",
      sourceLink: "https://github.com/sourav-003/ecommerce-data-analysis",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-16 px-4 md:px-8"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">
        Projects
      </h2>
      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/100 transition-all duration-300 backdrop-blur-sm border border-blue-500/10"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <img
                  src={
                    Array.isArray(project.image)
                      ? project.image[0]
                      : project.image
                  }
                  alt={project.title}
                  className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tech stack as badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-blue-600 bg-opacity-20 text-blue-300 text-sm px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="list-none space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                        Live Demo
                      </button>
                    </a>
                  )}
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300">
                      Source Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;