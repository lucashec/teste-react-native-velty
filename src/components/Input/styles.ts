import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 295px;
    height: 70px;
    border: 1px solid #e6e3e3;
    border-radius: 20px;
    margin-bottom: 20px;
`;

export const CustomTextInput = styled.TextInput`
    width: 295px;
    height: 70px;
    align-self: center;
    font-family: 'Brother-1816-Regular';
    font-size: 12px;
    border-color: #fff;
    padding-left: 20px;
` 

export const Input = StyleSheet.create({
    style: {
        width: 295,
        height: 70,
        fontFamily: 'Brother-1816-Regular',
        fontSize: 12,
        borderColor: '#fff',
        paddingLeft: 20,
    }
})