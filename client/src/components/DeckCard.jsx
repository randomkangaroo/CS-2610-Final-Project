import { Link } from "react-router";

function DeckCard({ deckId, imgSrc, imgAlt, name, price }) {
  return (
    <article className="deck-card">
      <Link to="/api/decks/{deckId}">
        <img
          src={imgSrc}
          alt={imgAlt}
        />
        <p>{name}</p>
        <p>${price}</p>
      </Link>
    </article>
  );
}

export default DeckCard;
