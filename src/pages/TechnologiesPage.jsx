import { useState } from "react";

const technologies = [
  {
    title: "Artificial Intelligence",
    subtitle: "Machines that learn from data",
    description:
      "Artificial Intelligence is one of the fastest-growing areas of computing. AI systems can analyze large amounts of information, identify patterns, generate content, recognize images, understand language, and make predictions.",
    examples:
      "Examples include virtual assistants, recommendation systems, autonomous vehicles, medical diagnosis tools, and generative AI.",
  },
  {
    title: "Robotics",
    subtitle: "Software meets the physical world",
    description:
      "Robotics focuses on machines that can interact with the physical environment. Modern robots often use cameras, sensors, AI, and specialized software to understand their surroundings and perform tasks.",
    examples:
      "Robots are used in manufacturing, warehouses, surgery, agriculture, space exploration, and disaster response.",
  },
  {
    title: "Quantum Computing",
    subtitle: "A different way of computing",
    description:
      "Traditional computers represent information using bits that are either 0 or 1. Quantum computers use qubits and properties of quantum mechanics to process information in a different way.",
    examples:
      "Possible future applications include chemistry simulation, drug discovery, optimization, cryptography, and scientific research.",
  },
  {
    title: "Internet of Things",
    subtitle: "Connecting everyday devices",
    description:
      "IoT refers to physical objects that contain sensors, software, and internet connectivity. These devices can collect information, communicate with other systems, and respond automatically.",
    examples:
      "Smart homes, fitness watches, connected cars, industrial sensors, smart agriculture, and smart city systems are common examples.",
  },
  {
    title: "Virtual Reality",
    subtitle: "Entering digital environments",
    description:
      "Virtual Reality allows users to experience computer-generated environments through headsets and motion controllers. It can create a strong feeling of presence inside a digital space.",
    examples:
      "VR is used for entertainment, flight simulation, employee training, education, architecture, therapy, and medical training.",
  },
  {
    title: "Cybersecurity",
    subtitle: "Protecting the digital world",
    description:
      "Cybersecurity focuses on protecting digital systems from unauthorized access, theft, disruption, and damage. As more services move online, cybersecurity becomes increasingly important.",
    examples:
      "Important areas include network security, password protection, encryption, malware prevention, ethical hacking, and identity management.",
  },
];

function TechnologiesPage() {
  const [search, setSearch] = useState("");

  const filteredTechnologies = technologies.filter((technology) => {
    const searchValue = search.toLowerCase();

    return (
      technology.title.toLowerCase().includes(searchValue) ||
      technology.subtitle.toLowerCase().includes(searchValue) ||
      technology.description.toLowerCase().includes(searchValue) ||
      technology.examples.toLowerCase().includes(searchValue)
    );
  });

  return (
    <main className="page">
      <div className="page-header">
        <p>TECHNOLOGIES</p>

        <h1>Understanding emerging technologies</h1>

        <span>
          New technologies are changing how people communicate, work,
          learn, travel, and solve problems. Search through the six
          technologies below to learn more about them.
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
          <button type="button" onClick={() => setSearch("")}>
            Clear
          </button>
        )}
      </div>

      {filteredTechnologies.length > 0 ? (
        <div className="technology-page-grid">
          {filteredTechnologies.map((technology, index) => (
            <article
              className="technology-page-card"
              key={technology.title}
            >
              <span className="technology-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{technology.title}</h2>

              <h3>{technology.subtitle}</h3>

              <p>{technology.description}</p>

              <p className="examples">
                <strong>Where we see it:</strong>{" "}
                {technology.examples}
              </p>
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
    </main>
  );
}

export default TechnologiesPage;