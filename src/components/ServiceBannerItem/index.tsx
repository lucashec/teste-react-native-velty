import React from 'react';
import { Image } from 'react-native';
import { 
    Container, 
    ImageWrapper,
    TextWrapper,
    ServiceTitle,
    PriceStartsLabel,
    PriceLabel,
    Button,
    ButtonLabel
} from './styles';

interface ServiceBannerItemProps{
    imagePath: any;
    serviceTitle: string;
    price: string;
    onPress?: any;
}

const ServiceBannerItem: React.FC<ServiceBannerItemProps> = (props) => {
  return (
     <Container>
         <ImageWrapper>
             <Image source={props.imagePath}/>
             <TextWrapper>
                <ServiceTitle>
                    {props.serviceTitle}
                </ServiceTitle>
                <PriceStartsLabel>
                    A partir de
                </PriceStartsLabel>
                <PriceLabel>
                    {props.price}
                </PriceLabel>
                <Button onPress={props.onPress}>
                    <ButtonLabel>
                        Conhecer
                    </ButtonLabel>
                </Button>
             </TextWrapper>
         </ImageWrapper>
        </Container>
    );
}

export default ServiceBannerItem;