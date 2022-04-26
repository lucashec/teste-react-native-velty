import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import BottomTabBar from '../../components/BottomTabBar';
import orders from '../../assets/orders.png';
import search from '../../assets/search.png';
import setting from '../../assets/icons-Document.png';
import home from '../../assets/icons-Home.png';
import star from '../../assets/Star.png'
import { 
  AdditionalInfoLabel,
  AdditionalInfoWrapper,
    Container,
    DayWrapper,
    FinishedInfoWrapper,
    FinishedServiceWrapper,
    OrdersList,
    RatingWrapper,
    SectionTitle,
    SectionTitleWrapper,
    ServiceDetailLabels,
    ServiceDetailWrapper,
    TitleLabel,
    TitleWrapper,
} from './styles';


const Orders: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TitleWrapper>
        <Text style={TitleLabel.text}>
          Pedidos
        </Text>
      </TitleWrapper>

      <OrdersList>
        <ScrollView 
          showsVerticalScrollIndicator={false}
        >
          <SectionTitleWrapper>
            <Text style={SectionTitle.text}>
              Em Andamento
            </Text>
          </SectionTitleWrapper>

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

          <SectionTitleWrapper>
            <Text style={SectionTitle.text}>
              Concluídos
            </Text>
          </SectionTitleWrapper>

          <FinishedServiceWrapper>
            <FinishedInfoWrapper>
              <Text style={ServiceDetailLabels.title}>
                Nome de Serviço grande e Longo
              </Text>
              <DayWrapper>
                <Text style={ServiceDetailLabels.appointmentDay}>
                  Terça Feira 10/06/22 às 20h
                </Text>
              </DayWrapper>
              <RatingWrapper>
                <Image 
                  source={star} 
                  />
                  <Image 
                  source={star} 
                  />
                  <Image 
                  source={star} 
                  />
                  <Image 
                  source={star} 
                  />
                  <Image 
                  source={star} 
                  />
              </RatingWrapper>
            </FinishedInfoWrapper>

            <AdditionalInfoWrapper>
                <Text style={AdditionalInfoLabel.text}>
                  Profissional não compareceu
                </Text>
            </AdditionalInfoWrapper>
          </FinishedServiceWrapper>

          <FinishedServiceWrapper>
            <FinishedInfoWrapper>
              <Text style={ServiceDetailLabels.title}>
                Nome de Serviço grande e Longo
              </Text>
              <DayWrapper>
                <Text style={ServiceDetailLabels.appointmentDay}>
                  Terça Feira 10/06/22 às 20h
                </Text>
              </DayWrapper>
              <RatingWrapper>
                <Image 
                source={star} 
                />
                <Image 
                source={star} 
                />
                <Image 
                source={star} 
                />
                <Image 
                source={star} 
                />
                <Image 
                source={star} 
                />
              </RatingWrapper>
            </FinishedInfoWrapper>

            <AdditionalInfoWrapper>
                <Text style={AdditionalInfoLabel.text}>
                  Profissional não compareceu
                </Text>
            </AdditionalInfoWrapper>
          </FinishedServiceWrapper>

        </ScrollView>
      </OrdersList>

      <BottomTabBar 
        pricipalIcon={home}
        searchIcon={search}
        ordersIcon={orders}
        configIcon={setting}
        onPressSearch={
          () => {
            navigation.navigate('Search');
          }
        }
      />


    </Container>
  );
}

export default Orders;