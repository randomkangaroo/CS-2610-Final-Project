import { useEffect, useState } from "react";
import DeckCard from "../components/DeckCard";
import logo from "../assets/logo.png";

function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    // TODO: put deck fetching from the server here
  }, []);

  return (
    <div>
      <div>TODO: put a big banner image here</div>
      <div className="container">
        <span>Decks:</span>
        <div className="deck-card-container">
          {
          /*
          decks.map((deck) => {
            <div key={deck.id}>
              <DeckCard
                deckId={deck.id}
                imgSrc=
                imgAlt=
                name={deck.name}
                price={deck.price}
                desc={deck.desc}
              />
            </div>
            })
          */
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
