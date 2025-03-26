import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Bottom from "./components/Bottom/Bottom";


const App = () => {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="*" element={<NotFound /> } />
    </Routes>
    <Bottom/>

    </>
  );
};

export default App;
