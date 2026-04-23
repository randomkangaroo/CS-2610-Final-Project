function CartItem({ deckId, deckName, deckPrice , removeFunction }) {
  return (
    <article className="cart-item">
      <h3>{deckName}</h3>
      <h4>{deckPrice}</h4>
      <p>TODO: add image somewhere</p>
      <button onClick={removeFunction} className="btn btn-danger">Remove from Cart</button>
    </article>
  );
}

export default CartItem;
