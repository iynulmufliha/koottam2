import React from "react";
import "./PopUpMarkets.css";

const popUpVendors = [
  { name: "Purecraft" },
  { name: "Darsh Jewels" },
  { name: "Amax Official" },
  { name: "māyah by Maheswari" },
  { name: "Saanch" },
  { name: "DOTS Jewellery" },
  { name: "Ruhani" },
  { name: "Kasavumaalika Handlooms" },
  { name: "Henna by Sumayya" },
  { name: "Amarisa Designer Wear" },
  { name: "WOHO" },
  { name: "ARP Studios" },
  { name: "The Pocket Store" },
  { name: "Elite Books" },
  { name: "House of Tanmaya" },
  { name: "Burnt! by Ash" },
];

const PopUpMarkets = () => {
  return (
    <div className="pop-up-markets-container mt-4">
      {popUpVendors.map((vendor, index) => (
        <div key={index} className="card pop-up-market-card mb-3">
          <div className="vertical-bar"></div>
          <div className="card-body">
            <h5 className="card-title">{vendor.name}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopUpMarkets;