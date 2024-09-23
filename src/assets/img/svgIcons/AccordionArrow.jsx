import * as React from "react";
const AccordionArow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={10}
    viewBox="0 0 18 10"
    fill="none"
    {...props}
  >
    <path
      d="M17 1L9 9L1 1"
      stroke="#161C24"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default AccordionArow;
