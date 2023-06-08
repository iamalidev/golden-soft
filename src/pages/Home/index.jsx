import React from "react";
import HeaderBanner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Statistics from "../../components/Statistics";
import Why from "../../components/Why";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderBanner />
      <Statistics />
      <Why />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
