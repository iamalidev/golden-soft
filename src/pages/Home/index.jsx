import React from "react";
import HeaderBanner from "../../components/Banner";
import Category from "../../components/Category";
import Header from "../../components/Header";
import Statistics from "../../components/Statistics";
import Why from "../../components/Why";
import Footer from "../../components/Footer";
import PopularProducts from "../../components/PopularProducts";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderBanner />
      <Statistics />
      <Why />
      <Category />
      <PopularProducts />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
