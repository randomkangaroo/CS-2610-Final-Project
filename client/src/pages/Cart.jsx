import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useCart } from "../hooks/useCart";
import CartItem from "../components/CartItem";


function Cart() {
  const { cart, setCart } = useCart();
  const [totalPrice, setTotalPrice] = useState("$0.00");

  useEffect(() => {
    // Calculate the new total price
    if (cart.length === 0) {
      setTotalPrice("$0.00");
    } else {
      for (const item of cart) {
        console.log(item.price);
      }
    }
  }, [cart]);

  function removeItem(item, index) {
    const current = [...cart];
    current.splice(index, 1);
    setCart(current)
  }

  return (
    <div className="container">
      <h2>Cart:</h2>
      { cart &&
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
      { cart.length > 0 &&
        <div className="container">
          <h3>{`Total Price: ${totalPrice}`}</h3>
          <button
            onClick={/* This is temporary */
                      () => toast("This functionality doesn't work yet")
                    }
            className="btn btn-primary"
            >
              Buy
          </button>
        </div>
      }
      <div className="spacer"></div>
    </div>
  );
}

export default Cart;
