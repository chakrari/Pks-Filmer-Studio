import React from "react";
import Home from "./pages/Home_Page/Home";
import About from "./pages/Aboutus_Page/About";
import Contact from "./pages/Contact_Page/Contact";
import CinematicVideo from "./pages/CinematicWedding_Page/CinematicVideo"
import Gallery from "./pages/Gallery_Page/gallery"
import Services from "./pages/Services_Page/Services";
import TeamPage from "./pages/Teams_Page/TeamPage";

// Routes array with path and component mappings
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
  {
    path: "/contactus",
    element: <Contact />,
  },
  {
    path: "/cinematic-video",
    element: <CinematicVideo />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  
];

export default routes;
