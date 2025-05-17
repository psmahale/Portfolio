// Contact.js (Improved & Integrated with Formspree)
import { useState } from 'react';
import { FaEnvelope, FaInstagram, FaPaperPlane, FaPhone } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzzroyag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2>Get In Touch <span>With Pranav</span></h2>
          <div className="section-divider"></div>
          <p>Have a project in mind or want to collaborate? Reach out through any channel</p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaPhone className="icon-white" />
              </div>
              <div className="info-details">
                <h4>Phone</h4>
                <a href="tel:+918767557467">+91 8767557467</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope className="icon-white" />
              </div>
              <div className="info-details">
                <h4>Email</h4>
                <a href="mailto:pranavmahale04@gmail.com">pranavmahale04@gmail.com</a>
                <a href="mailto:"></a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaInstagram className="icon-white" />
              </div>
              <div className="info-details">
                <h4>Instagram</h4>
                <a 
                  href="https://www.instagram.com/artnav360?igsh=MXB1ZTlsOWNqNjg3eg==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  artnav360
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I'd love to discuss a project about..."
                rows="5"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <FaPaperPlane className="send-icon" /> Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="form-status success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-status error">
                ✗ Oops! Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
