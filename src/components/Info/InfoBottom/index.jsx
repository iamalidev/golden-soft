import React from "react";
import CheckboxIcon from "../../../assets/img/svgIcons/checkbox";
import img from "../../../assets/img/info-bottom.png";
import {
  CheckboxContent,
  CheckboxesWrapper,
  CheckboxItems,
  CheckboxText,
  ImgWrapper,
  InfoText,
  InfoTitle,
  InfoTopWrapper,
  Texts,
} from "../InfoTop/style";

const InfoBottom = () => {
  return (
    <InfoTopWrapper>
      <ImgWrapper>
        <img src={img} alt="" />
      </ImgWrapper>
      <Texts>
        <InfoTitle>Eget quis quam metus, scelerisque.</InfoTitle>
        <InfoText>
          Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor
          molestie massa porttitor. Quisque at turpis ut proin eu et magna etiam
          rhoncus.
        </InfoText>
        <InfoText>
          Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra
          interdum in leo. Nullam ullamcorper id enim fermentum integer praesent
          bibendum. In ullamcorper purus scelerisque malesuada et egestas. Ac
          dictumst mauris sed facilisis.
        </InfoText>
      </Texts>
    </InfoTopWrapper>
  );
};

export default InfoBottom;
