import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Carousel } from "nuka-carousel";
import toast from "react-hot-toast";

import { useCart } from "../hooks/useCart";

function Deck() {
  const { id } = useParams();

  // State for the cart
  const { cart, setCart, itemId, setItemId, loading, setLoading } = useCart();

  // State for deck information
  const [deckId, setDeckId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cardList, setCardList] = useState("");
  const [price, setPrice] = useState("");
  const [compPrice, setCompPrice] = useState("No Price Found");
  const [bgColor, setBgColor] = useState("main-page");

  useEffect(() => {
    setLoading(true);
    // Get the information for the selected deck
    async function getDeck() {
      const res = await fetch(`/api/deck/${id}`, { method: "GET" });
      const body = JSON.parse(await res.json()).result;

      setDeckId(body.id);
      setName(body.name);
      setDescription(body.description);
      setCardList(body.card_list);
      setPrice(body.price);

      if (body.competitor_price) {
        setCompPrice(body.competitor_price);
      }

      if (body.deck_color) {
        setBgColor(body.deck_color);
      }

      setLoading(false);
    }

    getDeck();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div style={{height: "100vh"}}></div>
      </div>
    );
  }

  function addToCart() {
    // Add relevant details about this deck to the cart
    setCart([
      ...cart,
      {
        key: itemId,
        id: deckId,
        name: name,
        price: price
      }
    ]);
    setItemId(() => itemId + 1)

    // Show a message that the cart was changed
    toast.success("Added to cart!", { position: "top-right" });
  }

  return (
    <div className={bgColor}>
      <div className="container">
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
          { deckId &&
            <Carousel showArrows="hover" wrapMode="wrap" className="carousel">
              <img src={`/img/decks/${deckId}/0.jpg`} width={300} />
              <img src={`/img/decks/${deckId}/1.jpg`} width={300} />
              <img src={`/img/decks/${deckId}/2.jpg`} width={300} />
            </Carousel>
          }
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
      </div>
    </div>
  );
}

export default Deck;
