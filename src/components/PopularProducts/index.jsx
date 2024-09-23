import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Container } from "../Container/style";
import axios from "axios";
import * as Style from "./style";
import PopularNavArrow from "../../assets/img/svgIcons/popularSwiperArrow";
import ProductCard from "../ProductCard";
import MainContext from "../../context/CartContext";

const PopularProducts = () => {
  const [data, setData] = useState([]);
  const { cartItems } = useContext(MainContext);
  const { likeItems } = useContext(MainContext);

  async function getData() {
    const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}`);

    if ((res.status = 200)) {
      setData(res.data);
    }
  }

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

  useEffect(() => {
    getData();
  }, []);

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
          speed={600}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
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
          {data?.map((el) => (
            <SwiperSlide key={el.id}>
              <ProductCard
                data={el}
                select={cartItems.find((item) => item.id == el.id)}
                selectLike={likeItems.find((item) => item.id == el.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Style.PopularProductsWrapper>
  );
};

export default PopularProducts;
