import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const CategoryPageCard = styled.li`
  max-width: 288px;
  width: 100%;
  max-height: 342px;
  height: 100%;
  ${Flex.center};
  flex-direction: column;
  ${adaptiveValue("gap", 16, 10)}
`;

const CardImg = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #eaeaea;
  background-color: ${Colors.lightGray};
  ${Flex.justFlex}
  gap: 30px;

  & > img {
    width: 100%;
    object-fit: contain;
  }
`;

const CardText = styled.span`
  font-family: ${Fonts.SFPMedium};
  ${adaptiveValue("font-size", 16, 11)}
  ${adaptiveValue("line-height", 26, 20)}
  color: ${Colors.black};
  text-align: center;
  min-height: 35px;
`;

export { CategoryPageCard, CardImg, CardText };
