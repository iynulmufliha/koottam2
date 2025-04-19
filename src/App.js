import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Landing from './components/Landing';
import Workshop from './components/Workshop'; 
import Inaugural from './components/Inaugural';
import PanelDiscussion from './components/PanelDiscussion';
import TalkShow from './components/TalkShow';
import OpenMic from './components/OpenMic';
import PopUpMarkets from './components/PopUpMarkets';
import VolunteeringActivities from './components/VolunteeringAcitivities';
import CommunityGames from './components/CommunityGames';
import Concert from './components/Concert';
import NGOs from './components/NGOs';

// Event data used in the carousel
const events = [
  {
    id: 1,
    role: 'NGOs',
    description: 'Join us to connect with various NGOs dedicated to making a difference. This is a great opportunity to engage with organizations impacting our communities and explore collaboration opportunities.',
    image: {
      src: 'https://th.bing.com/th/id/OIP.s4ks4yN1Ng-t_qcXiF1ptwHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7',
      alt: 'Network with NGOs event',
    },
    date: 'April 26 & 27',
    venue: 'Tagore Theatre',
  },
  {
    id: 2,
    role: 'Concert Night',
    description: 'Experience an unforgettable night filled with live performances from talented artists. Let the music elevate your spirits while you socialize and enjoy an electric atmosphere.',
    image: {
      src: 'https://th.bing.com/th/id/OIP.G75QCmAzov53fDckowR0FQHaE5?w=292&h=193&c=7&r=0&o=5&pid=1.7',
      alt: 'Concert Night event',
    },
    date: 'April 26 & 27',
    venue: 'Tagore Theatre',
  },
  {
    id: 3,
    role: 'Community Games',
    description: 'Join us for a day of fun with exciting games designed for the entire community. This is a great way to bond with neighbors, enjoy teamwork, and celebrate community spirit in an energetic environment.',
    image: {
      src: 'https://th.bing.com/th/id/OIP.8D2fuqZmvBm_Af5u0hXruQHaE8?w=256&h=180&c=7&r=0&o=5&pid=1.7',
      alt: 'Community Games event',
    },
    date: 'April 26 & 27',
    venue: 'Tagore Theatre',
  },
  {
    id: 4,
    role: 'Workshops',
    description: 'Participate in hands-on workshops led by industry experts. Gain practical skills and insights applicable in various fields while enjoying a stimulating learning environment.',
    image: {
      src: 'https://th.bing.com/th/id/OIP.cvCMS2-ZYthj_tPEZavGIAHaE8?w=254&h=180&c=7&r=0&o=5&pid=1.7',
      alt: 'Workshops event',
    },
    date: 'April 26 & 27',
    venue: 'Tagore Theatre',
  },
  {
    id: 7,
    role: 'Inaugural Event',
    description: 'Kick off the festivities with our inaugural event! Join us for a grand opening ceremony featuring distinguished speakers and exciting performances. This is the perfect way to set the tone for the events to follow.',
    image: {
      src: 'https://th.bing.com/th/id/OIP.yLiDREG84L2Iu15uuikw3AHaHa?rs=1&pid=ImgDetMain',
      alt: 'Inaugural Event',
    },
    date: 'April 26 & 27',
    venue: 'Tagore Theatre',
  },
  {
    id: 8,
    role: 'Panel Discussions',
    description: 'Engage in insightful conversations at our panel discussions featuring industry experts on various topics. This is an excellent opportunity to ask questions, share perspectives, and broaden your understanding.',
    image: {
      src: 'https://th.bing.com/th/id/OIP.mEJgHde71TT0IDovcU7D6gHaE8?w=255&h=180&c=7&r=0&o=5&pid=1.7',
      alt: 'Panel Discussions',
    },
    date: 'April 26 & 27',
    venue: 'Tagore Theatre',
  },
  {
    id: 9,
    role: 'Talk Shows',
    description: 'Join us for engaging talk shows where fascinating topics come to life through discussions with guest speakers. These shows are designed to inspire, inform, and entertain all attendees.',
    image: {
      src: 'data:image/jpeg;base64,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',
      alt: 'Talk Shows',
    },
    date: 'April 26 & 27',
    venue: 'Tagore Theatre',
  },
  {
    id: 10,
    role: 'Open Mic',
    description: 'Showcase your talent at our open mic event! Whether you sing, speak poetry, or tell jokes, this platform is for you. Join a community of creatives and share your passion with the audience.',
    image: {
      src: 'https://th.bing.com/th/id/OIP.QP3-DNKvecffJmtwDJ1qIgAAAA?w=278&h=182&c=7&r=0&o=5&pid=1.7',
      alt: 'Open Mic Event',
    },
    date: 'April 26 & 27',
    venue: 'Tagore Theatre',
  },
  {
    id: 11,
    role: 'Pop Up Markets',
    description: 'Explore a vibrant marketplace of local artisans! Discover unique handcrafted goods, fashion, and jewelry while supporting small businesses. Join us for a day of creativity and community!', image: {
      src: 'https://th.bing.com/th/id/OIP.svRO4SE60LVEZMlFEJqkLQHaEK?w=303&h=180&c=7&r=0&o=5&pid=1.7',
      alt: 'Pop Up Market Event',
    },
    date: 'April 26 & 27',
    venue: 'Tagore Theatre',
  },
  {
    id: 12,
    role: 'Volunteering Activities',
    description: 'Exciting volunteering opportunities are on the horizon! Get ready to make a difference in your community while connecting with others. Stay tuned for ways to lend a helping hand!', image: {
      src: 'https://th.bing.com/th/id/OIP.567UiNSHZSo7ATNO7wxVWgHaEc?w=305&h=183&c=7&r=0&o=5&pid=1.7',
      alt: 'Volunteering Activities',
    },
    date: 'April 26 & 27',
    venue: 'Tagore Theatre',
  },
  
];

function App() {
  const menuItems = [
    { name: 'Events', link: '/' },
    { name: 'My Events', link: '/my-events' },
    { name: 'Ticket Generation', link: '/ticket-generation' },
  ];

  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showwhites, setShowwhites] = useState(false); // State to control NGO visibility
  const [ticket, setTicket] = useState(null); // State to store the generated ticket

  const handleRegister = (event, day) => {
    const isRegistered = registeredEvents.some(e => e.id === event.id && e.day === day);
    
    if (isRegistered) {
      setRegisteredEvents(registeredEvents.filter(e => !(e.id === event.id && e.day === day)));
      if (event.id === 1) {
        setShowwhites(false); // Hide NGO section if unregistered
      }
      // Check if the event was a concert and reset the ticket if unregistered
      if (event.id === 2) {
        setTicket(null);
      }
    } else {
      setRegisteredEvents([...registeredEvents, { ...event, day }]);
      if (event.id === 1) { // Show NGO list only for NGOs event
        setShowwhites(true);
      }
      // Generate a ticket if the concert is checked in
      if (event.id === 2) {
        setTicket({ // Set a simple ticket object for the concert
          id: Math.random().toString(36).substr(2, 9), // Generate a random ID for the ticket
          role: event.role,
          date: event.date,
          venue: event.venue,
          day,
        });
      }
    }
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursorEffect = document.createElement("div");
      cursorEffect.classList.add("firecracker");
      cursorEffect.style.left = `${event.clientX + 10}px`;
      cursorEffect.style.top = `${event.clientY + 10}px`;

      document.body.appendChild(cursorEffect);

      setTimeout(() => {
        cursorEffect.remove();
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav 
            className="navbar navbar-expand-lg navbar-light sticky-top pt-5 pb-5" 
            style={{ backgroundColor: '#b72021' }} // Set the background color here
          >
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <button 
                className="navbar-toggler" 
                type="button" 
                onClick={handleNavToggle}
                aria-controls="navbarNav" 
                aria-expanded={isNavOpen} 
                aria-label="Toggle navigation"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
      
              <h1 className="text-light text-center fw-bold" style={{ fontSize: '1.5rem', margin: 0 }}> 
                  MEET YOUR KOOTUKKAR
              </h1>
      
          
            </div>
      
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav">
                {menuItems.map((item, index) => (
                  <li 
                    className="nav-item" 
                    key={index}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Link 
                      className="nav-link text-light"  
                      to={item.link} 
                      onClick={handleNavLinkClick}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </header>
        
        <Routes>
          <Route 
            path="/" 
            element={<Carousel events={events} handleRegister={handleRegister} registeredEvents={registeredEvents} showwhites={showwhites} />} 
          />
          <Route path="/my-events" element={<MyEvents registeredEvents={registeredEvents} />} />
          <Route path="/ticket-generation" element={<TicketGeneration ticket={ticket} />} />
        </Routes>
      </div>
    </Router>
  );}

// Carousel component
function Carousel({ events, handleRegister, registeredEvents, showwhites }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentEvent = events[currentIndex];

  const prevIndex = (currentIndex - 1 + events.length) % events.length;
  const nextIndex = (currentIndex + 1) % events.length;

  const goPrev = () => setCurrentIndex(prevIndex);
  const goNext = () => setCurrentIndex(nextIndex);

  // Full image paths for NGOs
  const whites = [
    require('./images/pic1 (1).jpg'),
    require('./images/pic1 (2).jpg'),
    require('./images/pic1 (3).jpg'),
    require('./images/pic1 (4).jpg'),
    require('./images/pic1 (5).jpg'),
    require('./images/pic1 (6).jpg'),
    require('./images/pic1 (7).jpg'),
    require('./images/pic1 (8).jpg'),
    require('./images/pic1 (9).jpg'),
    require('./images/pic1 (10).jpg'),
    require('./images/pic1 (11).jpg'),
    require('./images/pic1 (12).jpg'),
    require('./images/pic1 (13).jpg'),
    require('./images/pic1 (14).jpg'),
    require('./images/pic1 (15).jpg'),
    require('./images/pic1 (16).jpg'),
    require('./images/pic1 (17).jpg'),
    require('./images/pic1 (18).jpg'),
    require('./images/pic1 (19).jpg'),
    require('./images/pic1 (20).jpg'),
    require('./images/pic1 (21).jpg'),
    require('./images/pic1 (22).jpg'),
    require('./images/pic1 (23).jpg'),
    require('./images/pic1 (24).jpg'),
    require('./images/pic1 (25).jpg'),
    require('./images/pic1 (26).jpg'),
    require('./images/pic1 (27).jpg'),
    require('./images/pic1 (28).jpg'),
  ];

  const [selectedwhites, setSelectedwhites] = useState([]);

  const togglewhiteSelection = (white) => {
    setSelectedwhites((prevSelected) => {
      if (prevSelected.includes(white)) {
        return prevSelected.filter(item => item !== white);
      } else {
        return [...prevSelected, white];
      }
    });
  };

  return (
    <div className='container mt-5 '>
      <Landing />
      <div className="container py-5 text-center" style={{ maxWidth: "720px" }}>
        <div className="d-flex align-items-center justify-content-center mb-2 text-white" style={{ fontSize: "0.875rem" }}>
          <FontAwesomeIcon icon={faArrowRight} className="me-2" style={{ color: '#006D5B' }}/>
          <span className="border-bottom border-success pb-1" style={{ color: '#006D5B' }}>Upcoming Events</span>
        </div>

        <div className="mb-4">
          <h2 className="d-flex justify-content-center align-items-center gap-3 mt-2" style={{ fontWeight: "400" }}>
            <button 
              onClick={goPrev} 
              className="role-button small" 
              style={{ fontSize: "22px", lineHeight: "28px" }}
            >
              {events[prevIndex].role}
            </button>
            <button className="role-button active" style={{ fontSize: "40px", lineHeight: "48px" }} disabled>
              {currentEvent.role}
            </button>
            <button 
              onClick={goNext} 
              className="role-button small" 
              style={{ fontSize: "22px", lineHeight: "28px" }}
            >
              {events[nextIndex].role}
            </button>
          </h2>
        </div>

        <p className="mb-4" style={{ fontSize: "1rem", maxWidth: "600px", color: '#C8102E', textAlign: 'justify' }}>
          {currentEvent.description}
        </p>

        <div className="mb-4">
          <button 
            className={`btn ${registeredEvents.some(e => e.id === currentEvent.id && e.day === 'day1') ? 'btn-outline-danger' : 'btn-outline-warning'} rounded-pill`}
            onClick={() => handleRegister(currentEvent, 'day1')}
          >
            {registeredEvents.some(e => e.id === currentEvent.id && e.day === 'day1') ? 'Checked In Day 1' : 'Check In Day 1'}
          </button>

          <button 
            className={`btn ${registeredEvents.some(e => e.id === currentEvent.id && e.day === 'day2') ? 'btn-outline-danger' : 'btn-outline-warning'} rounded-pill ms-2`}
            onClick={() => handleRegister(currentEvent, 'day2')}
          >
            {registeredEvents.some(e => e.id === currentEvent.id && e.day === 'day2') ? 'Checked In Day 2' : 'Check In Day 2'}
          </button>
        </div>

        <img
          src={currentEvent.image.src}
          alt={currentEvent.image.alt}
          className="img-fluid rounded-lg mb-3 mx-auto d-block"
        />
        
        {showwhites && currentEvent.id === 1 && (
          <div className="text-center">
            <h4 className="mt-4">Click the below images of NGOs you want to connect with:</h4>
            <div className="row justify-content-center">
              {whites.map((white, index) => (
                <div className="col-6 col-md-3 d-flex justify-content-center m-1" key={index}>
                  <div 
                    className={`white-card position-relative ${selectedwhites.includes(white) ? 'selected' : ''}`} 
                    onClick={() => togglewhiteSelection(white)}
                    style={{ cursor: 'pointer' }} 
                  >
                    <img 
                      src={white} 
                      alt={`NGO ${index + 1}`} 
                      className="img-fluid white-image"
                      style={{ maxHeight: '150px', objectFit: 'cover', borderRadius: '8px' }} 
                    />
                    <div className={`overlay ${selectedwhites.includes(white) ? 'show' : ''}`}>
                      <span style={{ color: 'white', fontWeight: 'bold' }}>Selected</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

{currentEvent.id === 1 && (
          <NGOs />
        )}

{currentEvent.id === 2 && (
          <Concert />
        )}

{currentEvent.id === 3 && (
          <CommunityGames />
        )}

        {currentEvent.id === 4 && (
          <Workshop />
        )}

        {currentEvent.id === 7 && (
          <Inaugural /> 
        )}

{currentEvent.id === 8 && (
          <PanelDiscussion /> 
        )}

{currentEvent.id === 9 && (
          <TalkShow /> 
        )}
      
      {currentEvent.id === 10 && (
          <OpenMic />  ) }

        {currentEvent.id === 11 && (
          <PopUpMarkets />)}

{currentEvent.id === 12 && (
          <VolunteeringActivities />)}


        <div className="d-flex justify-content-center gap-3 mt-4">
          <button type="button" className="btn btn-outline-white rounded-circle" onClick={goPrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button type="button" className="btn btn-outline-white rounded-circle" onClick={goNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

// My Events Component
const MyEvents = ({ registeredEvents }) => (
  <div className="container my-5">
    <h2 className="text-center">My Events</h2>
    <div className="row">
      {registeredEvents.length === 0 ? (
        <p className="text-center">No events registered.</p>
      ) : (
        registeredEvents.map(event => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={`${event.id}-${event.day}`}>
            <div className="card event-card">
              <img 
                src={event.image.src} 
                className="card-img-top" 
                alt={event.role} 
                style={{ height: "200px", objectFit: "cover" }} 
              />
              <div className="card-body">
                <h5 className="card-title">{event.role}</h5>
                <p className="card-text">Registered for {event.day === 'day1' ? 'Day 1' : 'Day 2'} | Venue: {event.venue}</p>
                <div className="card-description text-center">
                  <p>{event.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);

// Ticket Generation Component
const TicketGeneration = ({ ticket }) => (
  <div className="container my-5">
    <h2 className="text-center">Ticket Generation</h2>
    {ticket ? (
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">Your Ticket</h5>
          <p className="card-text">Ticket ID: {ticket.id}</p>
          <p className="card-text">Event: {ticket.role}</p>
          <p className="card-text">Date: {ticket.date}</p>
          <p className="card-text">Venue: {ticket.venue}</p>
          <p className="card-text">Day: {ticket.day}</p>
        </div>
      </div>
    ) : (
      <p className="text-center">No tickets generated yet.</p>
    )}
  </div>
);

export default App;