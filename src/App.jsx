import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Serives";
import Navbar from "./components/navbar/Navbar";
import Bottom from "./components/Bottom/Bottom";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Bottom />
    </>
  );
};

export default App;
