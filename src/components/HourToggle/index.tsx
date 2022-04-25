import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, Text} from 'react-native';
import { Label, Styles} from './styles';

interface HourToggleProps{
    hour: string;
    disabled?: boolean;
    selected?: boolean;
    onPress?: any;
}
const HourToggle: React.FC<HourToggleProps> = (props) => {
  let currentColor = '';
  let currentFontColor = ''
  const unselected = '#fff';
  const disabled = '#bcbaba';
  const selected = '#95B8C4';
  
  if (props.disabled){
      currentColor = disabled;
      currentFontColor = "#fff"
  } else if (props.selected){
    currentColor = selected;
    currentFontColor = "#fff"
  } else {
    currentColor = unselected;
    currentFontColor = "#000"
  }
  let addBackground = StyleSheet.create({
      color:{
          backgroundColor: currentColor,
      }
  })
  let addFontColor = StyleSheet.create({
    colorFill:{
        color: currentFontColor,
    }
})
  return (
        <TouchableOpacity 
        style={[Styles.container, addBackground.color]}
        onPress={props.onPress}
        >
          <Text
          style={[Styles.hour, addFontColor.colorFill]}
          >
              {props.hour}
          </Text>
        </TouchableOpacity>
  );
}

export default HourToggle;