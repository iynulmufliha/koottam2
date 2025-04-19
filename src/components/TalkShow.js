import React from "react";
import "./TalkShow.css";

const talkShows = [
  {
    title: "Mental Wellness in the Digital Age",
    description: "Navigating anxiety, stress, and burnout in today's digital landscape."
  },
  {
    title: "Sustainability as a Business Model",
    description: "Exploring the concept of profits with purpose for sustainable growth."
  },
  {
    title: "From Silence to Screen",
    description: "Representation of marginalized communities in film and media."
  },
  {
    title: "Youth and Climate Activism",
    description: "The power of collective action in advocating for climate justice."
  },
  {
    title: "Beyond Borders",
    description: "The impact of volunteering at an international level."
  },
];

const TalkShow = () => {
  return (
    <div className="talk-show-container mt-4">
      {talkShows.map((show, index) => (
        <div key={index} className="card talk-show-card mb-3">
          <div className="vertical-bar"></div>
          <div className="card-body">
            <h5 className="card-title">{show.title}</h5>
            <p className="card-text">{show.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TalkShow;