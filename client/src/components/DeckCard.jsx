import { Link } from "react-router";

function DeckCard({ deckId, imgSrc, imgAlt, name, price }) {
  return (
    <article className="deck-card">
      <Link to={`/deck/${deckId}`}>
        <img
          src={imgSrc}
          alt={imgAlt}
          height={300}
        />
        <div>
          <h2 className="fancy-font">{name}</h2>
          <h3>{price}</h3>
        </div>
      </Link>
    </article>
  );
}

export default DeckCard;
