import {
  TextFieldElement,
  TextFieldElementProps,
  useWatch,
} from "react-hook-form-mui";
import Box from "@mui/material/Box";
import { ChangeEvent, forwardRef } from "react";
import styled from "styled-components";

interface CustomTextFieldProps extends TextFieldElementProps {
  counter?: boolean;
  maxLength?: number;
}

const CustomHelperText = styled.span`
  display: flex;
  justify-content: space-between;
  color: inherit;
`;

const CustomTextField = forwardRef<HTMLInputElement, CustomTextFieldProps>(
  (props, ref) => {
    const {
      counter = false,
      maxLength = 0,
      helperText,
      onBlur,
      onChange,
      ...other
    } = props;
    let property = useWatch({ name: other.name, defaultValue: "" });

    const hasError = property.length > maxLength;

    return (
      <TextFieldElement
        InputLabelProps={{ error: hasError || other?.InputLabelProps?.error }}
        InputProps={{ error: hasError || other?.InputProps?.error }}
        rules={{
          maxLength: { message: `Max length ${maxLength}`, value: maxLength },
        }}
        color="primary"
        FormHelperTextProps={{
          error: hasError || other?.FormHelperTextProps?.error,
        }}
        {...other}
        ref={ref}
        helperText={
          <CustomHelperText>
            <span>{helperText}</span>
            {counter && maxLength && (
              <span>{`${property.length}/${maxLength}`}</span>
            )}
          </CustomHelperText>
        }
      />
    );
  }
);

export default CustomTextField;
