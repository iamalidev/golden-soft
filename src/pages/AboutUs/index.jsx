import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Container } from "../../components/Container/style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Container>
        <BreadCrumbs disableText={"О нас"} />
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;
