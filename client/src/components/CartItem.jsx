function CartItem({ deckId, deckName, deckPrice , removeFunction }) {
  return (
    <article className="cart-item">
      <img src={`/img/decks/${deckId}/0.jpg`} alt="Deck icon" height={200} />
      <div>
        <h3>{deckName}</h3>
        <h4>{deckPrice}</h4>
      </div>
      <div>
        <button onClick={removeFunction} className="btn btn-danger">Remove from Cart</button>
      </div>
    </article>
  );
}

export default CartItem;
