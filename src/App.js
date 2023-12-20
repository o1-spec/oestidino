import React from "react";
import "./App.css";
import "./Appquery.css";
import HeaderNav from "./Components/HeadNav";
import About from "./Components/About";
import Project from "./Components/Projects";
import Latest from "./Components/Latest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderNav />} />
        </Routes>
        <About />
        <Project />
        <Latest />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
