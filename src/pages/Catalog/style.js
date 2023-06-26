import styled from "styled-components";
import { Flex } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const CatalogWrapper = styled.div`
  width: 100%;
  ${Flex.alignCenter}
  flex-direction: column;
`;

const CatalogCardsWrapper = styled.div`
  width: 100%;
  ${adaptiveValue("margin-top", 64, 20)}
  ${adaptiveValue("margin-bottom", 80, 50)}
  display: flex;
  justify-content: space-between;
  ${Flex.center}
  column-gap: 30px;
  ${adaptiveValue("row-gap", 40, 16)}
  flex-wrap: wrap;
`;

export { CatalogWrapper, CatalogCardsWrapper };
