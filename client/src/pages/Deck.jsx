import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Deck() {
  const { id } = useParams();

  // State for deck information
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cardList, setCardList] = useState("");
  const [price, setPrice] = useState("");
  const [compPrice, setCompPrice] = useState("");

  // State for image carousel
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  useEffect(() => {
    async function getDeck() {
      const res = await fetch(`/api/deck/${id}`, { method: "GET" });
      const body = JSON.parse(await res.json()).result;

      setName(body.name);
      setDescription(body.description);
      setCardList(body.card_list);
      setPrice(body.price);
      setCompPrice(body?.competitor_price);
    }

    getDeck();
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{cardList}</p>
      <p>{price}</p>
      <p>{compPrice}</p>
    </div>
  );
}

export default Deck;
