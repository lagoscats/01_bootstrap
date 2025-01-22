import React from "react";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and dynamic websites.",
    image: require("./pexels-onorblog.jpg"),
  },
  {
    id: 2,
    title: "Design",
    description: "Creating modern and user-friendly designs.",
    image: require("./train-station.jpg"),
  },
  {
    id: 3,
    title: "Marketing",
    description: "Boost your business with targeted marketing strategies.",
    image: require("./young_woman.jpg"),
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {services.map((service) => (
        <div className="service-card" key={service.id}>
          <img src={service.image} alt={service.title} className="service-image" />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
