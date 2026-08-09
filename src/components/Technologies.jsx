const technologies = [
  {
    title: "Artificial Intelligence",
    description:
      "AI allows machines to perform tasks that normally require human intelligence, such as learning, reasoning, and decision-making.",
  },
  {
    title: "Robotics",
    description:
      "Robotics combines engineering and computer science to create machines that can perform physical tasks automatically.",
  },
  {
    title: "Quantum Computing",
    description:
      "Quantum computers use quantum mechanics to solve certain problems much faster than traditional computers.",
  },
  {
    title: "Internet of Things",
    description:
      "IoT connects everyday devices to the internet so they can collect data, communicate, and work together.",
  },
  {
    title: "Virtual Reality",
    description:
      "Virtual Reality creates digital environments that users can explore and interact with using specialized devices.",
  },
  {
    title: "Cybersecurity",
    description:
      "Cybersecurity protects computers, networks, systems, and data from attacks, unauthorized access, and damage.",
  },
];

function Technologies() {
  return (
    <section className="technologies">
      <div className="section-heading">
        <p>TECHNOLOGIES</p>
        <h2>Explore emerging technologies</h2>
        <span>
          Learn about some of the technologies that are changing modern
          computing and everyday life.
        </span>
      </div>

      <div className="technology-grid">
        {technologies.map((technology, index) => (
          <article className="technology-card" key={index}>
            <span className="card-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{technology.title}</h3>

            <p>{technology.description}</p>

            <a href="#">Learn more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Technologies;