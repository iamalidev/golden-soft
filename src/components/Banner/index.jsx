import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Container } from "../Container/style";
import * as Style from "./style";
import SwiperArrow from "../../assets/img/svgIcons/bannerArrow";
import { BannerData } from "./data";

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
          autoplay={true}
          cssMode={true}
          navigation={{
            prevEl,
            nextEl,
          }}
          pagination={{
            el: ".pagination-bullets",
            type: "bullets",
            clickable: "true",
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {BannerData.map((el) => {
            return (
              <SwiperSlide>
                <Style.SwiperItems key={el.id}>
                  <Style.BannerImgWrapper>
                    <img src={el.img} alt="" />
                  </Style.BannerImgWrapper>
                  <Style.BannerInfo>
                    <Style.InfoTitle>{el.title}</Style.InfoTitle>
                    <Style.InfoTexts>
                      <Style.InfoFirstText>{el.firstText}</Style.InfoFirstText>
                      <Style.InfoSecondText>
                        {el.secondText}
                      </Style.InfoSecondText>
                    </Style.InfoTexts>
                    <Style.PriceBox>
                      <Style.PriceTextsWrapper>
                        <Style.PriceText>{el.badge}</Style.PriceText>
                        <Style.Prices>
                          <Style.NewPrice>{el.newPrice}</Style.NewPrice>
                          <Style.OldPrice>{el.oldPrice}</Style.OldPrice>
                        </Style.Prices>
                      </Style.PriceTextsWrapper>
                      <Style.PriceBtn>Добавить в корзину</Style.PriceBtn>
                    </Style.PriceBox>
                  </Style.BannerInfo>
                </Style.SwiperItems>
              </SwiperSlide>
            );
          })}

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
