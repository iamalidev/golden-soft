import React from "react";
import FacebookIcon from "../../assets/img/svgIcons/facebookIcon";
import FooterLogo from "../../assets/img/svgIcons/footerLogo";
import TwitterIcon from "../../assets/img/svgIcons/twitterIcon";
import VkIcon from "../../assets/img/svgIcons/vkIcon";
import FooterAccordion from "../Accordion";
import { Container } from "../Container/style";
import * as Style from "./style";

const Footer = () => {
  return (
    <Style.FooterWrapper>
      <Container>
        <Style.FooterTop>
          <Style.FooterSocial>
            <Style.FooterLogoWrapper>
              <FooterLogo />
            </Style.FooterLogoWrapper>
            <Style.FooterSocialMedia>
              <a
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VkIcon />
              </a>
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </Style.FooterSocialMedia>
          </Style.FooterSocial>
          <Style.FooterLinksWrapper>
            <Style.FooterLinks>
              <Style.FooterLinksTitle>Навигация</Style.FooterLinksTitle>
              <Style.FooterLinksContent>
                <Style.FooterLinksLink to="/">Главная</Style.FooterLinksLink>
                <Style.FooterLinksLink to="/category">
                  Категории
                </Style.FooterLinksLink>
                <Style.FooterLinksLink to="/contact">
                  Контакты
                </Style.FooterLinksLink>
                <Style.FooterLinksLink to="/about-us">
                  О нас
                </Style.FooterLinksLink>
              </Style.FooterLinksContent>
            </Style.FooterLinks>
            <Style.FooterLinks>
              <Style.FooterLinksTitle>Наши контакты</Style.FooterLinksTitle>
              <Style.FooterLinksContent>
                <Style.FooterLinksLink href="#">Телефоны</Style.FooterLinksLink>
                <Style.FooterLinksLink href="tel:+998886000860">
                  +7 (988) 565 00 38
                </Style.FooterLinksLink>
                <Style.FooterLinksLink>
                  +375 33 662 82 56
                </Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">Email</Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">
                  vladpertcev@mail.ru
                </Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">
                  korobko416@gmail.com
                </Style.FooterLinksLink>
              </Style.FooterLinksContent>
            </Style.FooterLinks>
            <Style.FooterLinks>
              <Style.FooterLinksTitle>Наш адрес</Style.FooterLinksTitle>
              <Style.FooterLinksContent>
                <Style.FooterLinksLink href="#">Россия,</Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">
                  Ростов-на-Дону ул.
                </Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">
                  Богачева, 16
                </Style.FooterLinksLink>
              </Style.FooterLinksContent>
            </Style.FooterLinks>
            <Style.FooterLinks>
              <Style.FooterLinksTitle>Информация</Style.FooterLinksTitle>
              <Style.FooterLinksContent>
                <Style.FooterLinksLink href="#">
                  Доставка и оплата
                </Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">Гарантии</Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">
                  Возврат товара
                </Style.FooterLinksLink>
              </Style.FooterLinksContent>
            </Style.FooterLinks>
          </Style.FooterLinksWrapper>
          <Style.AccordionWrapper>
            <FooterAccordion />
          </Style.AccordionWrapper>
        </Style.FooterTop>
        <Style.FooterBottom>
          <Style.FooterBottomText>
            © {new Date().getFullYear()} Golden Soft All rights reserved.
          </Style.FooterBottomText>
        </Style.FooterBottom>
      </Container>
    </Style.FooterWrapper>
  );
};

export default Footer;
