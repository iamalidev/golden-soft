import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Container } from "../Container/style";
import * as Style from "./style";
import * as Yup from "yup";
import ErrorForm from "../ErrorForm";

const Contact = () => {
  const contactInitialValues = {
    name: "",
    email: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const contactFormValidation = Yup.object().shape({
    name: Yup.string().min(1, "Too short!").required(),
    email: Yup.string().email("Invalid email").required(),
  });

  return (
    <Style.ContactWrapper>
      <Container>
        <Style.ContactItemsWrapper>
          <Style.ContactTitle>Мы Вам перезвоним</Style.ContactTitle>
          <Style.ContactText>
            Если у вас возникли какие-то вопросы или проблемы, заполните форму и
            мы Вам перезвоним.
          </Style.ContactText>

          <Formik
            initialValues={contactInitialValues}
            onSubmit={onSubmit}
            validationSchema={contactFormValidation}
            validateOnChange
          >
            {(formik) => {
              console.log(formik);
              return (
                <Style.ContactFormsWrapper onSubmit={formik.handleSubmit}>
                  <Style.ContactFormInput
                    name="name"
                    onChange={formik.handleChange}
                    type="text"
                    className={`${formik.errors.name && "error"}`}
                    placeholder="Ваше имя"
                  />
                  <ErrorForm name="name" />
                  <Style.ContactFormInput
                    name="email"
                    onChange={formik.handleChange}
                    type="email"
                    className={`${formik.errors.email && "error"}`}
                    placeholder="Ваш Email"
                  />
                  <ErrorForm name="email" />
                  <Style.ContactFormSubmit type="submit">
                    Отправить
                  </Style.ContactFormSubmit>
                </Style.ContactFormsWrapper>
              );
            }}
          </Formik>
        </Style.ContactItemsWrapper>
      </Container>
    </Style.ContactWrapper>
  );
};

export default Contact;
