import React, { useState } from "react";
import "../styles/skills.css";

function Skills() {
  const [expanded, setExpanded] = useState(null); // Store the index of the expanded box

  // Categories and skills data
  const skillCategories = [
    { category: "Programming Languages", skills: "Python, C, Java, MySQL" },
    {
      category: "Web Development",
      skills: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, Django, Flask",
    },
    { category: "Tools", skills: "VS Code, Google Colab, GitHub, SQL Workbench, Eclipse" },
    {
      category: "Libraries",
      skills: "Scikit-Learn, Pandas, NumPy, Matplotlib, PyTorch, Keras, Ultralytics, TensorFlow, OpenCV",
    },
    {
      category: "Predictive Modeling",
      skills: "Regression, Classification, Clustering, Augmentation",
    },
    {
      category: "Deep Learning",
      skills: "CNNs, RNNs, Transfer Learning, Data Preprocessing, Model Optimization",
    },
    {
      category: "Soft Skills",
      skills: "Critical Thinking, Team Leadership, Problem Solving, Communication Skills",
    },
    {
      category: "APIs",
      skills: "OpenWeatherMap API, Google Maps API, REST APIs, GraphQL, TensorFlow.js",
    },
  ];

  // Toggle dropdown visibility for a specific box
  const toggleDropdown = (index) => {
    setExpanded((prev) => (prev === index ? null : index)); // Close if already open, otherwise expand
  };

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((item, index) => (
          <div key={index} className="skills-card">
            <div
              className="skills-header"
              onClick={() => toggleDropdown(index)}
            >
              <strong>{item.category}</strong>
              <span className={`arrow ${expanded === index ? "expanded" : ""}`}>
                {expanded === index ? "▲" : "▼"}
              </span>
            </div>
            {expanded === index && (
              <div className="skills-content">
                {item.skills}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

