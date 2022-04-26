import { ServerContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from  'react-native-vector-icons/AntDesign'
import hair from '../../assets/cabelo.png';
import BottomTabBar from '../../components/BottomTabBar';
import ServiceBannerItem from '../../components/ServiceBannerItem';
import home from '../../assets/icons-Home.png';
import search from '../../assets/search.png';
import orders from '../../assets/icons-Document.png';
import config from '../../assets/icons-Setting.png';

import { CategoryInfoWrapper, 
    CategoryLabels, 
    CategoryWrapper, 
    ImageWrapper, 
    SectionTitle,
    OtherSectionTitle,
    ServicesContainer, 
    CategoriesContainer} from './styles';
import { 
    Container, 
    SearchBoxWrapper, 
    SearchBox,
    SearchInput,
    ResultContainer
} from './styles';

const Search: React.FC = () => {
    const [keyword, setKeyword] = useState('');
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
            }} 
            />
         </SearchBox>   
        </SearchBoxWrapper> 
        <ResultContainer>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
        {
            !keyword &&
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
         

        </ResultContainer>

        <BottomTabBar
        pricipalIcon={home}
        searchIcon={search}
        ordersIcon={orders}
        configIcon={config}
        />
     </Container>
    );
}

export default Search;