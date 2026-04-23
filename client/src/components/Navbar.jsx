import { Link, useNavigate, useLocation } from "react-router";
import logo from "../assets/logo.png";
import cart from "../assets/shopping_cart.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"><img src={logo} alt="Company logo" className="navbar-logo" /></Link>
      </div>
        <div className="navbar-links">
          <Link to="/cart"><img src={cart} alt="Cart"/></Link>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </div>
    </nav>
  );
}

export default Navbar;
