import React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { Container, Input } from '../Input/styles';


interface InputMaskProps{
    icon?: any;
    label: string;
}

const InputMask: React.FC<InputMaskProps> = (props) => {

  return (
    <Container>
        <TextInputMask 
            style={Input.style}
            type={'cpf'}
            keyboardType={'numeric'}
            />
    </Container>
  );
}

export default Input;