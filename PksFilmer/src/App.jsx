import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar_compo/Navbar";
import Carousel from "./components/Carousel_compo/Carousel";
import Hero from "./components/Hero_Section/Hero";
import Socialapps from "./components/Hero_Section/Socialapps";
import About from "./components/About_us/About";
import { CarouselProvider } from "./components/Carousel_compo/CarouselContext";

import cr1 from "./assets/photo_for_website/cr1.jpg";
import cr2 from "./assets/photo_for_website/cr2.jpg";
import cr3 from "./assets/photo_for_website/cr3.jpg";
import cr4 from "./assets/photo_for_website/cr4.jpg";

const slides = [cr1, cr2, cr3, cr4];

const App = () => {
  return (
    <Router>
      <CarouselProvider>
        <Navbar />
        <main className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="relative z-0">
                    <Carousel slides={slides} />
                  </div>
                  <Hero />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            </Routes>
          {/* Socialapps will be rendered on every page */}
          <Socialapps />
        </main>
      </CarouselProvider>
    </Router>
  );
};

export default App;