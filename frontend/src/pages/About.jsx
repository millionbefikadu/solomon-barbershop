import { useState } from "react";
import "./About.css";
import hero from "../assets/images/haircut3.png";

// photos (adjust filenames if different)
import solomonImg from "../assets/images/solomun.jpeg";
import asmarinaImg from "../assets/images/azamarina15.jpeg";

import MapSection from "../components/MapSection.jsx"; // ← reuse component

export default function About() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="abt-hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="abt-overlay" />
        <div className="abt-hero-content">
          <h1>About Solomon & Asmarina</h1>
          <p>Craft, hospitality, and detail—every service, every time.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="abt-wrap">
        <div className="abt-card">
          <h2>Our Story</h2>
          <p className="muted">
            We started with a simple idea to give every client a sharp look and a smooth experience.
            From modern fades to classic scissor work, we blend precision with genuine hospitality.
            <br /><br />
            <strong>Solomon</strong>, with over 20 years of barbering experience, has built a trusted reputation
            for style, detail, and care. His mission is simple: every client should leave looking sharp and
            feeling confident.
            <br /><br />
            Inside the same space, <strong>Asmarina Beauty Lab</strong>, founded by <strong>Helen</strong> and
            <strong> Winta</strong>, offers professional hair braiding, treatments, and beauty services designed
            to highlight elegance and individuality. Together, we create a welcoming environment where skill meets
            passion  for both men’s grooming and women’s beauty.
          </p>
        </div>

        {/* Side-by-side profiles */}
        <div className="bio-grid">
          <article className="bio-card">
            <figure className="bio-media">
              <img src={solomonImg} alt="Solomon — master barber at Solomon Barbershop"  loading="lazy"
                 decoding="async"/>
            </figure>
            <div className="bio-body">
              <h3>Solomon Barbershop</h3>
              <p className="muted">
                Precision fades, classic cuts, beard shaping, and warm hospitality — backed by 20+ years of experience.
              </p>
              <div className="bio-actions">
                <a className="btn primary" href="tel:1-647-745-4586">Book By Phone</a>
                <a className="btn ghost" href="/services">View Services</a>
              </div>
            </div>
          </article>

          <article className="bio-card">
            <figure className="bio-media">
              <img src={asmarinaImg} alt="Asmarina Beauty Lab — women’s hair & beauty by Helen and Winta"  loading="lazy"
               decoding="async" />
            </figure>
            <div className="bio-body">
              <h3>Asmarina Beauty Lab</h3>
              <p className="muted">
                Braiding, treatments, and beauty services by Helen & Winta elegant, detailed, and client-focused.
              </p>
              <div className="bio-actions">
                <a className="btn primary" href="https://www.tiktok.com/@asmarinabeautylab" target="_blank" rel="noreferrer">
                  TikTok
                </a>
                <a className="btn ghost" href="https://www.instagram.com/asmarinabeautylab" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* CTA + Map toggle */}
        <div className="abt-cta">
          <a className="btn primary" href="/gallery">See Our Work</a>
          <button className="btn ghost" onClick={() => setShowMap(v => !v)}>
            {showMap ? "Hide Map" : "Find Us"}
          </button>
        </div>

        {showMap && (
          <div className="abt-map-wrap">
            <MapSection
              title="Visit Us"
              address="1351 Danforth Ave, Toronto, ON"
              mapQuery="1351 Danforth Ave, Toronto, ON"
            />
          </div>
        )}
      </section>
    </div>
  );
}
