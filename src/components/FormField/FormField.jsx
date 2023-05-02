//External deps
import React from "react";
import MUITextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

//Local deps
import "./FormField.scss";

const FormField = (props) => {
  const {
    id,
    type,
    name,
    label,
    placeholder,
    value,
    onChange,
    error,
  } = props;

  return (
    <FormControl sx={{ width: '100%', mb: 1 }}>
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
      <MUITextField
        error={!!error}
        autoFocus
        margin="dense"
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        fullWidth
        variant="outlined"
        value={value}
        onChange={onChange}
        classes={{
          root: "input"
        }}
        InputProps={{
          classes: {
            notchedOutline: "FormField-test",
            root: "FormField"
          }
        }}
      />
      {error && (
        <FormHelperText error>{error}</FormHelperText>
      )}
    </FormControl>
  )
}

export default FormField;
