import { useState } from "react";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page">
      <div className="page-header">
        <p>CONTACT</p>
        <h1>Get in touch</h1>

        <span>
          Have a question or want to learn more about FutureTech?
          Send us a message using the form below.
        </span>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="What is your message about?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>

        {submitted && (
          <p className="success-message">
            Thank you! Your message has been submitted.
          </p>
        )}
      </form>
    </main>
  );
}

export default ContactPage;