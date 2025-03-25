import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Serives";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
};

export default App;
