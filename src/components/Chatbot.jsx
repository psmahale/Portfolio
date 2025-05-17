import { useEffect, useRef, useState } from 'react';
import { BsRobot } from 'react-icons/bs';
import { FiMessageSquare, FiMinimize2, FiSend } from 'react-icons/fi';
import '../styles/Chatbot.css';

const Chatbot = () => {
  // Resume data with structured information
  const resumeData = {
    name: "Pranav",
    contact: {
      mobile: "8767557467",
      email: "pranavmahale04@gmail.com",
      linkedin: "www.linkedin.com/in/psmahale"
    },
    profile: [
      "Passion for AI & ML: Continuously learning and exploring artificial intelligence and machine learning",
      "Gaining in-depth knowledge in Computer Vision and Embedded Systems through hands-on projects.",
      "Proficient in Web Development & Programming: Skilled in React.js, Django, Python, C++, Java, and PHP",
      "Data Analysis & Visualization: Strong foundation in data cleaning and visualization using Tableau and Power BI"
    ],
    education: [
      {
        degree: "B.E in Computer Engineering",
        college: "SVPM'S College of Engineering, Malegaon, Baramati, Pune",
        year: "2026 (Expected)",
        cgpa: "8.34 (2nd Year)"
      },
      {
        degree: "HSC",
        college: "Dr. D.Y. Patil Junior College, Pimpri, Pune",
        percentage: "70.33%"
      },
      {
        degree: "SSC",
        college: "Shri Ramdas Highschool, Belapur (Badgi)",
        percentage: "90.60%"
      }
    ],
    skills: {
      technologies: ["React.js", "HTML", "CSS", "Bootstrap", "JavaScript", "Django", "Pandas", "NumPy", "Matplotlib"],
      languages: ["Python", "C++", "Java", "PHP"],
      databases: ["MySQL", "SQLite", "MongoDB"],
      visualization: ["Tableau", "Power BI"],
      creative: ["Portrait Drawing", "Digital Art", "Video Editing", "Photo Editing"]
    },
    projects: [
      "Plant Disease & Pests Prediction System: Used Inception v3 deep learning model",
      "Medical Management System: Developed with PHP/MySQL and Java, with React.js frontend",
      "Data Cleaning: Using Python and PHP in Jupyter Notebook",
      "Car Rental System: Created in C++ for generating tax invoices",
      "Government Schemes Portal: Website for scheme applications using HTML, CSS, JavaScript",
      "Data Visualization: Interactive dashboards using Power BI and Tableau"
    ],
    certifications: [
      "Python for Data Science, AI and Development by IBM",
      "CPP Certification by Savitribai Phule Pune University",
      "Data Analytics For Beginners by Google",
      "Professional RESTful API Design Using Python Flask by Alison",
      "Hackathon Participation: CMR Hackfest 2.0"
    ],
    hobbies: {
      art: {
        traditional: ["Pencil portraits", "Color drawings", "Wall paintings"],
        digital: ["Logo design", "Digital illustrations", "Brand identity"],
        software: ["Adobe Photoshop", "Procreate", "Krita"]
      },
      videoEditing: {
        software: ["Adobe After Effects", "Premiere Pro", "DaVinci Resolve", "CapCut"],
        experience: "2+ years creating content, montages, and promotional videos"
      },
      photography: {
        skills: ["Portrait photography", "Landscape photography", "Photo editing"],
        software: ["Adobe Lightroom", "Photoshop"]
      }
    }
  };

  const [messages, setMessages] = useState([
    { 
      text: `Hello! I can provide information about ${resumeData.name}'s professional background and skills. How can I help you today? :)`, 
      sender: 'bot',
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { 
      text: input, 
      sender: 'user',
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      generateBotReply(input);
      setIsTyping(false);
    }, 800 + Math.random() * 1000);
  };

  const generateBotReply = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    let botReply = '';
    
    // Calculate similarity to known topics
    const isAboutResume = 
      /pranav|about|who are you|yourself|resume|cv|background/.test(lowerInput) ||
      /education|qualification|degree|college|school/.test(lowerInput) ||
      /skill|expertise|technology|programming/.test(lowerInput) ||
      /project|work|experience/.test(lowerInput) ||
      /certification|certificate|course/.test(lowerInput) ||
      /art|drawing|paint|creative|sketch|logo|design|digital/.test(lowerInput) ||
      /video|edit|film|montage|after effect|premiere|davinci|capcut/.test(lowerInput) ||
      /photo|picture|photography/.test(lowerInput) ||
      /contact|email|phone|reach|linkedin/.test(lowerInput);

    if (!isAboutResume) {
      botReply = `I specialize in answering questions about ${resumeData.name}'s professional background. ` +
                `For other inquiries, please contact directly at ${resumeData.contact.email}. ` +
                `I can help with information about education, skills, projects, or creative works. :)`;
    }
    else if (/pranav|about|who are you|yourself/.test(lowerInput)) {
      botReply = `About ${resumeData.name}:\n\nProfile Summary:\n${resumeData.profile.join('\n')}\n\n` +
                `Contact:\nPhone: ${resumeData.contact.mobile}\nEmail: ${resumeData.contact.email}\nLinkedIn: ${resumeData.contact.linkedin}`;
    } 
    else if (/education|qualification|degree|college/.test(lowerInput)) {
      botReply = `Education Background:\n\n${resumeData.education.map(edu => 
        `${edu.degree}\n${edu.college}\n${edu.year || ''} ${edu.cgpa || edu.percentage || ''}\n`
      ).join('\n')}`;
    }
    else if (/skill|expertise|technology/.test(lowerInput)) {
      botReply = `Technical Skills:\n\nTechnologies: ${resumeData.skills.technologies.join(', ')}\n` +
                `Programming Languages: ${resumeData.skills.languages.join(', ')}\n` +
                `Databases: ${resumeData.skills.databases.join(', ')}\n` +
                `Data Visualization: ${resumeData.skills.visualization.join(', ')}\n` +
                `Creative Skills: ${resumeData.skills.creative.join(', ')}`;
    }
    else if (/project|work|experience/.test(lowerInput)) {
      botReply = `Notable Projects:\n\n${resumeData.projects.map((proj, index) => 
        `${index + 1}. ${proj}`
      ).join('\n\n')}`;
    }
    else if (/certification|certificate|course/.test(lowerInput)) {
      botReply = `Certifications:\n${resumeData.certifications.map((cert, index) => 
        `${index + 1}. ${cert}`
      ).join('\n')}`;
    }
    else if (/art|drawing|paint|creative|sketch/.test(lowerInput)) {
      botReply = `Artistic Skills:\n\nTraditional Art:\n- ${resumeData.hobbies.art.traditional.join('\n- ')}\n` +
                `Digital Art:\n- ${resumeData.hobbies.art.digital.join('\n- ')}\n` +
                `Software: ${resumeData.hobbies.art.software.join(', ')}\n\n` +
                `Portfolio samples available upon request. :)`;
    }
    else if (/video edit|film|montage|after effect|premiere|davinci|capcut/.test(lowerInput)) {
      botReply = `Video Editing:\n\nProficient in: ${resumeData.hobbies.videoEditing.software.join(', ')}\n` +
                `Experience: ${resumeData.hobbies.videoEditing.experience}\n` +
                `Specializes in content creation and promotional videos.`;
    }
    else if (/photo|picture|photography/.test(lowerInput)) {
      botReply = `Photography:\n\nSpecialties: ${resumeData.hobbies.photography.skills.join(', ')}\n` +
                `Editing Tools: ${resumeData.hobbies.photography.software.join(', ')}`;
    }
    else if (/logo|brand|design|digital art/.test(lowerInput)) {
      botReply = `Digital Design Services:\n` +
                `- Logo creation\n` +
                `- Brand identity development\n` +
                `- Vector graphics\n` +
                `Tools: ${resumeData.hobbies.art.software.join(', ')}`;
    }
    else if (/contact|email|phone|reach|linkedin/.test(lowerInput)) {
      botReply = `Contact Information:\nPhone: ${resumeData.contact.mobile}\nEmail: ${resumeData.contact.email}\nLinkedIn: ${resumeData.contact.linkedin}`;
    }
    else {
      botReply = `I can provide information about:\n- Education background\n- Technical skills\n- Projects\n- Certifications\n- Creative works\n\n` +
                `Try asking about specific areas like "Tell me about the education background" or "What projects have been completed?" :)`;
    }

    const botMessage = { 
      text: botReply, 
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, botMessage]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <FiMinimize2 size={24} /> : <FiMessageSquare size={24} />}
      </button>

      <div className={`chatbot-box ${isOpen ? 'visible' : ''}`}>
        <div className="chatbot-header">
          <BsRobot size={20} />
          <h3>Say Hii to JARVIS</h3>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <div className="message-content">
                {msg.text.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <span className="message-time">{formatTime(msg.timestamp)}</span>
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about professional background..."
            aria-label="Ask about professional background"
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
    </div>
  );
};

export default Chatbot;