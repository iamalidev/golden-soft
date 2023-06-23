import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from "../Container/style";
import * as Style from "./style";
import { SwiperNavBtn, SwiperNavigation } from "../Banner/style";
import SwiperArrow from "../../assets/img/svgIcons/bannerArrow";
import PopularNavArrow from "../../assets/img/svgIcons/popularSwiperArrow";
import firstImg from "../../assets/img/popular_product_img1.png";
import secondImg from "../../assets/img/popular_product_img2.png";
import thirdImg from "../../assets/img/popular_product_img3.png";
import fourthImg from "../../assets/img/popular_product_img4.png";
import { popularProductData } from "./data";
import InCashTrue from "../../assets/img/svgIcons/inCashTrue";
import InCashFalse from "../../assets/img/svgIcons/inCashFalse";
import Rate from "../Rate";

const PopularProducts = () => {
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
    <Style.PopularProductsWrapper>
      <Container>
        <Style.PopularProductsTop>
          <Style.PopularProductsTitle>
            Наши популярные продукты
          </Style.PopularProductsTitle>

          <Style.PopularSwiperNav>
            <Style.PopularNavArrow ref={prevElRef}>
              <PopularNavArrow style={{ transform: "rotate(-180deg)" }} />
            </Style.PopularNavArrow>
            <Style.PopularNavArrow ref={nextElRef}>
              <PopularNavArrow />
            </Style.PopularNavArrow>
          </Style.PopularSwiperNav>
        </Style.PopularProductsTop>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={{
            prevEl,
            nextEl,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
          breakpoints={{
            320: {
              width: 280,
              slidesPerView: 1,
            },
            576: {
              width: 606,
              slidesPerView: 2,
            },
            768: {
              width: 924,
              slidesPerView: 3,
            },
            992: {
              width: 1242,
              slidesPerView: 4,
            },
          }}
        >
          {popularProductData.map((el) => (
            <Style.ProductCard key={el.id}>
              <Style.ProductCardTop>
                <Style.InCashBox>
                  {el.inCash ? <InCashTrue /> : <InCashFalse />}
                </Style.InCashBox>
                <img src={el.img} alt="" />
              </Style.ProductCardTop>
              <Style.ProductCardInfo>
                <Style.ProductRateBox>
                  <Rate />
                  <Style.RateBoxText>(12) отзывов</Style.RateBoxText>
                </Style.ProductRateBox>
                <Style.ProductCardTitle>{el.title}</Style.ProductCardTitle>
                <Style.ProductPrice>
                  <Style.ProductNewPrice>{el.newPrice}</Style.ProductNewPrice>
                  <Style.ProductOldPrice>{el.oldPrice}</Style.ProductOldPrice>
                </Style.ProductPrice>
              </Style.ProductCardInfo>
            </Style.ProductCard>
          ))}
        </Swiper>
      </Container>
    </Style.PopularProductsWrapper>
  );
};

export default PopularProducts;
