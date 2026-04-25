import { formatMoney, unformat } from "accounting-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { useCart } from "../hooks/useCart";

function CartPrice({ buyFunction }) {
  const { cart } = useCart();
  const [netPrice, setNetPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const shippingCost = 14.99;

  useEffect(() => {
    // Calculate the new total price
    if (cart.length === 0) {
      // If there are no items in the cart, return to home
      navigate("/");
    } else {
      let sum = 0;
      for (const item of cart) {
        sum += unformat(item.price);
      }
      setNetPrice(sum);
      setTotalPrice(sum + shippingCost);
    }
  }, [cart]);

  return (
  <div className="cart-price">
    <hr />
    <h4>{`Net Price: ${formatMoney(netPrice)}`}</h4>
    <h4>{`Shipping cost: ${formatMoney(shippingCost)}`}</h4>
    <hr />
    <h2>{`Total Price: ${formatMoney(totalPrice)}`}</h2>
    { cart.length > 0 &&
      <button onClick={buyFunction} className="btn btn-primary">
          Buy
      </button>
    }
  </div>
  );  
}

export default CartPrice;
