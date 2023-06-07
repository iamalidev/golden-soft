import { createGlobalStyle } from "styled-components";
import { Colors, Flex } from ".";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'SF-Pro-Light';
        src: url(/font/SFProText-Light.woff2);
        font-weight: 300;
    }

    @font-face {
        font-family: 'SF-Pro-Regular';
        src: url(/font/SFProText-Regular.woff2);
        font-weight: 400;
    }

    @font-face {
        font-family: 'SF-Pro-Medium';
        src: url(/font/SFProText-Medium.woff2);
        font-weight: 500;
    }

    @font-face {
        font-family: 'SF-Pro-Semibold';
        src: url(/font/SFProText-Semibold.woff2);
        font-weight: 600;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
    
    /* body {
        margin-bottom: 1000px;
        overflow-y: ${({ open }) => (open == true ? "hidden" : "auto")};
    } */

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
       ${Flex.center}
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    button {
        border: none;
    }


    .swiper-pagination-bullets {
        width: auto !important;
    }

    .swiper-pagination-bullet {
        width: 8px !important;
        height: 8px !important;
        background-color: #ADD7FF !important;
        position: relative;
        transition: all .3s;
    }

    .swiper-pagination-bullet::after{
        content: "";
        position: absolute;
        top: -8px;
        left: -8.4px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid #ADD7FF;
        opacity: 0;
    }

    .swiper-pagination-bullet:nth-child(even){
        margin-inline: 24px !important;
    }

    .swiper-pagination-bullet-active {
        background-color: ${Colors.primaryColor} !important;
    }

    .swiper-pagination-bullet-active.swiper-pagination-bullet::after {
        opacity: 1;
    }    

    .swiper-button-disabled svg path {
        stroke: #A4A4A4 !important ;
    }
`;
