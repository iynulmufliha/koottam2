import React from "react";
import "./NGOs.css";

const ngosData = [
  {
    name: "Tick Talkers",
    description: "Focuses on enhancing communication skills to empower individuals."
  },
  {
    name: "Better Life Foundation India",
    description: "Works towards improving the quality of life of underprivileged communities."
  },
  {
    name: "Fourth Wave Foundation",
    description: "Promotes social justice and supports various community initiatives."
  },
  {
    name: "Olimalar Foundation",
    description: "Dedicated to child education and empowerment through innovative methods."
  },
  {
    name: "Inner Wheel Club of Trivandrum South Orchids",
    description: "Part of a global women's organization focused on community service."
  },
  {
    name: "Nithyavasantham",
    description: "Promotes mental health and wellbeing for individuals in need."
  },
  {
    name: "Ocean Students Community (OSC)",
    description: "Engages youth in ocean conservation and marine education programs."
  },
  {
    name: "Pallium India",
    description: "Focuses on palliative care and improving healthcare access."
  },
  {
    name: "Men Against Violence and Abuse (MAVA)",
    description: "Works to engage men in preventing violence and promoting gender equality."
  },
  {
    name: "FIREFLIES",
    description: "Supports children and youth with disabilities through various initiatives."
  },
  {
    name: "We Grow Forest Foundation",
    description: "Dedicated to environmental conservation and afforestation projects."
  },
  {
    name: "People For Animals, Trivandrum Chapter (PFA)",
    description: "Works towards the welfare and protection of animals."
  },
  {
    name: "NADI Foundation",
    description: "Focuses on water conservation and community engagement in rural areas."
  },
  {
    name: "Kappiness",
    description: "Promotes holistic development and mental wellness for youth."
  },
  {
    name: "U&I Trust",
    description: "Engages in education, mentorship, and skill development for underprivileged children."
  },
  {
    name: "Pratham Education Foundation",
    description: "Strives to provide quality education to children in India."
  },
  {
    name: "Helping Hands Organisation",
    description: "Organizes community service and support for marginalized groups."
  },
  {
    name: "Positive Change For Marine Life",
    description: "Advocates for marine conservation and ocean health."
  },
  {
    name: "ATMAMITRA centre",
    description: "Focuses on mental health support and services for individuals."
  },
  {
    name: "Rise Up Forum",
    description: "Encourages youth empowerment and community development initiatives."
  },
  {
    name: "Seraphic Play And Learning Development Centre",
    description: "Dedicated to the early childhood development and education."
  },
  {
    name: "Amigos Trans Collective",
    description: "Supports transgender rights and community engagement."
  },
  {
    name: "Wildlife Trust of India",
    description: "Focuses on wildlife conservation and habitat protection."
  },
  {
    name: "Let's Live",
    description: "Promotes healthy living and sustainable practices in communities."
  },
  {
    name: "Femella Foundation",
    description: "Works towards women's empowerment and gender equality."
  },
  {
    name: "ETHER INDIA",
    description: "Focuses on social entrepreneurship and sustainable development."
  },
  {
    name: "MORE Mentor Organization for Rural Empowerment",
    description: "Empowers rural youth through skill development and education."
  },
  {
    name: "WWF-India, Kerala State Office",
    description: "Works on various environmental conservation projects and advocacy."
  },
  {
    name: "KagazeeIndia",
    description: "Promotes sustainable waste management and recycling initiatives."
  },
  {
    name: "Sebastian Indian Social Projects",
    description: "Supports social development projects in various sectors."
  },
  {
    name: "Sahayatrika",
    description: "Focuses on women's empowerment and community upliftment."
  },
  {
    name: "Earkai Paathukaappu Sangam",
    description: "Promotes environmental awareness and conservation activities."
  },
  {
    name: "SOLACE",
    description: "Provides support and resources to individuals facing mental health challenges."
  },
  {
    name: "Change Can Change Climate Change Foundation",
    description: "Raises awareness and takes action against climate change."
  },
];

const NGOs = () => {
  return (
   <div className="ngos-container mt-4" style={{ color: '#b72021' }}>
      <h2 className="text-dark"><strong>Participating NGOs</strong></h2>
      {ngosData.map((ngo, index) => (
        <div className="ngo-card" key={index}>
          <h5 className="ngo-name">{ngo.name}</h5>
          <p className="ngo-description">{ngo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NGOs;