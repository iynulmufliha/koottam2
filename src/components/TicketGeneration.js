import React from 'react';

const TicketGeneration = ({ entryNumber, concerts }) => {
  if (!entryNumber) {
    return <div>Please generate an entry number first.</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center">Your Tickets:</h2>
      <div className="row">
        {concerts.map((concert, index) => (
          <div className="col-12 col-md-6 mb-4" key={index}>
            <div className="card ticket-card">
              <div className="card-body">
                <h5 className="card-title">{concert.name}</h5>
                <p className="card-text">Venue: {concert.venue}</p>
                <p className="card-text">Date: {concert.date}</p>
                <p className="card-text">Time: {concert.time}</p>
                <p className="card-text">Entry Number: {entryNumber}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketGeneration;