import styled from "styled-components/native";

export const CustomButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.Colors.Primary};
  width: 295px;
  height: 70px;
  margin-top: 20px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;
export const ButtonLabel = styled.Text`
  color: ${({theme}) => theme.Colors.Backrgound};
  font-family: 'Brother-1816-Regular';
  font-size: 14px;
`