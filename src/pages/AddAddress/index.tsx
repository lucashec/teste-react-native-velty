import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button';
import { 
    BottomModal,
    ButtonWrapper, 
    Container, 
    FeedbackBottom, 
    InputsWrapper, 
    LargeInput, 
    MessageTitleWrapper, 
    SmallInput, 
    SmallInputsWrapper, 
    TitleLabel, 
    TitleWrapper, 
    ZipCodeSearch, 
    ZipCodeWrapper,
    FeedbackBottomLabels,
    FeedbackMessageContent
} from './styles';

const AddAddress: React.FC = () => {
  const navigation = useNavigation();
  const [visible, SetVisible] = useState(false);
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
        Adicionar Endereço
        </Text>
    </TitleWrapper>
            
    <InputsWrapper>
      <ZipCodeWrapper>
        <SmallInput placeholder='CEP'/>
        <Text style={ZipCodeSearch.text}>
            Buscar CEP
        </Text>
      </ZipCodeWrapper>

      <LargeInput placeholder='Rua'/>
      <SmallInputsWrapper>
          <SmallInput placeholder='Número'/>
          <SmallInput placeholder='Complemento'/>
      </SmallInputsWrapper>
      <LargeInput placeholder='Bairro'/>
      <SmallInputsWrapper>
          <SmallInput placeholder='Cidade'/>
          <SmallInput placeholder='Estado'/>
      </SmallInputsWrapper>
    </InputsWrapper>
    {
        !visible &&
        <BottomModal>
            <Button label='Adicionar Endereço'
                    onPress={() => {
                        SetVisible(true);
                    }}
                />
        </BottomModal>
    }
    {
        visible && 
        <FeedbackBottom>
        <MessageTitleWrapper>
            <Text style={FeedbackBottomLabels.title}>
                Título da Mensagem
            </Text>
            <AntDesign 
            name="close" 
            size={20} 
            style={{
            right: 25, 
            position: 'absolute'}}
            />
        </MessageTitleWrapper>
        <FeedbackMessageContent>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam sodales est enim, id luctus dui dignissim nec
            </Text>
        </FeedbackMessageContent>
        </FeedbackBottom> 
    }
   </Container>
  );
}

export default AddAddress;