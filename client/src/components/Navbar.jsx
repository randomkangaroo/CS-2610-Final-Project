import { Link, useNavigate, useLocation } from "react-router";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"><img src={logo} alt="My App" className="navbar-logo" /></Link>
      </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
        </div>
    </nav>
  );
}

export default Navbar;
