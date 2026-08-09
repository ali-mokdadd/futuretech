import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h2>FutureTech</h2>
          <p>
            A simple educational website about emerging technologies
            and the future of information technology.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/technologies">Technologies</Link>
          <Link to="/future">Future of IT</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FutureTech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;