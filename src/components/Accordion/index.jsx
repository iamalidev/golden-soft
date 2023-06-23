import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FooterAccordionArrow from "../../assets/img/svgIcons/footerAccordionArrow";
import { Link } from "react-router-dom";
import * as Style from "./style";

export default function FooterAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<FooterAccordionArrow />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#0d2436",
            borderBottom: "1px solid #203546",
            color: "white",
          }}
          width="500px"
        >
          <Style.AccordionTitle>Навигация</Style.AccordionTitle>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#0d2436",
            color: "gray",
          }}
        >
          <Typography>
            <Link to="/">
              <Style.AccordionText>Главная</Style.AccordionText>
            </Link>
            <br />
            <br />
            <Link to="/category">
              <Style.AccordionText>Каталог</Style.AccordionText>
            </Link>
            <br />
            <br />
            <Link to="/wholesale">
              <Style.AccordionText>Оптовая продажа</Style.AccordionText>
            </Link>
            <br />
            <br />
            <Link to="/about-us">
              <Style.AccordionText>О нас</Style.AccordionText>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FooterAccordionArrow />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#0d2436",
            borderBottom: "1px solid #203546",
            color: "white",
          }}
        >
          <Style.AccordionTitle>Наши контакты</Style.AccordionTitle>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#0d2436",
            color: "gray",
          }}
        >
          <Typography>
            <Style.AccordionText>
              Телефоны:&ensp;&ensp;+7 (988) 565 00 38 <br />
              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              +375 33 662 82 56 <br />
              <br />
              Email:&ensp;&ensp;vladpertcev@mail.ru <br />
              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; korobko416@gmail.com
            </Style.AccordionText>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FooterAccordionArrow />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#0d2436",
            borderBottom: "1px solid #203546",
            color: "white",
          }}
        >
          <Style.AccordionTitle>Другое</Style.AccordionTitle>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#0d2436",
            color: "gray",
          }}
        >
          <Style.AccordionText>
            Доставка и оплата
            <br />
            <br />
            Гарантии
            <br />
            <br />
            Возврат товара
          </Style.AccordionText>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FooterAccordionArrow />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#0d2436",
            borderBottom: "1px solid #203546",
            color: "white",
          }}
        >
          <Style.AccordionTitle>Наш адрес</Style.AccordionTitle>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#0d2436",
            color: "gray",
          }}
        >
          <Style.AccordionText>
            Россия, Ростов-на-Дону ул. Богачева, 16 <br />
            <br />
            Беларусь, Солигорск ул. Ленина, 10б
          </Style.AccordionText>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
