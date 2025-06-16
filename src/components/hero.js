import React, { useState } from "react";
import "../assets/css/hero.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images
import img3 from "../assets/images/dear departed.jpg";
import img1 from "../assets/images/10.jpg";
import img2 from "../assets/images/11.jpg";
import img4 from "../assets/images/12.jpg";
import img5 from "../assets/images/mr chips.jpg";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const images = [img3, img1, img2, img4, img5];

  return (
    <section className="hero mt-5 mb-3">
      <div className="hero-content">
        <h1>
          Learn <span style={{ color: "#1d3557" }}>today.</span>{" "}
          <span style={{ color: "#1d3557" }}>Lead</span> tomorrow
        </h1>
        <p>
          Gramture is a transformative platform for students seeking to learn
          efficiently and excel academically.
        </p>
        <div className="btn-contact">
          <button className="contact-btn">Contact Now</button>
        </div>
      </div>

      <div className="hero-image">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={800}
          showStatus={false}
          showArrows={true}
          showIndicators={true}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
        >
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index}`} className="carousel-img" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;














// import React, { useState, useEffect } from "react";
// import "../assets/css/hero.css";
// import { FaSearch } from "react-icons/fa";
// import { db } from "../config/firebase";
// import { collection, getDocs } from "firebase/firestore";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// // Import your images
// import img3 from "../assets/images/dear departed.jpg";
// import img1 from "../assets/images/10.jpg";
// import img2 from "../assets/images/11.jpg";
// import img4 from "../assets/images/12.jpg";
// import img5 from "../assets/images/mr chips.jpg";


// const Hero = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const images = [img3, img1, img2, img4, img5 ];

//   return (
//     <section className="hero mt-5 mb-3">
//       <div className="hero-content">
//         <h1>
//           Learn <span style={{ color: "grey" }}>today.</span>{" "}
//           <span style={{ color: "grey" }}>Lead</span> tomorrow
//         </h1>
//         <p>
//           Gramture is a transformative platform for students seeking to learn
//           efficiently and excel academically.
//         </p>

//         <div className="btn-contact">
//           <button className="contact-btn">Contact Now</button>
//         </div>
//       </div>

//       <div className="hero-image">
//        <Carousel
//   showThumbs={false}
//   infiniteLoop={true}
//   autoPlay={true}
//   interval={3000}
//   showStatus={false}
//   showArrows={true}
//   showIndicators={true}
//   stopOnHover={true}
// >
//   {images.map((img, index) => (
//     <div key={index}>
//       <img src={img} alt={`Slide ${index}`} className="carousel-img" />
//     </div>
//   ))}
// </Carousel>

//       </div>
//     </section>
//   );
// };

// export default Hero;









