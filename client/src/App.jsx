import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs"
import Deck from "./pages/Deck";
import Home from "./pages/Home";
import Unsubscribe from "./pages/Unsubscribe";

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
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Routes>
      </main>
      <Footer />
      <Toaster
        containerStyle={{
          top: 72,
        }}
      />
    </>
  );
}

export default App;
