import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="brand">Solomon Barbershop</div>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className={`navlinks ${open ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/solomongpt" onClick={() => setOpen(false)}>SolomonGPT</NavLink>
      </nav>

      <a className="cta" href="tel:+1-555-123-4567">Call Now</a>
    </header>
  );
}
