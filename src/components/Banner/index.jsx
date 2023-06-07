import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from "../Container/style";
import * as Style from "./style";
import firstImg from "../../assets/img/banner1.png";
import secondImg from "../../assets/img/banner2.png";
import thirdImg from "../../assets/img/banner3.png";
import SwiperArrow from "../../assets/img/svgIcons/bannerArrow";

const HeaderBanner = () => {
  const useSwiperRef = () => {
    const [wrapper, setWrapper] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
      if (ref.current) {
        setWrapper(ref.current);
      }
    }, []);

    return [wrapper, ref];
  };

  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return (
    <Style.BannerWrapper>
      <Container>
        <Swiper
          cssMode={true}
          navigation={{
            prevEl,
            nextEl,
          }}
          pagination={{
            el: ".pagination-bullets",
            type: "bullets",
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Style.SwiperItems>
              <Style.BannerImgWrapper>
                <img src={firstImg} alt="" />
              </Style.BannerImgWrapper>
              <Style.BannerInfo>
                <Style.InfoTitle>
                  Golden Soft GS-200Z-5 для офиса
                </Style.InfoTitle>
                <Style.InfoText>
                  Замок дверной электронный Golden Soft GS-200Z-5 имеет
                  роскошный глянцевый блеск, четкие линии, красивые формы.
                  <br />
                  <br />
                  Подходит для установки на деревянную межкомнатную дверь.
                </Style.InfoText>
                <Style.PriceBox>
                  <Style.PriceText>Цена</Style.PriceText>
                  <Style.Prices>
                    <Style.NewPrice>33 000₽</Style.NewPrice>
                    <Style.OldPrice>37 000₽</Style.OldPrice>
                  </Style.Prices>
                  <Style.PriceBtn>Добавить в корзину</Style.PriceBtn>
                </Style.PriceBox>
              </Style.BannerInfo>
            </Style.SwiperItems>
          </SwiperSlide>

          <SwiperSlide>
            <Style.SwiperItems>
              <Style.BannerImgWrapper>
                <img src={secondImg} alt="" />
              </Style.BannerImgWrapper>
              <Style.BannerInfo>
                <Style.InfoTitle>
                  Вариативный замок Golden Soft для отеля
                </Style.InfoTitle>
                <Style.InfoText>
                  Замок дверной электронный Golden Soft замок имеет роскошный
                  глянцевый блеск, четкие линии, красивые формы.
                  <br />
                  <br />
                  Подходит для установки на деревянную межкомнатную дверь.
                </Style.InfoText>
                <Style.PriceBox>
                  <Style.PriceText>Цена</Style.PriceText>
                  <Style.Prices>
                    <Style.NewPrice>7 000₽</Style.NewPrice>
                    <Style.OldPrice>8 000₽</Style.OldPrice>
                  </Style.Prices>
                  <Style.PriceBtn>Добавить в корзину</Style.PriceBtn>
                </Style.PriceBox>
              </Style.BannerInfo>
            </Style.SwiperItems>
          </SwiperSlide>

          <SwiperSlide>
            <Style.SwiperItems>
              <Style.BannerImgWrapper>
                <img src={thirdImg} alt="" />
              </Style.BannerImgWrapper>
              <Style.BannerInfo>
                <Style.InfoTitle>Накладные замки Golden Soft</Style.InfoTitle>
                <Style.InfoText>
                  Замок дверной электронный Golden Soft накладные имеет
                  роскошный глянцевый блеск, четкие линии, красивые формы.
                  <br />
                  <br />
                  Подходит для установки на деревянную межкомнатную дверь.
                </Style.InfoText>
                <Style.PriceBox>
                  <Style.PriceText>Цена</Style.PriceText>
                  <Style.Prices>
                    <Style.NewPrice>21 000₽</Style.NewPrice>
                    <Style.OldPrice>26 000₽</Style.OldPrice>
                  </Style.Prices>
                </Style.PriceBox>
                <Style.PriceBtn>Добавить в корзину</Style.PriceBtn>
              </Style.BannerInfo>
            </Style.SwiperItems>
          </SwiperSlide>

          <Style.SwiperNavigation>
            <Style.SwiperNavBtn ref={prevElRef}>
              <SwiperArrow />
            </Style.SwiperNavBtn>
            <div className="pagination-bullets"></div>
            <Style.SwiperNavBtn ref={nextElRef}>
              <SwiperArrow style={{ transform: "rotate(-180deg)" }} />
            </Style.SwiperNavBtn>
          </Style.SwiperNavigation>
        </Swiper>
      </Container>
    </Style.BannerWrapper>
  );
};

export default HeaderBanner;
