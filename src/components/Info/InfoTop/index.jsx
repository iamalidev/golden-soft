import React from "react";
import CheckboxIcon from "../../../assets/img/svgIcons/checkbox";
import img from "../../../assets/img/info-top.png";
import * as Style from "./style";

const InfoTop = () => {
  return (
    <Style.InfoTopWrapper>
      <Style.Texts>
        <Style.InfoTitle>Eget quis quam metus, scelerisque.</Style.InfoTitle>
        <Style.InfoText>
          Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor
          molestie massa porttitor. Quisque at turpis ut proin eu et magna etiam
          rhoncus.
        </Style.InfoText>
        <Style.CheckboxesWrapper>
          <Style.CheckboxContent>
            <Style.CheckboxItems>
              <CheckboxIcon />
              <Style.CheckboxText>Межкомнатую дверь</Style.CheckboxText>
            </Style.CheckboxItems>
            <Style.CheckboxItems>
              <CheckboxIcon />
              <Style.CheckboxText>Деревянную дверь</Style.CheckboxText>
            </Style.CheckboxItems>
          </Style.CheckboxContent>
          <Style.CheckboxContent>
            <Style.CheckboxItems>
              <CheckboxIcon />
              <Style.CheckboxText>Межкомнатую дверь</Style.CheckboxText>
            </Style.CheckboxItems>
            <Style.CheckboxItems>
              <CheckboxIcon />
              <Style.CheckboxText>Деревянную дверь</Style.CheckboxText>
            </Style.CheckboxItems>
          </Style.CheckboxContent>
        </Style.CheckboxesWrapper>
        <Style.InfoText>
          Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra
          interdum in leo. Nullam ullamcorper id enim fermentum integer praesent
          bibendum. In ullamcorper purus scelerisque malesuada et egestas. Ac
          dictumst mauris sed facilisis.
        </Style.InfoText>
      </Style.Texts>
      <Style.ImgWrapper>
        <img src={img} alt="" />
      </Style.ImgWrapper>
    </Style.InfoTopWrapper>
  );
};

export default InfoTop;
