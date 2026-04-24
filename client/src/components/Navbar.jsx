import { Link, useNavigate, useLocation } from "react-router";

import { useCart } from "../hooks/useCart";
import logo from "../assets/logo.png";
import cartImg from "../assets/shopping_cart.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Company logo" className="navbar-logo" />
          &ensp;First Striker Decks
        </Link>
      </div>
        <div className="navbar-links">
          { cart.length > 0 &&
            <Link to="/cart"><img src={cartImg} alt="Cart"/></Link>
          }
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </div>
    </nav>
  );
}

export default Navbar;
