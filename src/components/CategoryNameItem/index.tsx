import React from 'react';
import { Text} from 'react-native';
import { 
    CategoryInfoWrapper, 
    CategoryLabels, 
    CategoryWrapper, 
    ImageWrapper, 
} from './styles';
interface CategoryNameItem {
    title: string;
    servicesAmount: string;
}
const CategoryNameItem: React.FC<CategoryNameItem> = (props) => {
  return (
    <>
    <CategoryWrapper>
    <ImageWrapper>

    </ImageWrapper>
    <CategoryInfoWrapper>
       <Text style={CategoryLabels.title}>
       {props}
       </Text>
       <Text style={CategoryLabels.amount}>
        {props.servicesAmount}
       </Text>
    </CategoryInfoWrapper>
   </CategoryWrapper>
   <CategoryWrapper>

   </CategoryWrapper>
   <CategoryWrapper>

   </CategoryWrapper>
    </>
  );
}

export default CategoryNameItem;