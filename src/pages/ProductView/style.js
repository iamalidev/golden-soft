import styled from "styled-components";
import { Flex } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const ProductViewWrapper = styled.div`
  width: 100%;
  ${Flex.flexBetween}
  ${adaptiveValue("margin-bottom", 80, 35)}
`;

const ImgWrapper = styled.div`
  ${adaptiveValue("width", 605, 300)};
  ${adaptiveValue("height", 513, 300)};
  overflow: hidden;
  background-color: #f7f7f7;
  ${Flex.center}

  & > img {
    width: 85%;
    height: 85%;
    object-fit: contain;
  }
`;

export { ProductViewWrapper, ImgWrapper };
