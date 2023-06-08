import React from "react";
import * as Style from "./style";

const Statistics = () => {
  return (
    <Style.StatisticsWrapper>
      <Style.StatisticsItems>
        <Style.StatisticsItemTitle>5,567</Style.StatisticsItemTitle>
        <Style.StatisticsItemText>Счастливых клиентов</Style.StatisticsItemText>
      </Style.StatisticsItems>
      <Style.StatisticsItems>
        <Style.StatisticsItemTitle>1245</Style.StatisticsItemTitle>
        <Style.StatisticsItemText>Продуктов на выбор</Style.StatisticsItemText>
      </Style.StatisticsItems>
      <Style.StatisticsItems>
        <Style.StatisticsItemTitle>372</Style.StatisticsItemTitle>
        <Style.StatisticsItemText>Продаж в день</Style.StatisticsItemText>
      </Style.StatisticsItems>
      <Style.StatisticsItems>
        <Style.StatisticsItemTitle>20</Style.StatisticsItemTitle>
        <Style.StatisticsItemText>Лет на рынке</Style.StatisticsItemText>
      </Style.StatisticsItems>
    </Style.StatisticsWrapper>
  );
};

export default Statistics;
