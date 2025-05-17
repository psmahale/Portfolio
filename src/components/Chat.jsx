import React, { useEffect, useRef, useState } from 'react';
import { BsRobot } from 'react-icons/bs';
import { FiMessageSquare, FiMinimize2, FiSend } from 'react-icons/fi';
import '../styles/Chat.css';

const GeminiChatbot = () => {
  const [messages, setMessages] = useState([
    { 
      text: 'Hello! I can help answer your questions. What would you like to know?', 
      sender: 'bot',
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Gemini API configuration
  const GEMINI_API_KEY = 'EnterYourKey'; // Replace with your actual API key
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const callGeminiAPI = async (prompt) => {
    try {
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return "I'm having trouble processing your request. Please try again later.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { 
      text: input, 
      sender: 'user',
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const prompt = `Respond to this in a helpful, conversational way as if you're a knowledgeable assistant. 
        The user asked: "${input}". Keep your response clear and concise.`;
      
      const geminiResponse = await callGeminiAPI(prompt);
      
      const botMessage = { 
        text: geminiResponse, 
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const botMessage = { 
        text: "I couldn't process your request. Please try again.", 
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`gemini-chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="gemini-chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <FiMinimize2 size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {isOpen && (
        <div className="gemini-chatbot-box">
          <div className="gemini-chatbot-header">
            <BsRobot size={20} />
            <h3>AI Assistant</h3>
          </div>
          
          <div className="gemini-chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`gemini-message ${msg.sender}`}>
                <div className="gemini-message-content">
                  {msg.text.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <span className="gemini-message-time">{formatTime(msg.timestamp)}</span>
              </div>
            ))}
            {isTyping && (
              <div className="gemini-message bot">
                <div className="gemini-typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="gemini-chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              aria-label="Ask a question"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <FiSend size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChatbot;