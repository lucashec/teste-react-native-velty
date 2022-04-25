import React from 'react';
import { Image, Text, Touchable, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { 
  Container,
  Icon, 
  Title,
  TextContent,
  RegisterLabel,
  RegisterWrapper
} from './styles';
import SplashIcon from '../../assets/splash-icon.png';
import Logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  return(
  <Container>
    <Image source={Logo} style={Icon.logo}/>
    <Image source={SplashIcon} style={Icon.splash}/>
   
    <Title>
      Inspiração que aproxima
    </Title>
    <TextContent>
      Lorem ipsum dolor sit amet consectur adipiscing
      elit. Etiam sodales est enim, id lectus dui dignissim
      nec
    </TextContent>
    <Button label='Entrar' 
    onPress={() => {
      navigation.navigate('SignIn');
    }}/>
    <RegisterWrapper onPress={() => {
      navigation.navigate('Register')
    }}>
      <Text style={RegisterLabel.text}>
      Fazer cadastro
      </Text>
    </RegisterWrapper>
      
      
    
  </Container>
  );
}

export default Splash;