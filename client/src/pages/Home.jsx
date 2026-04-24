import { useEffect, useState } from "react";

import DeckCard from "../components/DeckCard";
import { useCart } from "../hooks/useCart"
import logo from "../assets/logo.png";

function Home() {
  const { loading, setLoading } = useCart();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getDecks() {
      const result = await fetch("/api/decks", { method: "GET" });
      const deckArray = await result.json();
      setDecks(JSON.parse(deckArray).result);
      setLoading(false);
    }

    getDecks();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div style={{height: "100vh"}}></div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 style={{fontSize: "100pt", textAlign: "center"}}>Welcome!</h1>
      <h2>Available Decks:</h2>
        <div className="decks-container">
          { !loading && decks &&
          decks.map((deck) => (
            <div key={deck.id}>
              <DeckCard
                deckId={deck.id}
                imgSrc={`/img/decks/${deck.id}/0.jpg`}
                imgAlt={`${deck.name} Cover Image`}
                name={deck.name}
                price={deck.price}
              />
            </div>
            ))
          }
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default Home;
