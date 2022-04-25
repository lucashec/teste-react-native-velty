import React, { useState} from 'react';
import { Text, Modal, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../components/Input';

import { 
    Container, 
    LabelWrapper,
    BackButton,
    Label,
    InputsWrapper,
    ForgotPasswordWrapper,
    ForgotPasswordLabel,
    RegisterRedirect,
    RegisterRedirectLabel
} from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <>
    <>
    <BackButton onPress={() => {
      navigation.goBack();
    }}>
          <AntDesign name="left" size={20}/> 
      </BackButton>
      <LabelWrapper>
          <Text style={Label.text}>
              Entrar
          </Text>
      </LabelWrapper>
    </>
    <Container>
        <InputsWrapper>
          <Input label='Email' 
          value={email}
          onChangeText={(text:string) => setEmail(text)}
          />
          <Input label='Senha'
          IsPassword={true}
          value={password}
          onChangeText={(text:string) => setPassword(text)}
          />
        </InputsWrapper>
        <Button label='Entrar'
        onPress={() => {
            navigation.navigate('Home');
        }}
        />
        <ForgotPasswordWrapper>
            <Text style={ForgotPasswordLabel.text}>
                Esqueceu a senha?
            </Text>
        </ForgotPasswordWrapper>
        <RegisterRedirect>
            <Text style={RegisterRedirectLabel.text}>
                Não possui uma conta?
            </Text>
            <Text style={RegisterRedirectLabel.link}>
                Cadastre-se
            </Text>
        </RegisterRedirect>
    </Container>
    </>
    
  );
}

export default SignIn;