import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      <Navigation />
      <Welcome />
      <About />
      <Projects />
    </main>
  );
}

export default App;
