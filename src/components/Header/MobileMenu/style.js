import styled from "styled-components";

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 125px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 706px;
  background: red;
  transition: 0.4s;
  transform: ${({ open }) =>
    open == true ? "translateX(0)" : "translateX(-100%)"};
`;

export { MobileMenuWrapper };
