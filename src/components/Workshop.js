import React from "react";
import "./Workshop.css";

const workshops = [
  {
    title: "Art Workshop",
    description: "Explore various artistic techniques and create beautiful artworks."
  },
  {
    title: "Origami Workshop",
    description: "Learn the ancient art of paper folding and create stunning origami pieces."
  },
  {
    title: "Zumba Workshop",
    description: "Get your groove on with fun dance moves and great music!"
  },
  {
    title: "Inspire to Revive",
    description: "A motivational workshop to help you reconnect with your inner self."
  },
  {
    title: "Uninked Poetry",
    description: "Express yourself through the art of spoken and written poetry."
  },
  {
    title: "Humdrum",
    description: "Transform the ordinary into extraordinary through creative activities."
  },
  {
    title: "Mandala Art",
    description: "Create intricate designs and explore the meditative practice of mandala art."
  },
  {
    title: "Art of Bleach and Thread: Bleach Workshop",
    description: "Discover how to create unique art using bleach and threading techniques."
  },
];

const Workshop = () => {
  return (
    <div className="workshop-container mt-4">
      {workshops.map((workshop, index) => (
        <div
          key={index}
          className="card workshop-card mb-3"
        >
          <div className="vertical-bar"></div>
          <div className="card-body">
            <h5 className="card-title music-title">{workshop.title}</h5>
            <p className="card-text">{workshop.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workshop;