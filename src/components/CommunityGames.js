import React from "react";
import "./CommunityGames.css";

const CommunityGames = () => {
  return (
    <div className="community-games-container mt-4">
      <div className="card community-card">
        <div className="vertical-bar"></div>
        <div className="card-body">
          <h5 className="card-title">Community Games</h5>
          <p className="card-text">
            Coming Soon! <br />
            Excitement is building for our community games! Get ready to join 
            in the fun and friendly competition. We appreciate your patience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityGames;