function FuturePage() {
  return (
    <main className="page">
      <div className="page-header">
        <p>FUTURE OF IT</p>
        <h1>What might technology look like in the future?</h1>

        <span>
          Information technology continues to evolve quickly. New tools,
          systems, and ideas may change the way people work, communicate,
          learn, and solve problems.
        </span>
      </div>

      <section className="future-list">
        <article className="future-item">
          <span>01</span>
          <div>
            <h2>Smarter Artificial Intelligence</h2>
            <p>
              AI systems may become more capable of assisting people in
              education, healthcare, business, research, and everyday tasks.
            </p>
          </div>
        </article>

        <article className="future-item">
          <span>02</span>
          <div>
            <h2>More Connected Devices</h2>
            <p>
              Homes, cities, vehicles, and workplaces may rely more heavily on
              connected devices that exchange information automatically.
            </p>
          </div>
        </article>

        <article className="future-item">
          <span>03</span>
          <div>
            <h2>Advances in Quantum Computing</h2>
            <p>
              Quantum computing could help researchers solve certain problems
              that are extremely difficult for traditional computers.
            </p>
          </div>
        </article>

        <article className="future-item">
          <span>04</span>
          <div>
            <h2>Greater Focus on Cybersecurity</h2>
            <p>
              As digital systems become more important, protecting personal
              information, networks, and online services will remain a major
              challenge.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default FuturePage;