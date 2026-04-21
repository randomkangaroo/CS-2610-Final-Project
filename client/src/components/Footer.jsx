import { useState } from "react";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const result = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email
      }),
    });

    const data = await result.json();

    if (!result.ok) {
      setError(data.error);
      return;
    }
  }

  return (
    <footer>
      <div className="footer">
        <div className="row">
          <h4>Join our newsletter!</h4>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                maxLength="256"
                onChange={(e) => setName(e.target.value)}
                required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                maxLength="256"
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <button type="submit" className="btn">Add Me</button>
          </form>
        </div>
        <div className="row">
          <ul>
            <li>Contact us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="row">
          Company Name Copyright © 2026 Company - All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
