import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Carousel } from "nuka-carousel";

function Deck() {
  const { id } = useParams();

  // State for deck information
  const [deckId, setDeckId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cardList, setCardList] = useState("");
  const [price, setPrice] = useState("");
  const [compPrice, setCompPrice] = useState("");

  useEffect(() => {
    // Get the information for the selected deck
    async function getDeck() {
      const res = await fetch(`/api/deck/${id}`, { method: "GET" });
      const body = JSON.parse(await res.json()).result;

      setDeckId(body.id);
      setName(body.name);
      setDescription(body.description);
      setCardList(body.card_list);
      setPrice(body.price);
      setCompPrice(body?.competitor_price);
    }

    getDeck();
  }, []);

  function addToCart() {
    console.log("add to cart clicked");
    // TODO!
  }

  return (
    <div className="deck-page">
      <div className="deck-item">
        <h1>{name}</h1>
      </div>
      <div className="deck-item">
        <h4>
          First Striker Price: {price} &emsp;||&emsp;Price on CardKingdom: {compPrice}
        </h4>
      </div>
      <div className="deck-item">
        <Carousel>
          <img src={`/img/decks/${deckId}/0.jpg`} width={200} height={300} />
          <img src={`/img/decks/${deckId}/1.jpg`} width={200} height={300} />
        </Carousel>
      </div>
      <div className="deck-item">
        <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
      </div>
      <div className="container">
        <p dangerouslySetInnerHTML={{ __html: description}}></p>
      </div>
        <h3>Full Card List:</h3>
        <p dangerouslySetInnerHTML={{ __html: cardList}}></p>
    </div>
  );
}

export default Deck;
