import { FaCalendarAlt, FaCertificate, FaExternalLinkAlt, FaIdCard } from 'react-icons/fa';
import '../styles/Certificate.css';

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: "Professional Restful API Design Using Python Flask",
      issuer: "Alison Pvt ltd",
      date: "June 2023",
      description: "Mastered advanced techniques in Premiere Pro and After Effects including motion graphics and color grading",
      skills: ["Video Editing", "Color Grading", "Motion Graphics"],
      credentialId: "ADV-VID-789XYZ",
      credentialUrl: "https://example.com/verify/789XYZ",
      image: "src/assets/Restful_api.jpg"
    },
    {
      id: 2,
      title: "Photography Composition Professional",
      issuer: "Nikon School Online",
      date: "March 2023",
      description: "Completed professional training in advanced composition techniques and lighting scenarios",
      skills: ["Composition", "Lighting", "Post-Processing"],
      credentialId: "NK-COMP-456ABC",
      credentialUrl: "https://example.com/verify/456ABC",
      image: "src/assets/IBM.jpg"
    },
    {
      id: 3,
      title: "Photography Composition Professional",
      issuer: "Nikon School Online",
      date: "March 2023",
      description: "Completed professional training in advanced composition techniques and lighting scenarios",
      skills: ["Composition", "Lighting", "Post-Processing"],
      credentialId: "NK-COMP-456ABC",
      credentialUrl: "https://example.com/verify/456ABC",
      image: "src/assets/Hackathon.jpg"
    },
    {
      id: 4,
      title: "Photography Composition Professional",
      issuer: "Nikon School Online",
      date: "March 2023",
      description: "Completed professional training in advanced composition techniques and lighting scenarios",
      skills: ["Composition", "Lighting", "Post-Processing"],
      credentialId: "NK-COMP-456ABC",
      credentialUrl: "https://example.com/verify/456ABC",
      image: "src/assets/AI&ML_Wokshop.jpg"
    },
    {
      id: 5,
      title: "Photography Composition Professional",
      issuer: "Nikon School Online",
      date: "March 2023",
      description: "Completed professional training in advanced composition techniques and lighting scenarios",
      skills: ["Composition", "Lighting", "Post-Processing"],
      credentialId: "NK-COMP-456ABC",
      credentialUrl: "https://example.com/verify/456ABC",
      image: "src/assets/Robotics.jpg"
    },
    {
      id: 6,
      title: "Photography Composition Professional",
      issuer: "Nikon School Online",
      date: "March 2023",
      description: "Completed professional training in advanced composition techniques and lighting scenarios",
      skills: ["Composition", "Lighting", "Post-Processing"],
      credentialId: "NK-COMP-456ABC",
      credentialUrl: "https://example.com/verify/456ABC",
      image: "src/assets/Cpp.jpg"
    },
    {
      id: 7,
      title: "Photography Composition Professional",
      issuer: "Nikon School Online",
      date: "March 2023",
      description: "Completed professional training in advanced composition techniques and lighting scenarios",
      skills: ["Composition", "Lighting", "Post-Processing"],
      credentialId: "NK-COMP-456ABC",
      credentialUrl: "https://example.com/verify/456ABC",
      image: "src/assets/SVN.jpg"
    },
    // Add 3-5 more certificates
  ];

  return (
    <section id="certifications" className="certificate-section">
      {/* Header */}
      <div className="certificate-header">
        <h2>Certifications <span>by Pranav Mahale</span></h2>
        <div className="section-divider"></div>
        <p>Validated skills and professional accreditations in creative fields</p>
      </div>

      {/* Certificates Grid */}
      <div className="certificate-container">
        <div className="certificate-grid">
          {certificates.map(cert => (
            <div className="certificate-card" key={cert.id}>
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="certificate-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/400x300?text=Certificate+Image';
                  }}
                />
              </div>
              
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <div className="certificate-meta">
                  <span className="issuer">
                    <FaIdCard className="meta-icon" /> {cert.issuer}
                  </span>
                  <span className="date">
                    <FaCalendarAlt className="meta-icon" /> Issued {cert.date}
                  </span>
                  {cert.credentialId && (
                    <span className="credential-id">
                      <FaCertificate className="meta-icon" /> ID: {cert.credentialId}
                    </span>
                  )}
                </div>
                
                <p className="certificate-description">{cert.description}</p>
                
                <div className="certificate-skills">
                  {cert.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
                
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="verify-link"
                  >
                    <FaExternalLinkAlt /> Verify Credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;