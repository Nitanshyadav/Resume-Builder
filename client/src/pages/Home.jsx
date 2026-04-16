import React from "react";
import Banner from "../Components/Home/Banner";
import Hero from "../Components/Home/Hero";
import Features from "../Components/home/Features";
import Testimonials from "../Components/home/Testimonials";
import CallToAction from "../Components/home/CallToAction";
import Footer from "../Components/home/Footer";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
export default Home;