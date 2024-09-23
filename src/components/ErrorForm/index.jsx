import { ErrorMessage } from "formik";
import React from "react";

const ErrorForm = ({ name }) => {
  return (
    <ErrorMessage
      render={(el) => {
        return <div className="error_message">{el}</div>;
      }}
      name={name}
    />
  );
};

export default ErrorForm;
