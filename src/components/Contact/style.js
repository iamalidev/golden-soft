import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const ContactWrapper = styled.div`
  width: 100%;
  ${Flex.center}
  ${adaptiveValue("padding-top", 64, 32)}
  ${adaptiveValue("padding-bottom", 56, 32)}
  background-color: ${Colors.lightBlue};
`;

const ContactItemsWrapper = styled.div`
  width: 748px;
  ${Flex.alignCenter};
  flex-direction: column;
  ${adaptiveValue("row-gap", 24, 14)}
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ContactTitle = styled.h2`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 44, 20)};
  ${adaptiveValue("line-height", 62, 30)};
  color: ${Colors.black};
  text-align: center;
`;

const ContactText = styled.p`
  ${adaptiveValue("max-width", 518, 343)};
  width: 100%;
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 16, 12)};
  ${adaptiveValue("line-height", 26, 22)};
  color: ${Colors.gray};
  ${adaptiveValue("margin-top", 24, 14)};
  ${adaptiveValue("margin-bottom", 24, 14)};
  text-align: center;
  margin: 0 auto;
`;

const ContactFormsWrapper = styled.div`
  width: 100%;
  ${Flex.spaceBetween};

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ContactFormInput = styled.input`
  width: 240px;
  padding: 12px 16px;
  border: none;
  outline: none;
  background: rgba(22, 28, 36, 0.04);
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 16, 12)};
  ${adaptiveValue("line-height", 26, 22)};
  color: #666f7a;

  &:focus {
    outline: 1px solid ${Colors.blue};
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ContactFormSubmit = styled.button`
  padding: 12px 70px;
  background-color: ${Colors.blue};
  border: 1px solid ${Colors.blue};
  font-family: ${Fonts.SFPMedium};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.white};
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: transparent;
    color: ${Colors.blue};
  }

  &:active {
    background-color: ${Colors.blue};
    color: ${Colors.white};
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export {
  ContactWrapper,
  ContactItemsWrapper,
  ContactTitle,
  ContactText,
  ContactFormsWrapper,
  ContactFormInput,
  ContactFormSubmit,
};
