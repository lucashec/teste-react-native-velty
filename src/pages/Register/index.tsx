import React, { useState} from 'react';
import { Text, Modal, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

import { 
    Container, 
    LabelWrapper,
    BackButton,
    Label,
    InputsWrapper,
    CheckWrapper,
    AgreementText,
    BottomModal,
    ModalWrapper
} from './styles';


const Register: React.FC = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [name, setName] = useState('');
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
              Fazer Cadastro
          </Text>
      </LabelWrapper>
    </>
    <Container>
        <InputsWrapper>
          <Input 
          label='Nome Completo'
          value={name}
          onChangeText={(text:string) => setName(text)}
          />
          <Input label='Email' 
          value={email}
          onChangeText={(text:string) => setEmail(text)}
          />
          <Input label='CPF'/>
          <Input label='Telefone'/>
          <Input label='Senha'
          IsPassword={true}
          value={password}
          onChangeText={(text:string) => setPassword(text)}
          />
          <CheckWrapper>
            <CheckBox 
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            tintColors={{true: '#1232e6'}}
            />
            <AgreementText>
              Aceito os termos e condições
            </AgreementText>
        </CheckWrapper>
        </InputsWrapper>
      
      {
        toggleCheckBox && 
        <BottomModal>
          <Button label='Cadastrar'
            onPress={() => {
              navigation.navigate('SignupConfirm', 
              {
                name, 
                email,
                password,
              });
            }}
          />
        </BottomModal> 
      }

    </Container>
    </>
    
  );
}

export default Register;