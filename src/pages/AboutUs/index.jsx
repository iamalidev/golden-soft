import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Container } from "../../components/Container/style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contact from "../../components/Contact";
import * as Style from "./style";

import img1 from "../../assets/img/about-banner.png";
import img2 from "../../assets/img/about-img2.png";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Container>
        <BreadCrumbs disableText={"О нас"} />
        <Style.AboutBanner>
          <a
            href="https://youtu.be/QAZcsh2tjGM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Style.BannerImg>
              <img src={img1} alt="" />
            </Style.BannerImg>
          </a>
          <Style.BannerInfo>
            <Style.Badge>О НАС</Style.Badge>
            <Style.TitlesWrapper>
              <Style.BlackTitle>Компания</Style.BlackTitle>
              <Style.BlueTitle>Golden Soft</Style.BlueTitle>
            </Style.TitlesWrapper>
            <Style.InfoText>
              Sit tempor ante justo amet duis. Ultricies cras eleifend elit,
              posuere et risus non. Id et ut pellentesque consequat, amet erat
              gravida euismod pharetra.
            </Style.InfoText>
          </Style.BannerInfo>
        </Style.AboutBanner>
      </Container>
      <Style.AboutStat>
        <Style.Items>
          <Style.ItemTitle>5,567</Style.ItemTitle>
          <Style.ItemText>Счастливых клиентов</Style.ItemText>
        </Style.Items>
        <Style.Items>
          <Style.ItemTitle>1245</Style.ItemTitle>
          <Style.ItemText>Продуктов на выбор</Style.ItemText>
        </Style.Items>
        <Style.Items>
          <Style.ItemTitle>372</Style.ItemTitle>
          <Style.ItemText>Продаж в день</Style.ItemText>
        </Style.Items>
        <Style.Items>
          <Style.ItemTitle>20</Style.ItemTitle>
          <Style.ItemText>Лет на рынке</Style.ItemText>
        </Style.Items>
      </Style.AboutStat>
      <Container>
        <Style.AboutSection>
          <Style.BannerInfo>
            <Style.Badge>НАША МИССИЯ</Style.Badge>
            <Style.InfoText>
              Sit tempor ante justo amet duis. Ultricies cras eleifend elit,
              posuere et risus non. Id et ut pellentesque consequat, amet erat
              gravida euismod pharetra.
            </Style.InfoText>
          </Style.BannerInfo>
          <Style.BannerImg>
            <img src={img2} alt="" />
          </Style.BannerImg>
        </Style.AboutSection>
      </Container>
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutUs;
