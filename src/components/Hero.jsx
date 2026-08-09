import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">EMERGING TECHNOLOGIES</p>

<h1>
  Technology is changing
  <span> how we live and work.</span>
</h1>

<p className="hero-description">
  Learn about artificial intelligence, robotics, quantum computing,
  the Internet of Things, virtual reality, and cybersecurity.
</p>

        <div className="hero-buttons">
  <Link to="/technologies" className="primary-btn">
    Explore Technologies
  </Link>

  <Link to="/future" className="secondary-btn">
    Discover the Future
  </Link>
</div>
      </div>
    </section>
  );
}

export default Hero;