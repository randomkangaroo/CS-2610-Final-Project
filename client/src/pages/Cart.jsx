import { formatMoney, unformat } from "accounting-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { useCart } from "../hooks/useCart";
import CartItem from "../components/CartItem";


function Cart() {
  const { cart, setCart } = useCart();
  const [totalPrice, setTotalPrice] = useState("$0.00");
  const navigate = useNavigate();

  useEffect(() => {
    // Calculate the new total price
    if (cart.length === 0) {
      // If there are no items in the cart, return to home
      setTotalPrice("$0.00");
      navigate("/");
    } else {
      let sum = 0;
      for (const item of cart) {
        sum += unformat(item.price);
      }
      setTotalPrice(formatMoney(sum));
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
        <div className="cart-price">
          <h3>{`Total Price: ${totalPrice}`}</h3>
          { cart.length > 0 &&
            <button
              onClick={/* This is temporary */
                        () => toast("This functionality doesn't work yet")
                      }
              className="btn btn-primary"
              >
                Buy
            </button>
          }
        </div>
      <div className="spacer"></div>
    </div>
  );
}

export default Cart;
