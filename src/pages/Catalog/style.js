import styled from "styled-components";
import { Flex } from "../../utils";

const CatalogWrapper = styled.div`
  width: 100%;
  ${Flex.center}
  flex-direction: column;
`;

const CatalogCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${Flex.alignCenter}
  row-gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 80px;
`;

export { CatalogWrapper, CatalogCardsWrapper };
