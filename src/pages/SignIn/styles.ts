import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
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

export const InputsWrapper = styled.View`
    width: 295px;
    height: auto;
`;
export const Label = StyleSheet.create({
    text: {
        fontFamily: 'Brother-1816-Regular',
        fontSize: 18,
    }
});

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
    background-color: ${({theme}) => theme.Colors.Backrgound};
    box-shadow: 0px -15px 50px #0416370D;
    border-radius: 40px;
    margin-top: 60px;
`;

export const ForgotPasswordWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 25px;
  width: auto;
  margin-top: 19px;
`;
export const ForgotPasswordLabel = StyleSheet.create({
    text: {
      color: '#D28369',
      fontFamily: 'Brother-1816-Regular',
      fontSize: 14,
    } 
  });

  export const RegisterRedirect = styled.View`
    width: 295px;
    height: 60px;
    flex-direction: row;
    border-radius: 400px;
    justify-content: center;
    align-items: center;
    margin-top: 140px;
    background-color: ${({theme}) => theme.Colors.AlterBackground}};
  `;
  export const RegisterRedirectLabel = StyleSheet.create({
    text: {
        fontFamily: 'Brother-1816-Regular',
        fontSize: 12,
        marginRight: 5,
      },
    link: {
        fontFamily: 'Brother-1816-Regular',
        fontSize: 12,
        color: '#0F5BFF'
      }  
  })