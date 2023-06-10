import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const CategoryWrapper = styled.div`
  ${Flex.alignCenter}
  flex-direction: column;
  ${adaptiveValue("margin-bottom", 100, 40)}
`;

const CategoryTitle = styled.h2`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 44, 22)}
  ${adaptiveValue("line-height", 62, 34)}
  color: ${Colors.black};
`;

const CategoryItemsWrapper = styled.div`
  ${Flex.justFlex}
  flex-direction: column;
  ${adaptiveValue("gap", 40, 45)}
  ${adaptiveValue("margin-top", 64, 20)}
`;

const CategoryTopItems = styled.div`
  ${adaptiveValue("max-width", 1240, 320)}
  ${Flex.justFlex}
  ${adaptiveValue("gap", 40, 20)}
  position: relative;

  &::after {
    content: "Для шкафчков";
    position: absolute;
    top: 103%;
    left: 55%;
    width: 107px;
    font-family: ${Fonts.SFPRegular};
    ${adaptiveValue("font-size", 22, 11)}
    ${adaptiveValue("line-height", 34, 24)}
    color: ${Colors.black};
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  &::before {
    content: "Для отелей";
    position: absolute;
    top: 103%;
    font-family: ${Fonts.SFPRegular};
    ${adaptiveValue("font-size", 22, 11)}
    ${adaptiveValue("line-height", 34, 24)}
    color: ${Colors.black};
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

const CategoryBottomItems = styled.div`
  ${Flex.justFlex}
  ${adaptiveValue("gap", 40, 20)}
  position: relative;
  ${adaptiveValue("margin-bottom", 50, 10)}

  &::after {
    content: "Замки для дома";
    position: absolute;
    top: 103%;
    left: 55%;
    font-family: ${Fonts.SFPRegular};
    ${adaptiveValue("font-size", 22, 11)}
    ${adaptiveValue("line-height", 34, 24)}
    color: ${Colors.black};
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  &::before {
    content: "Для офисов";
    position: absolute;
    top: 103%;
    font-family: ${Fonts.SFPRegular};
    ${adaptiveValue("font-size", 22, 11)}
    ${adaptiveValue("line-height", 34, 24)}
    color: ${Colors.black};
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

const CategoryItem = styled.div`
  max-width: 600px;
  width: 100%;
  ${Flex.justFlex}
  gap: 30px;
  ${adaptiveValue("padding", 45, 25)}
  background-color: ${Colors.lightGray};
  align-items: end;

  @media (max-width: 1240px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const CategoryItemImg = styled.div`
  ${adaptiveValue("width", 280, 75)}
  ${adaptiveValue("height", 320, 110)}
  width: 280px;
  height: 320px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CategoryItemInfo = styled.div`
  ${Flex.justFlex}
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1240px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ItemInfoTitle = styled.h3`
  font-family: ${Fonts.SFPMedium};
  font-size: 22px;
  line-height: 34px;
  color: ${Colors.black};
`;

const ItemInfoBtn = styled(Link)`
  padding: 12px 78px;
  background: transparent;
  border: 1px solid ${Colors.gray};
  border-radius: 2px;
  font-family: ${Fonts.SFPMedium};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.black};
`;

const CategoryLink = styled.button`
  width: 220px;
  ${Fonts.SFPRegular}
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.white};
  text-align: center;
  ${adaptiveValue("padding-block", 12, 7)}
  border: 1px solid ${Colors.blue};
  background-color: ${Colors.blue};
  margin: 0 auto;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: transparent;
    color: ${Colors.blue};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export {
  CategoryWrapper,
  CategoryTitle,
  CategoryItemsWrapper,
  CategoryTopItems,
  CategoryItem,
  CategoryItemImg,
  CategoryBottomItems,
  CategoryItemInfo,
  ItemInfoTitle,
  ItemInfoBtn,
  CategoryLink,
};
