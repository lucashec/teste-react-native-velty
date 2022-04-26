import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    flex:1;
    background-color: #FAFCFF 0% 0%;
    opacity: 1;
    flex-direction: column;
    align-items: center;
`;

export const SearchBoxWrapper = styled.View`
    width: 100%;
    height: 140px;
    align-items: center;
    justify-content: flex-end;
    background: #95B8C4 0% 0% no-repeat padding-box;
    opacity: 1;
`;

export const SearchBox = styled.View`
    width: 85%;
    height: 50px;
    margin-bottom: 40px;
    flex-direction: row;
    align-items: center;
`;
export const SearchInput = styled.TextInput`
    width: 80%;
    height: 50px;
    margin-left: 10px;
    color: #fff;
    font-family: 'Brother-1816-Regular';
`;
export const ResultContainer = styled.View`
    width: 90%;
    flex: 1;
`;
export const CategoriesContainer = styled.View`
    height: 150px;
    margin-top: 20px;
    margin-bottom: 30px;
`
export const SectionTitle = styled.Text`
    font-family: 'Brother-1816-Regular';
    font-size: 22px;
    margin-top: 30px;
`;
export const OtherSectionTitle = styled.Text`
    font-family: 'Brother-1816-Regular';
    font-size: 22px;
    margin-top: 30px;
`;
export const CategoryWrapper = styled.View`
    width: 110px;
    height: 149px;
    background: #FFFFFF;
    border-radius: 30px;
    margin-right: 20px;
    opacity: 1;
`;
export const ImageWrapper = styled.View`
    width: 100%;
    height: 50%;
    background-color: yellow;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;
export const CategoryInfoWrapper = styled.View`
    height: 40%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
export const CategoryLabels = StyleSheet.create({
    title: {
        fontFamily: 'AirbnbCerealBook',
        fontSize: 15,
        marginBottom: 7
    },
    amount: {
        color: '#D28369',
        fontFamily: 'AirbnbCerealBook',
        fontSize:12
    }
});

export const ServicesContainer = styled.View`
    width: 100%;
    align-self: center;
    height: 231px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;