import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      <Welcome />
      <About />
      <Projects />
    </main>
  );
}

export default App;
