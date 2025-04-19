import React from "react";
import "./Inaugural.css";

const inauguralEvents = [
  {
    title: "Inauguration Ceremony",
    description: "Join us for the grand inauguration ceremony filled with inspiring speeches and celebrations!"
  },
  {
    title: "Story Session",
    description: "A special session where stories are shared to motivate and inspire each other."
  },
];

const Inaugural = () => {
  return (
    <div className="inaugural-container mt-4">
      {inauguralEvents.map((event, index) => (
        <div key={index} className="card inaugural-card mb-3">
          <div className="vertical-bar"></div>
          <div className="card-body">
            <h5 className="card-title music-title">{event.title}</h5>
            <p className="card-text">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inaugural;