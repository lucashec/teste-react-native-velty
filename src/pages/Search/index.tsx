import React, { useEffect, useState } from 'react';
import { View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from  'react-native-vector-icons/AntDesign'
import hair from '../../assets/long-hair.png';
import BottomTabBar from '../../components/BottomTabBar';
import ServiceBannerItem from '../../components/ServiceBannerItem';
import home from '../../assets/icons-Home.png';
import search from '../../assets/search-long.png';
import orders from '../../assets/icons-Document.png';
import config from '../../assets/icons-Setting.png';
import little1 from '../../assets/little1.png';
import little2 from '../../assets/little2.png';
import little3 from '../../assets/little3.png';

import { CategoryInfoWrapper, 
    CategoryLabels, 
    CategoryWrapper, 
    ImageWrapper, 
    SectionTitle,
    OtherSectionTitle,
    ServicesContainer, 
    CategoriesContainer,
    NotFoundWrapper,
    NotFoundLabels} from './styles';
import { 
    Container, 
    SearchBoxWrapper, 
    SearchBox,
    SearchInput,
    ResultContainer
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Search: React.FC = () => {
    const [keyword, setKeyword] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);
    const navigation = useNavigation();
    
    useEffect(() => {
        if (keyword.length == 0) setIsEmpty(true)
    }, [keyword])
    return (
     <Container>
        <SearchBoxWrapper>
         <SearchBox>
            <AntDesign 
            name='search1' 
            size={22} 
            color='#fff'
            />
            <SearchInput
            placeholder='O que você está procurando'
            placeholderTextColor="#fff"
            value={keyword}
            onChangeText={(text) => {
                setKeyword(text)
                setIsEmpty(false)
            }} 
            />
         </SearchBox>   
        </SearchBoxWrapper> 
        <ResultContainer>
        {
          keyword.length > 4 ?
          <NotFoundWrapper>
            <Text style={NotFoundLabels.text}>
            Não foram encontrados resultados 
            para os termos da sua busca
            </Text>  
          </NotFoundWrapper>
          :
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
            {
            isEmpty &&
            <>
            <SectionTitle>
            Categorias
            </SectionTitle>

            <CategoriesContainer>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
            <CategoryWrapper>
                <ImageWrapper>
                    <Image source={little1}/>
                </ImageWrapper>
                <CategoryInfoWrapper>
                <Text style={CategoryLabels.title}>
                Unhas
                </Text>
                <Text style={CategoryLabels.amount}>
                +56 Serviços
                </Text>
                </CategoryInfoWrapper>
            </CategoryWrapper>

            <CategoryWrapper>
                <ImageWrapper>
                    <Image source={little2}/>
                </ImageWrapper>
                <CategoryInfoWrapper>
                <Text style={CategoryLabels.title}>
                Cabelos
                </Text>
                <Text style={CategoryLabels.amount}>
                +12 Serviços
                </Text>
                </CategoryInfoWrapper>
            </CategoryWrapper>

            <CategoryWrapper>
                <ImageWrapper>
                    <Image source={little3}/>
                </ImageWrapper>
                <CategoryInfoWrapper>
                <Text style={CategoryLabels.title}>
                Massagem
                </Text>
                <Text style={CategoryLabels.amount}>
                +3 Serviços
                </Text>
                </CategoryInfoWrapper>

            </CategoryWrapper>

            <CategoryWrapper>
                <ImageWrapper>
                    <Image source={little2}/>
                </ImageWrapper>
                <CategoryInfoWrapper>
                <Text style={CategoryLabels.title}>
                Unhas
                </Text>
                <Text style={CategoryLabels.amount}>
                +3 Serviços
                </Text>
                </CategoryInfoWrapper>

            </CategoryWrapper>
            </ScrollView>
            </CategoriesContainer>
            </>
            }         


            <OtherSectionTitle>
            Todos os Serviços
            </OtherSectionTitle>


            <ServicesContainer>
            <ServiceBannerItem 
            imagePath={hair}
            serviceTitle='Cabelo'
            price='R$ 9,90' 
            />

            <ServiceBannerItem 
            imagePath={hair}
            serviceTitle='Cabelo'
            price='R$ 9,90' 
            />

            </ServicesContainer>

            <ServicesContainer>
            <ServiceBannerItem 
            imagePath={hair}
            serviceTitle='Cabelo'
            price='R$ 9,90' 
            />

            <ServiceBannerItem 
            imagePath={hair}
            serviceTitle='Cabelo'
            price='R$ 9,90' 
            />

            </ServicesContainer>

            </ScrollView>
        }
        </ResultContainer>

        <BottomTabBar
        pricipalIcon={home}
        searchIcon={search}
        ordersIcon={orders}
        configIcon={config}
        onPressOrders={() => {
            navigation.navigate('Orders');
          }}
          onPressSearch={() => {
            navigation.navigate('Search');
          }}
          onPressHome={() => {
            navigation.navigate('Home');
          }}
        />
     </Container>
    );
}

export default Search;