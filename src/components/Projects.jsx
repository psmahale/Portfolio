import React from "react";
import { FaChartLine, FaCode, FaDatabase, FaExternalLinkAlt, FaGithub, FaServer } from "react-icons/fa";
import thumbnail1 from '../assets/p1.jpg';
import thumbnail3 from '../assets/p2.jpg';
import thumbnail2 from '../assets/p5.jpg';
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Plant Disease Prediction System",
      description: "Deep learning model using Inception v3 architecture that classifies plant diseases with 92% accuracy. Implemented image preprocessing pipelines and deployed as Flask web app.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
      github: "#",
      demo: "#",
      thumbnail: thumbnail1,
      category: "AI/ML",
      icon: <FaChartLine />
    },
    {
      title: "Medical Management System",
      description: "Full-stack medical records system with React frontend and PostgreSQL backend, improving performance by 40% over previous PHP/MySQL implementation.",
      technologies: ["React", "PostgreSQL", "Java", "PHP", "Bootstrap"],
      github: "#",
      demo: "#",
      thumbnail: thumbnail3,
      category: "Full Stack",
      icon: <FaServer />
    },
    {
      title: "Government Schemes Portal",
      description: "Public-facing portal for government scheme applications with secure authentication and document upload. Serves 1,200+ monthly active users.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
      github: "#",
      demo: "#",
      thumbnail: thumbnail3, // Use the correct thumbnail key
      category: "Web Development",
      icon: <FaCode />
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive BI dashboard with real-time data processing and custom visualizations built with Power BI and Tableau.",
      technologies: ["Power BI", "Tableau", "Python", "Pandas", "SQL"],
      github: "#",
      demo: "#",
      thumbnail: thumbnail2, // Use the correct thumbnail key
      category: "Data Analytics",
      icon: <FaDatabase />
    },
    {
      title: "Car Rental System",
      description: "C++ application for generating tax invoices based on car models and rental days, reducing manual work by 70% for local businesses.",
      technologies: ["C++", "OOP", "File Handling"],
      github: "#",
      demo: "#",
      thumbnail: thumbnail2, // Use the correct thumbnail key
      category: "Desktop App",
      icon: <FaCode />
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Project <span>Portfolio</span></h2>
        <div className="section-divider"></div>
        <p>Showcasing my technical solutions and implementations</p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.thumbnail} // Replace dynamic string with thumbnail reference
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
              <div className="project-category">
                {project.icon}
                <span>{project.category}</span>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-footer">
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;