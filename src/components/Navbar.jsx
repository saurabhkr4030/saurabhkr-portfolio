import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Saurabh Kr</div>

      {/* Hamburger Icon */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Project</a></li>
        <li><a href="#certification" onClick={() => setOpen(false)}>Certification</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      <Link to="/cv" className="btn desktop-only">
        View CV
      </Link>
    </nav>
  );
}
