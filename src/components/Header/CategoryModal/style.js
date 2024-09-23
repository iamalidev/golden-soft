import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../../utils";
import { adaptiveValue } from "../../../utils/variable";

const CategoryModalWrapper = styled.div`
  position: absolute;
  transform: translate(77.5%, 24%);
  ${adaptiveValue("max-width", 836, 320)};
  width: 790px;
  height: 460px;
  background-color: ${Colors.white};
  ${Flex.spaceBetween};
  outline: none;
  border-radius: 4px;
  box-shadow: 0px 4px 18px -2px rgba(0, 0, 0, 0.1);
  transition: 0.4s;
  padding: 29px;
`;

const TabsWrapper = styled.div`
  width: 267px;
  ${Flex.justFlex};
  flex-direction: column;
  gap: 9px;
`;

const Tab = styled.button`
  padding: 5px;
  border: none;
  background-color: ${Colors.white};
  font-family: ${Fonts.SFPRegular};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.gray};
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #dbecff;
  }

  &:focus {
    background-color: #dbecff;
    border-right: 2px solid ${Colors.blue};
  }
`;

const LinkBtn = styled(Link)`
  width: 177px;
  padding: 7px 32px;
  font-family: ${Fonts.SFPMedium};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.white};
  border: 1px solid ${Colors.blue};
  background-color: ${Colors.blue};
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: transparent;
    color: ${Colors.blue};
  }
`;

const ImgWrapper = styled(Link)`
  max-width: 351px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--stroke, #eaeaea);

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export { CategoryModalWrapper, TabsWrapper, Tab, LinkBtn, ImgWrapper };
