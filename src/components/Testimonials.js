import React from "react";
import "./Testimonials.css";
import niharika from "../assets/niharika.jpg";
import mahesh from "../assets/mahesh.jpg";
import deepthi from "../assets/deepthi.jpg";

function Testimonials() {
  const testimonialsData = [
    {
      name: "Niharika MN",
      feedback:
        "The mock tests helped me identify my weak areas. Highly recommended!",
      image: niharika,
    },
    {
      name: "Mahesh Rachure",
      feedback:
        "AI band score feature is amazing! I improved my score by 1 band.",
      image: mahesh,
    },
    {
      name: "Deepthi Sharma",
      feedback:
        "Personalized feedback and speaking practice made a huge difference.",
      image: deepthi,
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Student Testimonials</h2>
        <div className="row">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="testimonial-card p-4 text-center h-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                />
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <h6 className="testimonial-name mt-2">{testimonial.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
