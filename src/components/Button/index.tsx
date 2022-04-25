import React from 'react';
import { CustomButton, ButtonLabel } from './styles';

interface ButtonProps {
    label: string
    onPress?: any;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
      <CustomButton onPress={props?.onPress}>
        <ButtonLabel>
            {props.label}
        </ButtonLabel>
      </CustomButton>
  );
}

export default Button;