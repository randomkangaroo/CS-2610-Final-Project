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
      console.log(decks);
    }

    getDecks();
  }, []);

  return (
    <div>
      <div>TODO: put a big banner image here</div>
      <div className="container">
        <span>Decks:</span>
        <div className="deck-card-container">
          { decks &&
          decks.map((deck) => {
            <div key={deck.id}>
              <p>Hello</p>
              <DeckCard
                deckId={deck.id}
                imgSrc="/public/img/decks/{deck.id}/0.png"
                imgAlt="{deck.name} Cover Image"
                name={deck.name}
                price={deck.price}
                desc={deck.desc}
              />
            </div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
