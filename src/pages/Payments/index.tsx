import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import card from '../../assets/creditcard.png';

import { 
  BillingDetails,
  BottomWrapper,
  ButtonWrapper,
    CardChooseLabels,
    CardChooseWrapper,
    CardNameAndInfo,
    ConfirmPaymentButton,
    ConfirmPaymentButtonLabel,
    Container,
    CreditCardInfo,
    CreditCardItem,
    CreditCardsWrapper,
    DayWrapper,
    NameAndInfo,
    PriceContent,
    PriceContentLabels,
    ServiceDetailLabels,
    ServiceDetailWrapper,
    TitleLabel,
    TitleWrapper,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';


const Payments: React.FC = () => {
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
          Pagamento
        </Text>
      </TitleWrapper>

      <ServiceDetailWrapper>
        <Text style={ServiceDetailLabels.title}>
          Nome de Serviço grande e Longo
        </Text>
        <DayWrapper>
          <Text style={ServiceDetailLabels.appointmentDay}>
            Terça Feira 10/06/22 às 20h
          </Text>
        </DayWrapper>
        <Text style={ServiceDetailLabels.onAdress}>
            No endereço 
        </Text>
        <Text style={ServiceDetailLabels.adress}>
            Av Miguel Castro, 600 
        </Text>
        <Text style={ServiceDetailLabels.price}>
            R$ 29,90 
        </Text>
      </ServiceDetailWrapper>
      <CreditCardsWrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          <CardChooseWrapper>
            <Text style={CardChooseLabels.title}>
              Escolha o cartão 
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddCreditCard');
              }}
            >
            <Text style={CardChooseLabels.add}>
              +  Adicionar
            </Text>
            </TouchableOpacity>
          </CardChooseWrapper>

          <CreditCardItem>
            <CreditCardInfo>
              <Image source={card}/>

              <CardNameAndInfo>
                <Text style={NameAndInfo.labels}>
                  João Silva
                </Text>
                <Text style={NameAndInfo.labels}>
                  **** 8912
                </Text>
              </CardNameAndInfo>

              <AntDesign name='downcircle' size={20} color='#D28369'/>
            </CreditCardInfo>

            <BillingDetails>
              <Text>
                Parcelamento em 1x sem juros
              </Text>
              <AntDesign name='down' size={15} color='#434343F2'/>
            </BillingDetails>
          </CreditCardItem>

          <CreditCardItem>
            <CreditCardInfo>
              <Image source={card}/>

              <CardNameAndInfo>
                <Text style={NameAndInfo.labels}>
                  João Silva
                </Text>
                <Text style={NameAndInfo.labels}>
                  **** 8912
                </Text>
              </CardNameAndInfo>

              <AntDesign name='downcircle' size={20} color='#D28369'/>
            </CreditCardInfo>

            <BillingDetails>
              <Text>
                Parcelamento em 1x sem juros
              </Text>
              <AntDesign name='down' size={15} color='#434343F2'/>
            </BillingDetails>
          </CreditCardItem>
        </ScrollView>
      </CreditCardsWrapper>

      <BottomWrapper>
        <PriceContent>
          <Text style={PriceContentLabels.value}>
            R$ 29,90
          </Text>
          <Text style={PriceContentLabels.total}>
            Total a pagar
          </Text>
        </PriceContent>
        <ConfirmPaymentButton>
          <Text style={ConfirmPaymentButtonLabel.text}>
            Pagar
          </Text>
        </ConfirmPaymentButton>
      </BottomWrapper>

    </Container>
  );
}

export default Payments;