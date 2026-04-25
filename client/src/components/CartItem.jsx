function CartItem({ deckId, deckName, deckPrice , removeFunction }) {
  return (
    <article className="cart-item card">
      <img src={`/img/decks/${deckId}/0.jpg`} alt="Deck icon" height={200} />
      <div>
        <h3 className="deck-title-font">{deckName}</h3>
        <p>Card sleeves and dice included at no extra cost</p>
      </div>
      <div>
        <h4 className="cart-info">{deckPrice}</h4>
        <button onClick={removeFunction} className="btn btn-danger">Remove from Cart</button>
      </div>
    </article>
  );
}

export default CartItem;
