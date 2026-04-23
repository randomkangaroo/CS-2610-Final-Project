import { useCart } from "../hooks/useCart";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useCart();
  console.log(cart);

  function removeItem() {}

  return (
    <div className="container">
      <h2>Cart:</h2>
      TODO!
      I think if I can fix the error on the home page, then this page will also be fixed
      { cart &&
        cart.map((item) => {
          <div key={item.id}>
            <CartItem
              deckId={item.id}
              deckName={item.name}
              deckPrice={item.price}
              removeFunction={removeItem}
            />
          </div>
        })
      }
      <div className="container">
        <h3>Total Price: TODO!</h3>
        <button className="btn btn-primary">Buy</button>
      </div>
    </div>
  );
}

export default Cart;
