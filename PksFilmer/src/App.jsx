import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar_compo/Navbar";
import routes from "./routes";
import Socialapps from "./components/Hero_Section/Socialapps";
import ReactGA from "react-ga4";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("GTM-MXW6MKRB");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "App.jsx",
    });
  }, []);

  return (
    <Router>
      {/* Navbar appears on every page */}
      <Navbar />
      <div className="hidden md:block">
        <Socialapps />
      </div>
      <main className="App">
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
