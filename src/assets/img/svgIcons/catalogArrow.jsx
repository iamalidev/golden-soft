import * as React from "react";
import styled from "styled-components";

const ArrowSvg = styled.svg`
  width: 14px;
  height: 14px;
  fill: none;
  transform: ${({ state }) => (state ? "rotate(180deg)" : "rotate(0deg)")};
  transition: 0.3s;
`;

const CatalogArrow = (props) => {
  return (
    <ArrowSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 7"
      state={props.active}
    >
      <path
        d="M1.2334 1.25L5.90006 5.91667L10.5667 1.25"
        stroke="#161C24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </ArrowSvg>
  );
};

export default CatalogArrow;
