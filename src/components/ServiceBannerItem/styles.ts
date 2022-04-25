import styled from "styled-components/native";

export const Container = styled.View`
    width: 165px;
    height: 231px;
    border-radius: 25px;
    margin-left: 2px;
    margin-right: 20px;
    box-shadow: 0px 10px 20px #0000000D;
`;
export const ImageWrapper =  styled.View`
    flex: 2;
    border-radius: 25px;
`;
export const TextWrapper = styled.View`
    flex:1;
    border-radius: 25px;
    flex-direction: column;
    justify-content: space-evenly;
`;
export const ServiceTitle = styled.Text`
    margin-left: 13px;
    font-size: 16px;
    font-family: 'Brother1816Printed-Medium';
`;
export const PriceStartsLabel = styled.Text`
    margin-left: 13px;
    color:#D28369;
`;
export const PriceLabel = styled.Text`
    margin-left: 13px;
    margin-top: -15px;
    font-family: 'Brother-1816-Bold';
    color: #D28369;
`;
export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 153px;
    height: 35px;
    background-color: #95B8C4;
    align-self: center;
    border-radius: 35px;
`;
export const ButtonLabel = styled.Text`
    font-family: 'Brother-1816-Regular';
    color: #fff;
`;