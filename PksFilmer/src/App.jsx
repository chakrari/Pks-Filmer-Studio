import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar_compo/Navbar";
import Carousel from "./components/Carousel_compo/Carousel";
import Hero from "./components/Hero_Section/Hero";
import Socialapps from "./components/Hero_Section/Socialapps";
import About from "./components/About_us/About";
import { CarouselProvider } from "./components/Carousel_compo/CarouselContext";


import carousel1 from "./assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel1.jpg"
import carousel2 from "./assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel2.jpg"
import carousel3 from "./assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel3.jpg"
import carousel4 from "./assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel4.jpg"



const slides = [carousel1, carousel2, carousel3, carousel4];

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
