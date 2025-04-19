import React from "react";
import "./PanelDiscussion.css";

const panelDiscussions = [
  {
    title: "Exploring Emerging Career Paths in Social Work",
    description: "Adapting to contemporary challenges in social work and discovering new opportunities."
  },
  {
    title: "Stories of Change / Voices of Impact",
    description: "Real-life stories that highlight the positive influence of social work."
  },
  {
    title: "Collaborative Partnerships: NGOs and Corporates Working Together for Social Good",
    description: "Exploring how NGOs and corporates can collaborate for impactful social projects."
  },
];

const PanelDiscussion = () => {
  return (
    <div className="panel-discussion-container mt-4">
      {panelDiscussions.map((discussion, index) => (
        <div key={index} className="card panel-discussion-card mb-3">
          <div className="vertical-bar"></div>
          <div className="card-body">
            <h5 className="card-title">{discussion.title}</h5>
            <p className="card-text">{discussion.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PanelDiscussion;