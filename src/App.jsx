import { useState } from "react";

import "./App.css";
import Header from "./components/header/Header";

import HomeSection from "./components/homesection/HomeSection";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HomeSection/>
      <About/>
      <Projects/>
      <Contact/>
     
    </>
  );
}

export default App;
