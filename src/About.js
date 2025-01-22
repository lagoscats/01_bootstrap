import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img
          src="https://via.placeholder.com/400"
          alt="About Us"
          className="responsive-image"
        />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          We are a team of passionate developers, designers, and creators
          committed to delivering high-quality solutions. Our goal is to make
          your ideas come to life through innovation and expertise.
        </p>
        <p>
          With years of experience in the industry, we specialize in building
          modern web and mobile applications tailored to your needs. Let’s
          collaborate and create something amazing together.
        </p>
      </div>
    </div>
  );
};

export default About;
