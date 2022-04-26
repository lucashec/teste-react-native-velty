import styled from "styled-components/native";
import { StyleSheet } from 'react-native';

export const CategoryWrapper = styled.View`
    width: 110px;
    height: 149px;
    background: #FFFFFF;
    border-radius: 30px;
    margin-right: 20px;
    margin-top: 20px;
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
})