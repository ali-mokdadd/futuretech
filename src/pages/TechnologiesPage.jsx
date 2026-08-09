const technologies = [
  {
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence enables machines to learn, reason, and make decisions using data.",
  },
  {
    title: "Robotics",
    description:
      "Robotics combines software, electronics, and mechanical systems to automate physical tasks.",
  },
  {
    title: "Quantum Computing",
    description:
      "Quantum computing uses quantum principles to solve certain complex problems differently from traditional computers.",
  },
  {
    title: "Internet of Things",
    description:
      "IoT connects physical devices to the internet so they can exchange information and react automatically.",
  },
  {
    title: "Virtual Reality",
    description:
      "Virtual Reality creates immersive digital environments that users can explore and interact with.",
  },
  {
    title: "Cybersecurity",
    description:
      "Cybersecurity protects systems, networks, and information from unauthorized access and digital attacks.",
  },
];

function TechnologiesPage() {
  return (
    <main className="page">
      <div className="page-header">
        <p>TECHNOLOGIES</p>
        <h1>Emerging Technologies</h1>

        <span>
          Explore some of the technologies that are changing computing,
          business, communication, and everyday life.
        </span>
      </div>

      <div className="technology-page-grid">
        {technologies.map((technology, index) => (
          <article className="technology-page-card" key={technology.title}>
            <span className="technology-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h2>{technology.title}</h2>
            <p>{technology.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default TechnologiesPage;