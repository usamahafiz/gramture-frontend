import React from 'react';
import { Row, Col, Image } from 'antd';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from '../assets/images/owner.webp';
import aboutImg from '../assets/images/about.webp';
import "../assets/css/about.css";

const About = () => {
  return (
    <div className='about-section' id='about'>
      <div className="container">
        {/* === Welcome Section === */}
        <div className="section-container welcome-section">
          <h2 className="section-title">Welcome to the Gramture Platform!</h2>
          <Row gutter={[30, 30]}>
            <Col xs={24} md={16}>
              <div className="about-grammar-content">
                <p>
                  Gramture is a revolutionary platform designed to make learning grammar and language structures simpler and more approachable. Whether you're a student, teacher, or lifelong learner, our platform offers a wide range of resources that aim to enhance your understanding of grammar in an easy-to-understand way.
                </p>
                <p>
                  Gramture, a blend of the words <span className="highlight">Grammar</span> and <span className="highlight">Structure</span>, symbolizes a modern approach to education. Our platform simplifies grammar concepts, enabling better communication skills.
                </p>
                <p>
                  We offer comprehensive study materials, practice exercises, and interactive tools to make grammar learning effective and fun.
                </p>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <Image
                src={aboutImg}
                alt="About Gramture"
                className="about-image"
              />
            </Col>
          </Row>
        </div>

        {/* === CEO Section === */}
        <div className="section-container ceo-section">
          <h2 className="section-title">Meet Our Founder</h2>
          <Row gutter={[30, 30]}>
            <Col xs={24} md={8}>
              <Image
                src={myImage}
                alt='Habib Ahmad Khan'
                className="ceo-image"
              />
              <h4 className="text-center fw-bold">Habib Ahmad Khan</h4>
              <p className="text-center mb-1">Founder & CEO of Gramture</p>
              <p className="text-center small mb-2">
                At Gramture, we're redefining how grammar is taught.
              </p>
              <div className="social-icons">
                <a href="https://www.facebook.com/Gramture" target="_blank" rel="noreferrer" className="facebook"><FaFacebook /></a>
                <a href="https://twitter.com/Gramture" target="_blank" rel="noreferrer" className="twitter"><FaTwitter /></a>
                <a href="https://www.instagram.com/gramture/" target="_blank" rel="noreferrer" className="instagram"><FaInstagram /></a>
                <a href="https://www.youtube.com/@gramture" target="_blank" rel="noreferrer" className="youtube"><FaYoutube /></a>
                <a href="https://wa.me/+923036660025" target="_blank" rel="noreferrer" className="whatsapp"><FaWhatsapp /></a>
              </div>
            </Col>
            <Col xs={24} md={16}>
              <div className="ceo-message">
                <h3 className="fw-bold mb-3">A Message from Our CEO</h3>
                <p>
                  We're not just another platform; Gramture is a movement. Our mission is to empower every learner with the tools they need to master grammar, develop communication skills, and build their confidence in using language effectively.
                </p>
                <p>
                  Through innovative learning methods, personalized study paths, and high-quality content, we are changing the way grammar is perceived and learned. We invite you to be part of this exciting journey.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        {/* === Features Section === */}
        <div className="section-container features-section">
          <h2 className="section-title">Explore Our Exclusive Features</h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={6}>
              <div className="feature-card">
                <h5 className="fw-bold">🌟 Topper Choice Notes</h5>
                <p>Gain access to expertly curated notes used by top scorers to ensure you ace your exams with ease!</p>
                <Link to="/" className="btn">Explore Now</Link>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="feature-card">
                <h5 className="fw-bold">📝 Board Pattern Tests</h5>
                <p>Take board-patterned tests, get certified, and boost your readiness for upcoming exams!</p>
                <Link to="/s" className="btn">Explore Now</Link>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="feature-card">
                <h5 className="fw-bold">💬 Expert Faculty Forum</h5>
                <p>Join our interactive forum and engage with expert faculty to clear grammar doubts!</p>
                <Link to="/discussion_forum" className="btn">Join Now</Link>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="feature-card">
                <h5 className="fw-bold">🎓 Top Marks Tips</h5>
                <p>Learn time-tested strategies to secure the highest marks across all subjects.</p>
                <Link to="/" className="btn">Explore Now</Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;