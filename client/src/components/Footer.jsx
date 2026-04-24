import { useState } from "react";
import toast from "react-hot-toast";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

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
      toast.error(`Subscription error: ${data.error}`);
    } else {
      toast.success(`Subscribed! Thanks, ${name}!`);
    }
  }

  return (
    <footer>
      <div className="footer">
        <div className="row">
          <h4>Join our newsletter!</h4>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                maxLength="256"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                maxLength="256"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <div className="footer-btn">
              <button type="submit" className="btn">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="row">
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="row">
          <i>First-Striker Custom Commander Decks is not affiliated with, endorsed, or sponsored by Wizards of the Coast.</i>
        </div>
        <div className="row">
          Copyright © 2026 First Striker Decks - All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
