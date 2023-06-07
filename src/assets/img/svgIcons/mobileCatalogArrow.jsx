import * as React from "react";
const MobileCatalogArrow = ({ focus }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    viewBox="0 0 8 14"
    fill="none"
  >
    <path
      d="M1 1.00003L7 7.00003L1 13"
      stroke="#161C24"
      {...focus}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default MobileCatalogArrow;
