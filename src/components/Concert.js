import React from "react";
import "./Concert.css";

const Concert = () => {
  return (
    <div className="concert-container mt-4">
      <div className="ticket-card">
        <div className="ticket-header">
          <h5 className="event-name">Mehfil-e-Sama’a – Kootam 2025</h5>
          <p className="event-date">Day 1 | April 26th</p>
        </div>
        <div className="ticket-body">
          <p className="time">From 8 PM</p>
          <p className="venue">Tagore Theatre, TVM</p>
        </div>
      </div>

      <div className="ticket-card">
        <div className="ticket-header">
          <h5 className="event-name">Jassie Gift Live – Kootam 2025</h5>
          <p className="event-date">Day 2 | April 27th</p>
        </div>
        <div className="ticket-body">
          <p className="time">From 8 PM</p>
          <p className="venue">Tagore Theatre, TVM</p>
        </div>
      </div>
    </div>
  );
};

export default Concert;