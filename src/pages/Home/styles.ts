import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const InfoBanner = styled.View`
    width: 100%;
    height: 340px;
    background-color: ${({theme}) => theme.Colors.Primary };
`;
export const Title = styled.Text`
    font-family: 'Brother-1816-Regular';
    font-size: 36px;
    margin-top: 40px;
    margin-left: 23px;
    color: ${({theme}) => theme.Colors.Backrgound };
`;
export const SubTitle = styled.Text`
    font-family: 'Brother-1816-Regular';
    font-size: 16px;
    margin-left: 23px;
    color: ${({theme}) => theme.Colors.Backrgound };
`;
export const AddressWrapper = styled.View`
    width: 357px;
    height: 60px;
    margin-left: 23px;
    margin-top: 32px;
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) => theme.Colors.Primary};
    border: 2px solid rgba(255,255,255, 0.1);
    border-radius: 12px;
    position: relative;
`;
export const SearchIcon = StyleSheet.create({
    styles: {
        zIndex:2,
        position: 'absolute',
        marginLeft: 310,
        marginTop: 15,
        color: '#fff'
    }
});
export const AddressInput = styled.TextInput`
    color: #fff;
    font-size: 16px;
    padding-left:16px;
    font-family: 'Brother-1816-Regular';
`;
export const BottomMenu = styled.View`
    bottom: 0;
    width: 100%;
    z-index: 2;
    height: 84px;
    background-color: #fff;
    box-shadow:  0px -15px 50px #0416370D;
    opacity: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
export const PromoBannerWrapper = styled.View`
    height: 158px;
    left: 23px;
    margin-top: -80px;
    z-index: 2;
`;

export const SectionTitle = styled.Text`
    font-family: 'Brother-1816-Regular';
    font-size: 22px;
    margin-top: 30px;
    margin-left: 23px;
` 

export const ServicesBannerWrapper = styled.View`
    height: 231px;
    left: 23px;
    margin-top: 30px;
    z-index: 2;
`;

