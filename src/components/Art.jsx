import React, { useState } from "react";
import { FaCameraRetro, FaPalette, FaPortrait } from "react-icons/fa";
import "../styles/Art.css";

// Import placeholder images (you should replace these with your actual images)
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";

const Art = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const artworks = [
    {
      id: 1,
      title: "Portrait Sketch",
      description: "Charcoal portrait on A4 paper, capturing emotional depth",
      date: "May 2023",
      category: "portrait",
      price: "$80",
      commission: true,
      image: p1
    },
    {
      id: 2,
      title: "Abstract Painting",
      description: "Acrylic on canvas, exploring color theory concepts",
      date: "March 2024",
      category: "painting",
      price: "$150",
      commission: false,
      image: p2
    },
    {
      id: 3,
      title: "Brand Logo Design",
      description: "Vector logo for tech startup, minimalistic approach",
      date: "January 2024",
      category: "digital",
      price: "$200",
      commission: true,
      image: p3
    },
    {
      id: 4,
      title: "Photo Manipulation",
      description: "Surreal landscape created from multiple photos",
      date: "November 2023",
      category: "digital",
      price: "$120",
      commission: true,
      image: p4
    },
    {
      id: 5,
      title: "Wall Mural",
      description: "Large-scale mural in public space, spray paint",
      date: "August 2023",
      category: "painting",
      price: "NFS",
      commission: false,
      image: p5
    },
    {
      id: 6,
      title: "Character Portrait",
      description: "Digital painting of fantasy character",
      date: "February 2024",
      category: "digital",
      price: "$90",
      commission: true,
      image: p1
    },
    {
      id: 7,
      title: "Still Life Study",
      description: "Oil painting on A3 canvas, classical techniques",
      date: "December 2023",
      category: "painting",
      price: "$180",
      commission: false,
      image: p2
    },
    {
      id: 8,
      title: "Event Photography",
      description: "Concert photography with dramatic lighting",
      date: "July 2023",
      category: "photo",
      price: "$75",
      commission: true,
      image: p3
    }
  ];

  const categories = [
    { id: "all", name: "All Works", icon: <FaPalette /> },
    { id: "portrait", name: "Portraits", icon: <FaPortrait /> },
    { id: "painting", name: "Paintings", icon: <FaPalette /> },
    { id: "digital", name: "Digital Art", icon: <FaCameraRetro /> }
  ];

  const filteredArtworks = activeCategory === "all"
    ? artworks
    : artworks.filter(artwork => artwork.category === activeCategory);

  return (
    <section id="sketches" className="art-section">
      <div className="art-container">
        <div className="art-header">
          <div className="header-content">
            <h2>
              Art Gallery <span>by Pranav Mahale</span>
            </h2>
            <div className="section-divider"></div>
            <p>Explore my diverse collection of artworks, from digital illustrations to hand-painted masterpieces.</p>
          </div>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        <div className="art-gallery">
          {filteredArtworks.length > 0 ? (
            filteredArtworks.map((artwork) => (
              <div className="art-card" key={artwork.id}>
                <div className="art-image-container">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title} 
                    className="art-image" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://via.placeholder.com/300x300?text=Artwork+Image";
                    }}
                  />
                  {artwork.commission && (
                    <div className="commission-badge">
                      Commission Open
                    </div>
                  )}
                </div>
                <div className="art-info">
                  <h3>{artwork.title}</h3>
                  <p className="art-description">{artwork.description}</p>
                  <div className="art-footer">
                    <span className="art-date">{artwork.date}</span>
                    <span className="art-price">{artwork.price}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-artworks">
              <p>No artworks found in this category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Art;