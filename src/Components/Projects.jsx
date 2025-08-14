import React from "react";
import HealthcareImg from "../assets/Healthcare.png";
import Healthcare2Img from "../assets/Healthcare2.png";
import ChatbotImg from "../assets/Chatbot.png";
import EcommerceImg from "../assets/Ecommerce.png";
import FootballImg from "../assets/Football.png";
import sentimentImg from "../assets/sentiment.png";
import sentiment1Img from "../assets/sentiment1.png";
import sentiment2Img from "../assets/sentiment2.png";
import EmergencyImg from "../assets/Emergency.png";
import blinkitImg from "../assets/blinkit.png";
import CreditfraudImg from "../assets/Creditfraud.png";

function Projects() {
  const projects = [
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
      title: "Emergency Vehicle Image Classification",
      image: EmergencyImg,
      description:
        "Deep learning models to classify emergency vs. non-emergency vehicles (92% accuracy).",
      tech: ["TensorFlow", "CNN", "MobileNetV2"],
      features: [
        "Trained CNN + MobileNetV2 using transfer learning.",
        "Used data augmentation and class balancing.",
        "Validated across real-world scenarios.",
      ],
      liveLink:
        "https://github.com/sourav-003/Emergency-Vehicle-Image-Classification",
      sourceLink:
        "https://github.com/sourav-003/Emergency-Vehicle-Image-Classification",
    },
    {
      title: "Healthcare Cost & Risk Analysis",
      image: [HealthcareImg, Healthcare2Img],
      description:
        "Analyzed healthcare datasets for cost patterns, payer categories & risk scores.",
      tech: ["SQL", "Power BI", "DAX"],
      features: [
        "Executed complex SQL joins & aggregations.",
        "Built KPI dashboards with Power BI.",
        "Identified cost-saving opportunities.",
      ],
      liveLink: "https://github.com/sourav-003/Healthcare-data-analysis",
      sourceLink: "https://github.com/sourav-003/Healthcare-data-analysis",
    },
    {
      title: "Blinkit Quick-Commerce Analysis",
      image: blinkitImg,
      description:
        "Analyzed sales & inventory data to optimize supply chain & pricing.",
      tech: ["MySQL", "Data Analysis"],
      features: [
        "Designed MySQL schema with joins, views & CTEs.",
        "Detected anomalies in pricing & inventory.",
        "Generated SKU & city-level sales insights.",
      ],
      liveLink:
        "https://github.com/sourav-003/Dcluttr-Blinkit-Analysis-Project",
      sourceLink:
        "https://github.com/sourav-003/Dcluttr-Blinkit-Analysis-Project",
    },
    {
      title: "Credit Card Fraud Detection",
      image: CreditfraudImg,
      description:
        "ML models for fraud detection with class imbalance handling.",
      tech: ["Python", "Scikit-learn", "SMOTE"],
      features: [
        "Trained Logistic Regression & Random Forest on 100K+ records.",
        "Balanced classes with SMOTE.",
        "Achieved ROC-AUC 0.93; reduced false positives 18%.",
      ],
      liveLink: "https://github.com/sourav-003/credit-card-fraud-detection",
      sourceLink: "https://github.com/sourav-003/credit-card-fraud-detection",
    },
    {
      title: "E-commerce Data Analytics",
      image: EcommerceImg,
      description:
        "End-to-end solution for e-commerce sales & trend analysis.",
      tech: ["MySQL", "Python", "Power BI"],
      features: [
        "Normalized relational schema for raw data.",
        "Wrote SQL queries for revenue KPIs.",
        "Built Power BI dashboards with slicers & visuals.",
      ],
      liveLink: "https://github.com/sourav-003/ecommerce-data-analysis",
      sourceLink: "https://github.com/sourav-003/ecommerce-data-analysis",
    },
    {
      title: "Political Speech Sentiment Analysis",
      image: [sentimentImg, sentiment1Img, sentiment2Img],
      description:
        "NLP pipeline analyzing sentiment progression in political speeches.",
      tech: ["Python", "NLTK", "VADER"],
      features: [
        "Preprocessed & tokenized large speech corpus.",
        "Applied sentiment scoring & WordClouds.",
        "Delivered statistical insights on emotional shifts.",
      ],
      liveLink: "https://github.com/sourav-003/PM-Sentiment-Analysis-Project",
      sourceLink:
        "https://github.com/sourav-003/PM-Sentiment-Analysis-Project",
    },
    {
      title: "Football Match Analytics",
      image: FootballImg,
      description:
        "SQL-based pipeline for analyzing international football matches.",
      tech: ["SQL", "Data Cleaning", "CTEs"],
      features: [
        "Designed relational schema with PK/FKs.",
        "Used CTEs & ranking functions for KPIs.",
        "Generated insights on scoring & winning patterns.",
      ],
      liveLink: "https://github.com/sourav-003/Football-Analysis-Project",
      sourceLink: "https://github.com/sourav-003/Football-Analysis-Project",
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
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                      Live Demo
                    </button>
                  </a>
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
