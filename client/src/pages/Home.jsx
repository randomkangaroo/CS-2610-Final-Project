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
    <div className="container">
      <h2>Decks:</h2>
      { decks && 
        <DeckCard
          deckId={2}
          imgSrc={`/img/decks/2/0.jpg`}
          imgAlt="This"
          name={"deck name"}
          price={"00.00"}
        />
        }
        <div>
          { decks &&
          decks.map((deck) => {
            <div key={deck.id}>
              <DeckCard
                deckId={deck.id}
                imgSrc={`/img/decks/{deck.id}/0.jpg`}
                imgAlt={`${deck.name} Cover Image`}
                name={deck.name}
                price={deck.price}
              />
            </div>
            })
          }
      </div>
    </div>
  );
}

export default Home;
