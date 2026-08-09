import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";

function Home() {
  return (
    <>
      <Hero />
      <Technologies />
    </>
  );
}

function TechnologiesPage() {
  return <h1 style={{ padding: "80px 8%" }}>Technologies</h1>;
}

function FuturePage() {
  return <h1 style={{ padding: "80px 8%" }}>Future of IT</h1>;
}

function AboutPage() {
  return <h1 style={{ padding: "80px 8%" }}>About</h1>;
}

function ContactPage() {
  return <h1 style={{ padding: "80px 8%" }}>Contact</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/future" element={<FuturePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;