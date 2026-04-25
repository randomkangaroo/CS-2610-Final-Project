import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // Give the feedback to the server
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, comments: comments }),
    });

    // Toast as feedback to user
    if (res.ok) {
      toast.success("Feedback Submitted. Thank you!");
      // Clear fields so that the user doesn't submit the same thing twice
      setEmail("");
      setComments("");
    } else {
      toast.error("Error sending data to server");
    }
  }

  return (
    <div className="main-page">
      <div className="container">
        <h1 className="title">Leave Us Some Feedback</h1>
        <p className="main-text">
          Enter your email below so that we know how to contact you. Please also enter your feedback or questions in the box provided. Thanks in advance! We appreciate your feedback.
        </p>
        <form onSubmit={handleSubmit} className="form form-column">
          <label htmlFor="email">Email: </label>
          <div className="form-group">
            <input
              type="email"
              name="email"
              maxLength="256"
              placeholder="your.email@address.here"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <label htmlFor="comments">Comments: </label>
          <div className="form-group">
            <textarea
              name="comments"
              maxLength="5000"
              rows="15"
              cols="53"
              placeholder="Enter your text here..."
              value={comments}
              onChange={e => setComments(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
