import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import toast from "react-hot-toast";

function Unsubscribe() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(searchParams.get("q") || "");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    // Tell the server to remove this email
    const res = await fetch("/api/newsletter/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    // Toast as feedback to user
    if (res.ok) {
      toast.success("Unsubscribed");
    } else {
      toast.error("Could not unsubscribe");
    }
  }

  return (
    <div className="main-page">
      <div className="container">
        <div className="spacer"></div>
        <h1 className="title">We're sorry to see you go</h1>
        <p className="main-text">
          Enter your email below and click the button to remove your email from receiving our newsletters.
        </p>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              maxLength="256"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-danger">Unsubscribe</button>
          </div>
        </form>
        <div className="spacer"></div>
      </div>
    </div>
  );
}

export default Unsubscribe;
