import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const PNF = styled.div`
  width: 100%;
  height: 100vh;
  ${Flex.center}
`;

const Wrapper = styled.div`
  ${Flex.center};
  flex-direction: column;
  ${adaptiveValue("gap", 33, 20)}
`;

const ImgWrapper = styled.div`
  ${adaptiveValue("width", 412, 320)}
  ${adaptiveValue("height", 171, 133)}
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const LinkBtn = styled(Link)`
  ${adaptiveValue("width", 230, 150)}
  ${adaptiveValue("padding-block", 12, 6)}
  font-family: ${Fonts.SFPRegular};
  font-size: 16px;
  ${adaptiveValue("font-size", 16, 12)}
  line-height: 26px;
  color: ${Colors.white};
  border: 1px solid ${Colors.blue};
  background-color: ${Colors.blue};
  margin: 0 auto;
  cursor: pointer;
  transition: 0.4s;
  text-align: center;

  &:hover {
    background: transparent;
    color: ${Colors.blue};
  }
`;

export { PNF, Wrapper, ImgWrapper, LinkBtn };
