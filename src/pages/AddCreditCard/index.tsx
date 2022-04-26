import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button';
import { 
    BottomModal,
    ButtonWrapper, 
    Container, 
    InputsWrapper, 
    LargeInput, 
    SmallInput, 
    SmallInputsWrapper, 
    TitleLabel, 
    TitleWrapper 
} from './styles';

const AddCreditCard: React.FC = () => {
  const navigation = useNavigation(); 
   
  return (
    <Container>
        <TitleWrapper>
        <ButtonWrapper
            onPress={() => {
             navigation.goBack();
            }}
        >
          <AntDesign name="left" size={20}/> 
        </ButtonWrapper>
        <Text style={TitleLabel.text}>
          Adicionar Cartão
        </Text>
      </TitleWrapper>
            
      <InputsWrapper>
        <LargeInput placeholder='Número do cartão'/>
        <SmallInputsWrapper>
            <SmallInput placeholder='Validade'/>
            <SmallInput placeholder='CVV'/>
        </SmallInputsWrapper>
        <LargeInput placeholder='Número do cartão'/>
        <LargeInput placeholder='Número do cartão'/>
      </InputsWrapper>
      <BottomModal>
            <Button label='Adicionar Cartão'
                    onPress={() => {
                        navigation.navigate('AddAddress');
                    }}
                />
     </BottomModal>
    </Container>
  );
}

export default AddCreditCard;