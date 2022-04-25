import React, { useState} from 'react';
import { Text, Modal, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import Input from '../../components/Input';

import { 
    Container, 
    LabelWrapper,
    BackButton,
    Label,
    InputsWrapper,
    CheckWrapper,
    AgreementText,
    BottomModal,
} from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

interface SignupConfirmProps {
    route: any;
}

const SignupConfirm: React.FC<SignupConfirmProps> = (props) => {
  const {name, email, password} = props.route.params
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
          />
          <Input 
          label='Email' 
          value={email}
          />
          <Input 
          label='Senha'
          value={password} 
          IsPassword={true}/>
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
            navigation.navigate('SignIn');
          }}
          />
        </BottomModal> 
      }

    </Container>
    </>
    
  );
}

export default SignupConfirm;