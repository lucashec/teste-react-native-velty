import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex:1;
    background-color: #FAFCFF 0% 0%;
    opacity: 1;
    flex-direction: column;
    align-items: center;
`;
export const TitleWrapper = styled.View`
    width: 90%;
    height: 55px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;
export const TitleLabel = StyleSheet.create({
    text: {
        fontFamily: "Brother-1816-Regular",
        color: '#434343F2',
        fontSize: 18,
    }
});
export const ButtonWrapper = styled.TouchableOpacity`
    background-color: #fff;
    left: 0;
    position: absolute;
    z-index: 2;
    width: 55px;
    height: 55px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`;

export const LargeInput = styled.TextInput`
    width: 329px;
    height: 70px;
    background-color: #FFFFFF;
    border: 2px solid #F3F0F0;
    border-radius: 20px;
    margin-top: 2px;
    opacity: 1;
    padding-left: 20px;
    color: #B3B9C2;
    font-family: 'Brother-1816-Regular';
    margin-bottom: 18px;
`;

export const InputsWrapper = styled.View`
    width: 90%;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;
export const SmallInputsWrapper = styled.View`
    width: 329px;
    height: 76px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const SmallInput = styled.TextInput`
    width: 156px;
    height: 70px;
    background: #FFFFFF 0% 0%;
    border: 2px solid #F3F0F0;
    border-radius: 20px;
    opacity: 1;
    margin-top: 2px;
    padding-left: 20px;
    color: #B3B9C2;
    font-family: 'Brother-1816-Regular';
`
export const BottomModal = styled.View`
    width: 100%;
    height: 120px;
    align-self: flex-end;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px -15px 50px #0416370D;
    border-radius: 40px;
`;
