import React, { useState, useEffect } from 'react';
import '../assets/css/testimonial.css';
import studentImage from '../assets/images/testi.png';
import studentImage2 from '../assets/images/testimo.png';

const testimonials = [
  {
    name: 'Husnain Ali',
    text: 'This platform transformed my learning experience! The interactive lessons and expert guidance made complex topics so easy to understand.'
  },
  {
    name: 'Ayesha Khan',
    text: 'Absolutely love how simple yet effective the learning process has become. Highly recommended for every student!'
  },
  {
    name: 'Ali Raza',
    text: 'A one-stop solution for mastering tough subjects. Thank you for making studying enjoyable again!'
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <div className="heading-wrapper">
          <h2 className="section-heading">What Student's Say</h2>
          <div className="gradient-underline full-width"></div>
        </div>

        <p className="sub-text">
          Hear from our students about how this platform has empowered their learning journey and helped them achieve academic success!
        </p>
      </div>
      <div className="testimonial-flex-wrapper">
        <div className="side-img">
          <img src={studentImage} alt="Student Left" />
        </div>
        <div className="testimonial-content">
          <div className="testimonial-box">
            <h4>{testimonials[currentIndex].name}</h4>
            <p>{testimonials[currentIndex].text}</p>
          </div>
          <div className="dots">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={idx === currentIndex ? 'dot active' : 'dot'}
              ></span>
            ))}
          </div>
        </div>
        <div className="side-img">
          <img src={studentImage2} alt="Student Right" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;









