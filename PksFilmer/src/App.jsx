import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar_compo/Navbar";
import routes from "./routes";
import Socialapps from "./components/Hero_Section/Socialapps";

const App = () => {
  return (
    <Router>
      {/* Navbar appears on every page */}
      <Navbar />
      <Socialapps />
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
