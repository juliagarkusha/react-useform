//External deps
import React from "react";
import Button from "@mui/material/Button";

//Internal deps
import FormField from "../../FormField";
import { loginFields } from "./fields";
import useForm from "../../../hooks/useForm";

//Local deps
import "./Login.scss";

const Login = () => {
  const {
    fields,
    isFormError,
    validateForm,
  } = useForm(loginFields);
  
  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    const validData = validateForm();

    console.log('debug validData: ', validData);
  }

  return (
    <form onSubmit={onFormSubmitHandler} className="Form">
      <h1 className="Form-title">Login</h1>
      {fields.map((field) => {
        return (
          <FormField key={field.name} {...field.bind} />
        )
      })}
      <Button
        variant="contained"
        type="submit"
        disabled={isFormError}
      >
        Save
      </Button>
    </form>
  )
}

export default Login;
