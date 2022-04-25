import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { Container } from './styles';

interface BottomTabBarProps{
    pricipalIcon: any;
    searchIcon: any;
    ordersIcon: any;
    configIcon: any;
}

const BottomTabBar: React.FC<BottomTabBarProps>= (props) => {
  return (
      <Container>
        <TouchableOpacity>
            <Image source={props.pricipalIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={props.searchIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={props.ordersIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={props.configIcon}/>
        </TouchableOpacity>
      </Container>
  );
}

export default BottomTabBar;