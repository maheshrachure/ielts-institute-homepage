import React from "react";
import "./Features.css";

function Features() {
  const featuresData = [
    {
      title: "Speaking Practice",
      description: "Get one-on-one speaking sessions with expert trainers.",
      icon: "🗣️",
    },
    {
      title: "Mock Tests",
      description: "Simulate real IELTS exams and track your performance.",
      icon: "📝",
    },
    {
      title: "AI Band Score",
      description: "Get AI-powered band score predictions for every test.",
      icon: "🤖",
    },
    {
      title: "Personalized Feedback",
      description: "Receive detailed tips to improve your weak areas.",
      icon: "📊",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">Our Features</h2>
        <div className="row">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="feature-card h-100">
                <div className="feature-icon">{feature.icon}</div>
                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
