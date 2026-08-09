import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div>
        <NavLink to="/" className="logo" onClick={closeMenu}>
          FutureTech
        </NavLink>
      </div>

      <button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation"
>
  {menuOpen ? "✕" : "☰"}
</button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/technologies" onClick={closeMenu}>
          Technologies
        </NavLink>

        <NavLink to="/future" onClick={closeMenu}>
          Future of IT
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;