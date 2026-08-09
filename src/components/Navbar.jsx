import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <h2>FutureTech</h2>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/technologies">Technologies</Link>
        <Link to="/future">Future of IT</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;