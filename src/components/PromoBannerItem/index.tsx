import React from 'react';
import { Image} from 'react-native';
import { Container, ImageFill } from './styles';

interface PromoBannerItemProps {
  imagePath: any;
}

const PromoBannerItem: React.FC<PromoBannerItemProps> = (props) => {
  return (
    <Container>
      <Image source={props.imagePath} style={ImageFill.styles}/>
    </Container>
  );
}

export default PromoBannerItem;