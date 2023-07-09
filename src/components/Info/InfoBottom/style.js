import styled from "styled-components";
import { Flex } from "../../../utils";
import { adaptiveValue } from "../../../utils/variable";

const InfoBottomWrapper = styled.div`
  width: 100%;
  ${Flex.center};
  ${adaptiveValue("gap", 30, 14)}

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export { InfoBottomWrapper };
