import React from "react";
import KeyFeaturesMain from "./components/Services/KeyFeaturesMain";
import KeyBenefits from "./components/Services/KeyBenefits";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/HeroSection";

const App = () => {
  return (
    <>
      <Hero />
      <KeyFeaturesMain />
      <KeyBenefits />
      <Footer />
    </>
  );
};

export default App;
