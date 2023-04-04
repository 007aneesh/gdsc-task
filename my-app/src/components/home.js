import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Companies from "./companies";
import Commit from "./commit";
import Work from "./work";
import Banner from "./banner";
import Testimonials from "./testimonial";
import Last from "./last";
import Footer from "./footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Commit />
      <Work />
      <Banner />
      <Testimonials />
      <Last />
      <Footer />
    </>
  );
};

export default Home;
