// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/haircut1.png";
import introImg from "../assets/images/azamrina4.jpeg";
import "./Home.css";
import MapSection from "../components/MapSection.jsx";

export default function Home() {
  const asmaraRef = useRef(null);

  // Fade-in effect for Asmarina section
  useEffect(() => {
    const el = asmaraRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("in");
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero - Solomon Barbershop */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
        role="img"
        aria-label="Barber cutting hair"
      >
        <div className="overlay" />
        <div className="hero-content">
          <h1>Sharp Looks. Smooth Experience.</h1>
          <p>Premium cuts, fades, and beard styling—right in your neighborhood.</p>
          <div className="actions">
            <a className="btn primary" href="tel:+1-647-745-4586">
              Book By Phone
            </a>
            <Link className="btn ghost" to="/services">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Asmarina Beauty Lab – full hero with gold tint + fade-in */}
      <section
        ref={asmaraRef}
        className="asmara-hero parallax"
        style={{ backgroundImage: `url(${introImg})` }}
        role="img"
        aria-label="Asmarina Beauty Lab — women’s hair & beauty"
      >
        <div className="overlay" />
        <div className="asmara-content">
          <h2>Asmarina Beauty Lab</h2>
          <p>Women’s hair & beauty — elegance, color, and care.</p>
          
        </div>
      </section>

      {/* Map above footer */}
      <MapSection
        title="Visit Solomon Barbershop"
        address="1351 Danforth Ave , Toronto, ON"
        mapQuery="1351 Danforth Ave , Toronto, ON"
      />
    </div>
  );
}
