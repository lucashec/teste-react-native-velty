import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { Container } from './styles';

interface BottomTabBarProps{
    pricipalIcon: any;
    searchIcon: any;
    ordersIcon: any;
    configIcon: any;
    onPressOrders?: any;
    onPressSearch?: any;
}

const BottomTabBar: React.FC<BottomTabBarProps>= (props) => {
  const navigation = useNavigation();
  return (
      <Container>
        <TouchableOpacity >
            <Image source={props.pricipalIcon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPressSearch}>
            <Image source={props.searchIcon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPressOrders}>
            <Image source={props.ordersIcon}/>
        </TouchableOpacity>
        <TouchableOpacity >
            <Image source={props.configIcon}/>
        </TouchableOpacity>
      </Container>
  );
}

export default BottomTabBar;