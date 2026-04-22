import { useEffect, useState } from "react";
import DeckCard from "../components/DeckCard";
import logo from "../assets/logo.png";

function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getDecks() {
      const result = await fetch("/api/decks", { method: "GET" });
      const deckArray = await result.json();
      setDecks(JSON.parse(deckArray).result);
    }

    getDecks();
  }, []);

  return (
    <>
      {
      // <div className="container">
      //   <img src="/img/dice.jpg" />
      // </div>
      }
      <h2>Decks:</h2>
        <div className="deck-card-container">
          { decks &&
          decks.map((deck) => {
            <div key={deck.id}>
              <DeckCard
                deckId={deck.id}
                imgSrc="/img/decks/{deck.id}/0.png"
                imgAlt={`${deck.name} Cover Image`}
                name={deck.name}
                price={deck.price}
              />
            </div>
            })
          }
      </div>
    </>
  );
}

export default Home;
