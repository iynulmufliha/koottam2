import React, { useState, useRef } from 'react';
import '../styles/ChatbotApp.css';

function ChatbotApp({ entryNumber }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! 👋 How can I help you with the Koottam Carnival event today?' }
  ]);
  const messagesEndRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { type: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    const botReply = getBotReply(input.toLowerCase());
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: 'bot', text: botReply }]);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 600);

    setInput('');
  };

  const getBotReply = (message) => {
    if (message.includes('entry number')) {
      return `Your entry number is: ${entryNumber ? entryNumber : 'not generated yet.'}`;
    }

    // ... Other bot replies

    return '🤔 I’m not sure I got that. Try asking about registration, event dates, venue, etc.';
  };

  return (
    <div className="chatbot-container">
      <button
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {isOpen && (
        <div className="chat-window">
          {/* Chat Window UI */}
        </div>
      )}
    </div>
  );
}

export default ChatbotApp;