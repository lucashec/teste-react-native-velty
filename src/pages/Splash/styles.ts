import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;
export const Title = styled.Text`
  margin-top: 90px;
  font-size:24px;
  font-family: 'Brother-1816-Regular';
  color: ${({theme}) => theme.Colors.PrimaryText};
`;
export const TextContent = styled.Text`
  width: 280px;
  height: 63px;
  margin-top: 12px;
  text-align: justify;
  font-size: 14px;
  font-family: 'Brother-1816-Regular';
  color: ${({theme}) => theme.Colors.SecondaryText};
`;
export const Icon = StyleSheet.create({
  splash: {
    top: 74,
    width: 342,
    height: 305,
  },
  logo: {
    top: 37,
    width: 145,
    height: 80
  } 
});
export const RegisterLabel = StyleSheet.create({
  text: {
    color: '#D28369',
    fontFamily: 'Brother-1816-Regular',
    fontSize: 14,
  } 
});

export const RegisterWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 100%;
  margin-top: 41px;
`;

