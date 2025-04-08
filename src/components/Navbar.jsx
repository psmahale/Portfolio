import { useEffect, useState } from "react";
import {
  FaAward,
  FaBars,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaPalette,
  FaTimes,
  FaTwitter,
  FaUserAlt,
  FaVideo
} from "react-icons/fa";
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navItems = [
    { id: "home", icon: <FaHome />, name: "Home" },
    { id: "about", icon: <FaUserAlt />, name: "About" },
    { id: "projects", icon: <FaCode />, name: "Projects" },
    { id: "sketches", icon: <FaPalette />, name: "Art" },
    { id: "editing", icon: <FaVideo />, name: "Editing" },
    { id: "certifications", icon: <FaAward />, name: "Certs" },
    { id: "contact", icon: <FaEnvelope />, name: "Contact" }
  ];

  const socialItems = [
    { icon: <FaGithub />, url: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourhandle" }
  ];

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 300) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <button
          className={`mobile-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          style={{ left: isOpen ? '300px' : '1.2rem' }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      <nav className={`navbar ${isOpen ? "mobile-open" : ""}`}>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
              onClick={handleNavClick}
            >
              <a href={`#${item.id}`} aria-label={item.name}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {!isMobile && (
          <div className="social-links">
            {socialItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={`Social link ${index + 1}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
