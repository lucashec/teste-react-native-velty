import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100%;
    width: 100%;
    align-items: center;
    flex: 1;
`;
export const LabelWrapper = styled.View`
    height: 55px;
    width: 100%;
    flex-direction: row;
    position: relative;
    margin-top: 35px;
    align-items: center;
    justify-content: center;
`;
export const BackButton = styled.TouchableOpacity`
    height: 55px;
    width: 55px;
    margin-top: 35px;
    margin-left: 23px;
    align-items: center;
    justify-content: center;
    z-index: 2;
    position: absolute;
`;
export const Input = styled.TextInput`
    width: 295px;
    height: 70px;
    align-self: center;
    border: 1px solid #e6e3e3;
    border-radius: 20px;
    margin-bottom: 20px;
    font-family: 'Brother-1816-Regular';
    font-size: 12px;
    padding-left: 20px;
`;
export const InputsWrapper = styled.View`
    width: 295px;
    height: auto;
    margin-top: 40px;
    flex: 1;
`;
export const Label = StyleSheet.create({
    text: {
        fontFamily: 'Brother-1816-Regular',
        fontSize: 18,
    }
});

export const CheckWrapper = styled.View`
    width: 230px;
    justify-content: center;
    align-items: flex-start;
    height: 25px;
    flex-direction: row;
    margin-left: -3px;
`;
export const AgreementText = styled.Text`
    margin-top: 6px;
    font-family: 'AirbnbCerealBook';
    font-size: 14px;
    font-weight: bold;
`;
export const BottomModal = styled.View`
    width: 100%;
    height: 100px;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px -15px 50px #0416370D;
    border-radius: 40px;
    margin-top: 60px;
`;
export const ModalWrapper = StyleSheet.create({
    styles:{
        margin: 0,
        bottom: 0,
    }
});