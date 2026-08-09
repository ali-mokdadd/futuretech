function AboutPage() {
  return (
    <main className="page">
      <div className="page-header">
        <p>ABOUT</p>
        <h1>About FutureTech</h1>

        <span>
          FutureTech is an educational website created to introduce users to
          important emerging technologies and explain how they may influence
          society and the future of information technology.
        </span>
      </div>

      <section className="about-content">
        <div>
          <h2>Our Purpose</h2>
          <p>
            The purpose of this website is to make modern technology topics
            easier to understand for students and general users.
          </p>
        </div>

        <div>
          <h2>What We Cover</h2>
          <p>
            The website focuses on artificial intelligence, robotics, quantum
            computing, the Internet of Things, virtual reality, cybersecurity,
            and future trends in IT.
          </p>
        </div>

        <div>
          <h2>Why It Matters</h2>
          <p>
            Technology is becoming part of almost every area of daily life.
            Understanding these technologies can help people better understand
            the changes happening around them.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;