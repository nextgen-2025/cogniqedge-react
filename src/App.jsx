import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Serives";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";

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
