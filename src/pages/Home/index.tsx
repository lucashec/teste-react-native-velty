import React from 'react';
import { ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PromoBannerItem from '../../components/PromoBannerItem';
import ServiceBannerItem from '../../components/ServiceBannerItem';
import BottomTabBar from '../../components/BottomTabBar';
import { useNavigation } from '@react-navigation/native';

import Img from '../../assets/cashback.jpg';
import manicure from '../../assets/manicure.png';
import combo from '../../assets/combo.png';
import pedicure from '../../assets/pedicure.png';
import hair from '../../assets/hair.png';
import longHair from '../../assets/long-hair.png';
import principal from '../../assets/principal-icon.png';
import searchIcon from '../../assets/search.png';
import ordersIcon from '../../assets/icons-Document.png';
import configIcon from '../../assets/icons-Setting.png';

import { 
    InfoBanner, 
    SubTitle, 
    Title,
    AddressInput,
    AddressWrapper,
    SearchIcon,
    PromoBannerWrapper,
    SectionTitle,
    ServicesBannerWrapper,
} from './styles';


const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
    <ScrollView
     showsVerticalScrollIndicator={false}
    >
     <InfoBanner>
        <Title>
          Olá, José  
        </Title>
        <SubTitle>
          Onde será o seu 
          atendimento hoje?
        </SubTitle>
        <AddressWrapper>
            <AddressInput 
            value='Av Miguel Castro, 600'
            />  
        <AntDesign name='right' size={23} style={SearchIcon.styles}/>
        </AddressWrapper>
     </InfoBanner>

        <PromoBannerWrapper>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
          <PromoBannerItem imagePath={Img}/>
          <PromoBannerItem imagePath={Img}/>
          <PromoBannerItem imagePath={Img}/>
            
          </ScrollView>
        </PromoBannerWrapper>
        <SectionTitle>
          Unhas
        </SectionTitle>
        
        <ServicesBannerWrapper>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >          
          <ServiceBannerItem 
          imagePath={manicure}
          serviceTitle='Mãos'
          price='R$ 9,90'
          onPress={() => {
            navigation.navigate('Appointment');
          }} 
          />

          <ServiceBannerItem 
          imagePath={combo}
          serviceTitle='Pés e Mãos'
          price='R$ 19,90' 
          />

        <ServiceBannerItem 
          imagePath={pedicure}
          serviceTitle='Pés'
          price='R$ 9,90' 
          />
          </ScrollView>
        </ServicesBannerWrapper>

        <SectionTitle>
          Cabelos
        </SectionTitle>

        <ServicesBannerWrapper>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >          
          <ServiceBannerItem 
          imagePath={hair}
          serviceTitle='Título'
          price='R$ 9,90' 
          />

          <ServiceBannerItem 
          imagePath={longHair}
          serviceTitle='Título'
          price='R$ 19,90' 
          />

        <ServiceBannerItem 
          imagePath={hair}
          serviceTitle= 'Escova em Cabelo curto'
          price='R$ 9,90' 
          />
          </ScrollView>
        </ServicesBannerWrapper>

        <SectionTitle>
          Depilação
        </SectionTitle>

        <ServicesBannerWrapper>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >          
          <ServiceBannerItem 
          imagePath={manicure}
          serviceTitle= 'Título'
          price='R$ 9,90' 
          />

          <ServiceBannerItem 
          imagePath={combo}
          serviceTitle= 'Título'
          price='R$ 19,90' 
          />

        <ServiceBannerItem 
          imagePath={pedicure}
          serviceTitle= 'Título'
          price='R$ 9,90' 
          />
          </ScrollView>
        </ServicesBannerWrapper>
    </ScrollView>
    <BottomTabBar 
      pricipalIcon={principal}
      searchIcon={searchIcon}
      ordersIcon={ordersIcon}
      configIcon={configIcon}
      onPressOrders={() => {
        navigation.navigate('Orders');
      }}
      onPressSearch={() => {
        navigation.navigate('Search');
      }}
    />
    </>
  );
}


export default Home;