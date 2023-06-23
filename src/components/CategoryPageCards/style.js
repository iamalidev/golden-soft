import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const CategoryPageCard = styled.li`
  width: 100%;
  ${Flex.center};
  flex-direction: column;
  ${adaptiveValue("gap", 16, 10)}
`;

const CardImg = styled.div`
  width: 288px;
  height: 300px;
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
  color: ${Colors.black};
  text-align: center;
`;

export { CategoryPageCard, CardImg, CardText };
