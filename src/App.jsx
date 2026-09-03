import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";

import Home from "./pages/Home.jsx";
import Stay from "./pages/Stay.jsx";
import Dining from "./pages/Dining.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";
import Booking from "./pages/Booking.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;