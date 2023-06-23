import React from "react";
import { Container } from "../Container/style";
import * as Style from "./style";

const Contact = () => {
  return (
    <Style.ContactWrapper>
      <Container>
        <Style.ContactItemsWrapper>
          <Style.ContactTitle>Мы Вам перезвоним</Style.ContactTitle>
          <Style.ContactText>
            Если у вас возникли какие-то вопросы или проблемы, заполните форму и
            мы Вам перезвоним.
          </Style.ContactText>
          <Style.ContactFormsWrapper>
            <Style.ContactFormInput type="text" placeholder="Ваше имя" />
            <Style.ContactFormInput type="email" placeholder="Ваш Email" />
            <Style.ContactFormSubmit type="submit">
              Отправить
            </Style.ContactFormSubmit>
          </Style.ContactFormsWrapper>
        </Style.ContactItemsWrapper>
      </Container>
    </Style.ContactWrapper>
  );
};

export default Contact;
