import { useState } from "react";
import { Link } from "react-router-dom";

const technologies = [
  {
    title: "Artificial Intelligence",
    description:
      "AI enables computers to learn from data, recognize patterns, understand language, and support decision-making. It is already used in healthcare, education, transportation, finance, and everyday applications.",
  },
  {
    title: "Robotics",
    description:
      "Robotics combines programming, electronics, sensors, and mechanical engineering. Robots can perform repetitive, dangerous, or precise tasks in factories, hospitals, warehouses, and even homes.",
  },
  {
    title: "Quantum Computing",
    description:
      "Quantum computers use qubits instead of traditional bits. They may eventually solve scientific, optimization, and cryptography problems much faster than traditional computers.",
  },
  {
    title: "Internet of Things",
    description:
      "The Internet of Things connects physical devices such as watches, cars, appliances, cameras, and sensors to the internet so they can exchange data.",
  },
  {
    title: "Virtual Reality",
    description:
      "Virtual Reality creates immersive digital environments and is used in gaming, education, training, architecture, medicine, and simulation.",
  },
  {
    title: "Cybersecurity",
    description:
      "Cybersecurity protects computers, networks, applications, and personal information from attacks, unauthorized access, and digital threats.",
  },
];

function Technologies() {
  const [search, setSearch] = useState("");

  const filteredTechnologies = technologies.filter((technology) => {
    const searchValue = search.toLowerCase();

    return (
      technology.title.toLowerCase().includes(searchValue) ||
      technology.description.toLowerCase().includes(searchValue)
    );
  });

  return (
    <section className="technologies">
      <div className="section-heading">
        <p>TECHNOLOGIES</p>

        <h2>Explore emerging technologies</h2>

        <span>
          Search and learn about some of the technologies changing our world.
        </span>
      </div>

      <div className="technology-search">
        <input
          type="text"
          placeholder="Search technologies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button onClick={() => setSearch("")}>
            Clear
          </button>
        )}
      </div>

      {filteredTechnologies.length > 0 ? (
        <div className="technology-grid">
          {filteredTechnologies.map((technology, index) => (
            <article
              className="technology-card"
              key={technology.title}
            >
              <span className="card-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{technology.title}</h3>

              <p>{technology.description}</p>

              <Link to="/technologies">
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No technology found</h3>

          <p>
            Try searching for AI, robotics, quantum, IoT, VR, or cybersecurity.
          </p>
        </div>
      )}
    </section>
  );
}

export default Technologies;