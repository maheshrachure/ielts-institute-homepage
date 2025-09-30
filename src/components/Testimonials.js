import React from "react";
import "./Testimonials.css";
import sarahImg from "../assets/niharika.jpg";
import davidImg from "../assets/mahesh.jpg";
import emilyImg from "../assets/deepthi.jpg";

function Testimonials() {
  const testimonialsData = [
    {
      name: "Sarah Johnson",
      feedback:
        "The mock tests helped me identify my weak areas. Highly recommended!",
      image: sarahImg,
    },
    {
      name: "David Lee",
      feedback:
        "AI band score feature is amazing! I improved my score by 1 band.",
      image: davidImg,
    },
    {
      name: "Emily Clark",
      feedback:
        "Personalized feedback and speaking practice made a huge difference.",
      image: emilyImg,
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
