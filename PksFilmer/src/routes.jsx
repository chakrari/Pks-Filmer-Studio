import React from "react";
import Home from "./pages/Home_Page/Home";
import About from "./pages/Aboutus_Page/About";
import Contact from "./pages/Contact_Page/Contact";
import CinematicVideo from "./pages/CinematicWedding_Page/CinematicVideo"

// Routes array with path and component mappings
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cinematic-video",
    element: <CinematicVideo />,
  }
];

export default routes;
