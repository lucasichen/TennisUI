import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

export const FormInput = ({ name, rules, ...otherProps }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField
          inputProps={{ 'aria-label': name }}
          InputLabelProps={{ required: otherProps.required, disabled: otherProps.disabled }}
          {...field}
          {...otherProps}
          inputRef={ref}
          helperText={error ? error.message : null}
          error={!!error}
        />
      )}
    />
  );
};