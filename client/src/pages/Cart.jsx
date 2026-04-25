import toast from "react-hot-toast";
import { useCart } from "../hooks/useCart";
import CartItem from "../components/CartItem";
import CartPrice from "../components/CartPrice";

function Cart() {
  const { cart, setCart } = useCart();

  function removeItem(item, index) {
    const current = [...cart];
    current.splice(index, 1);
    setCart(current)
  }

  return (
    <div className="main-page">
      <div className="container">
        <h2>Cart:</h2>
        { cart.length > 0 &&
          cart.map((item, index) => (
            <div key={item.key}>
              <CartItem
                deckId={item.id}
                deckName={item.name}
                deckPrice={item.price}
                removeFunction={() => removeItem(item.key, index)}
              />
            </div>
          ))
        }
        <CartPrice buyFunction={() => toast("This isn't implemented yet")} />
      </div>
    </div>
  );
}

export default Cart;
