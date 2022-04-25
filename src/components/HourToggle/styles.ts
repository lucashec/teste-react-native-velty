import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Styles = StyleSheet.create({
    container: {
        width: 90,
        height: 36,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    hour: {
        fontFamily: 'SF-Pro-Display-Bold',
        fontSize: 16,
    }
})
export const Label = styled.Text`
    font-family: 'SF-Pro-Display-Bold';
    font-size: 16px;
`;