import React from 'react';
import { ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PromoBannerItem from '../../components/PromoBannerItem';
import ServiceBannerItem from '../../components/ServiceBannerItem';
import BottomTabBar from '../../components/BottomTabBar';
import { useNavigation } from '@react-navigation/native';

import Img from '../../assets/cashback.jpg';
import unha from '../../assets/unhas.png';
import pemao from '../../assets/pemao.png';
import pe from '../../assets/pe.png';
import escova from '../../assets/escova.png';
import cabelo from '../../assets/cabelo.png';
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
    <ScrollView style={{ backgroundColor: '#fff'}}>
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
          imagePath={unha}
          serviceTitle='Mãos'
          price='R$ 9,90'
          onPress={() => {
            navigation.navigate('Appointment');
          }} 
          />

          <ServiceBannerItem 
          imagePath={pemao}
          serviceTitle='Pés e Mãos'
          price='R$ 19,90' 
          />

        <ServiceBannerItem 
          imagePath={pe}
          serviceTitle='Pés'
          price='R$ 9,90' 
          />
          </ScrollView>
        </ServicesBannerWrapper>

        <SectionTitle>
          Cabelo
        </SectionTitle>

        <ServicesBannerWrapper>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >          
          <ServiceBannerItem 
          imagePath={escova}
          serviceTitle='Título'
          price='R$ 9,90' 
          />

          <ServiceBannerItem 
          imagePath={cabelo}
          serviceTitle='Título'
          price='R$ 19,90' 
          />

        <ServiceBannerItem 
          imagePath={escova}
          serviceTitle= 'Escova em cabelo curto'
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
          imagePath={unha}
          serviceTitle= 'Título'
          price='R$ 9,90' 
          />

          <ServiceBannerItem 
          imagePath={pemao}
          serviceTitle= 'Título'
          price='R$ 19,90' 
          />

        <ServiceBannerItem 
          imagePath={pe}
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
    />
    </>
  );
}


export default Home;