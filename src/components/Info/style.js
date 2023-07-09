import styled from "styled-components";
import { Flex } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const InfoWrapper = styled.div`
  width: 100%;
  ${Flex.justFlex}
  flex-direction: column;
  ${adaptiveValue("gap", 82, 35)}
`;

export { InfoWrapper };
