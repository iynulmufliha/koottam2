import React from "react";
import "./OpenMic.css";

const openMicSessions = [
  {
    title: "Open Mic (Session 1)",
    description: "An opportunity for participants to share their talents and insights."
  },
  {
    title: "Open Mic (Session 2)",
    description: "Another chance to showcase creativity and express personal stories."
  },
];

const OpenMic = () => {
  return (
    <div className="open-mic-container mt-4">
      {openMicSessions.map((session, index) => (
        <div key={index} className="card open-mic-card mb-3">
          <div className="vertical-bar"></div>
          <div className="card-body">
            <h5 className="card-title">{session.title}</h5>
            <p className="card-text">{session.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpenMic;