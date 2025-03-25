import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Serives";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </>
  );
};

export default App;
