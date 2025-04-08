import React, { useState } from "react";
import {
    FaChartLine,
    FaCode,
    FaDatabase,
    FaFilm,
    FaGraduationCap,
    FaLaptopCode,
    FaPalette
} from "react-icons/fa";
import "../styles/About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Profile Summary",
      icon: <FaLaptopCode className="tab-icon" />,
      content: (
        <div className="profile-content">
          <p className="section-text">
            I'm a passionate Computer Engineering student specializing in web
            development and AI/ML. With expertise in React.js, Django, and
            Python, I build innovative solutions while continuously expanding my
            knowledge in emerging technologies.
          </p>
          <div className="highlights">
            <div className="highlight-item">
              <div className="highlight-icon-container">
                <FaDatabase className="highlight-icon" />
              </div>
              <div className="highlight-text">
                <h4>Web Development</h4>
                <p>React, Django, JavaScript, Bootstrap</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon-container">
                <FaChartLine className="highlight-icon" />
              </div>
              <div className="highlight-text">
                <h4>Data Analytics</h4>
                <p>Tableau, Power BI, Pandas, NumPy</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      icon: <FaGraduationCap className="tab-icon" />,
      content: (
        <div className="education-content">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2023 - 2026 (Expected)</div>
                <h4>Bachelor of Engineering in Computer Science</h4>
                <p className="institution">SVPM's College of Engineering, Malegaon</p>
                <p className="achievement">Current CGPA: 8.34 (Till 2nd Year)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2021 - 2023</div>
                <h4>Higher Secondary Certificate (HSC)</h4>
                <p className="institution">Dr. D.Y. Patil Junior College, Pimpri</p>
                <p className="achievement">Percentage: 70.33%</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2020 - 2021</div>
                <h4>Secondary School Certificate (SSC)</h4>
                <p className="institution">Shri Ramdas Highschool, Belapur</p>
                <p className="achievement">Percentage: 90.60%</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Technical Skills",
      icon: <FaCode className="tab-icon" />,
      content: (
        <div className="skills-content">
          <div className="skills-grid">
            <div className="skills-category">
              <h4><FaCode className="category-icon" /> Development</h4>
              <div className="skills-list">
                <span>React.js</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>Django</span>
                <span>Python</span>
                <span>PHP</span>
                <span>Java</span>
                <span>C++</span>
              </div>
            </div>
            <div className="skills-category">
              <h4><FaDatabase className="category-icon" /> Data & AI</h4>
              <div className="skills-list">
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
                <span>Tableau</span>
                <span>Power BI</span>
                <span>MySQL</span>
                <span>PostgreSQL</span>
              </div>
            </div>
            <div className="skills-category">
              <h4><FaFilm className="category-icon" /> Video Editing</h4>
              <div className="skills-list">
                <span>Adobe Premiere Pro</span>
                <span>After Effects</span>
                <span>CapCut</span>
                <span>DaVinci Resolve</span>
              </div>
            </div>
            <div className="skills-category">
              <h4><FaPalette className="category-icon" /> Digital Art</h4>
              <div className="skills-list">
                <span>Photoshop</span>
                <span>Illustrator</span>
                <span>Procreate</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="tabs-header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        <div className="about-card">
          <div className="card-content-wrapper">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;