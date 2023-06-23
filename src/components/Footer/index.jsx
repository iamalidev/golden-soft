import React from "react";
import FacebookIcon from "../../assets/img/svgIcons/facebookIcon";
import FooterLogo from "../../assets/img/svgIcons/footerLogo";
import TwitterIcon from "../../assets/img/svgIcons/twitterIcon";
import VkIcon from "../../assets/img/svgIcons/vkIcon";
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
              <VkIcon fa fa-rocket />
              <TwitterIcon />
              <FacebookIcon />
            </Style.FooterSocialMedia>
          </Style.FooterSocial>
          <Style.FooterLinksWrapper>
            <Style.FooterLinks>
              <Style.FooterLinksTitle>Навигация</Style.FooterLinksTitle>
              <Style.FooterLinksContent>
                <Style.FooterLinksLink href="#">Главная</Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">Каталог</Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">
                  Оптовая продажа
                </Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">О нас</Style.FooterLinksLink>
              </Style.FooterLinksContent>
            </Style.FooterLinks>
            <Style.FooterLinks>
              <Style.FooterLinksTitle>Наши контакты</Style.FooterLinksTitle>
              <Style.FooterLinksContent>
                <Style.FooterLinksLink href="#">Телефоны</Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">
                  +7 (988) 565 00 38
                </Style.FooterLinksLink>
                <Style.FooterLinksLink href="#">
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
        </Style.FooterTop>
        <Style.FooterBottom>
          <Style.FooterBottomText>
            © 2021 Golden Soft All rights reserved.
          </Style.FooterBottomText>
        </Style.FooterBottom>
      </Container>
    </Style.FooterWrapper>
  );
};

export default Footer;
