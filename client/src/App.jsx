import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Deck from "./pages/Deck";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deck/:id" element={<Deck />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
