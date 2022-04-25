import React from 'react';
import { Container, CustomTextInput } from './styles';

interface InputProps{
    icon?: any;
    label: string;
    IsPassword?: boolean;
    value?: any;
    onChangeText?: any;
}

const Input: React.FC<InputProps> = (props) => {

  return (
    <Container>
        <CustomTextInput placeholder={props.label} 
        underlineColorAndroid='#fff' 
        autoCorrect={false}
        secureTextEntry={props?.IsPassword}
        value={props.value}
        onChangeText={props.onChangeText}
        >

        </CustomTextInput>
    </Container>
  );
}

export default Input;