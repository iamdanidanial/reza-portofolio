import React from "react";
import { Footer } from "../component/Footer";
import { Project } from "../component/Project";
import Hero from "../component/Hero";
import Navbar from "../component/Navigation";
export const Home = () => {
  return (
    <div className="App">
      <Hero />
      <Project />
    </div>
  );
};
