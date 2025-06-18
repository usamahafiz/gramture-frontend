// FeaturedClasses.js
import React from 'react';
import '../assets/css/classes.css'; // Ensure this path is correct
import class9 from '../assets/images/9 class.jpg';
import class10 from '../assets/images/class 10.png';
import class11 from '../assets/images/class 11.png';
import class12 from '../assets/images/class 12.png';

const FeaturedClasses = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="row">
          {/* Left Column */}
          <div className="col text-section">
            <div className="sec">
              <div class="heading-wrapper">
                <h2 class="section-heading">Featured Classes</h2>
                <div class="gradient-underline full-width"></div>
              </div>
              <p className="description">
                Explore expertly crafted courses, tailored content, and interactive tools to empower your learning journey online.Unlock your potential with immersive lessons, real-world applications, and a community that grows with you.
              </p>
            </div>
          </div>

          {/* Right Column with Cards */}
          <div className="col cards-sec">
            <div className="card-grid">
              <div className="class-card down">
                <img src={class9} alt="Class 9" className="class-image" />
                <h3>Class 9</h3>
                <ul>
                  <li>Notes</li>
                  <li>Past Papers</li>
                  <li>Guess Papers</li>
                  <li>MCQs Test</li>
                </ul>
              </div>

              <div className="class-card up">
                <img src={class10} alt="Class 10" className="class-image" />
                <h3>Class 10</h3>
                <ul>
                  <li>Notes</li>
                  <li>Past Papers</li>
                  <li>Guess Papers</li>
                  <li>MCQs Test</li>
                </ul>
              </div>

              <div className="class-card down">
                <img src={class11} alt="Class 11" className="class-image" />
                <h3>Class 11</h3>
                <ul>
                  <li>Notes</li>
                  <li>Past Papers</li>
                  <li>Guess Papers</li>
                  <li>MCQs Test</li>
                </ul>
              </div>

              <div className="class-card up">
                <img src={class12} alt="Class 12" className="class-image" />
                <h3>Class 12</h3>
                <ul>
                  <li>Notes</li>
                  <li>Past Papers</li>
                  <li>Guess Papers</li>
                  <li>MCQs Test</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClasses;




