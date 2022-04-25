import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    flex:1;
    background-color: #95B8C4;
    opacity: 1;
    flex-direction: column;
    align-items: center;
`;
export const TitleWrapper = styled.View`
    width: 90%;
    height: 55px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;
export const TitleLabel = StyleSheet.create({
    text: {
        fontFamily: "Brother-1816-Regular",
        color: '#fff',
        fontSize: 18,
    }
});
export const ButtonWrapper = styled.TouchableOpacity`
    background-color: #fff;
    left: 0;
    position: absolute;
    z-index: 2;
    width: 55px;
    height: 55px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`;
export const ServiceDetailWrapper = styled.View`
    width: 90%;
    height: 192px;
    background-color: #fff;
    box-shadow: 0px 50px 100px #0F5BFF26;
    border-radius: 20px;
    margin-top: 40px;
    align-items:center;
    opacity: 1;
`;
export const ServiceDetailLabels = StyleSheet.create({
    title: {
        fontFamily: "Brother-1816-Regular",
        marginTop: 20,
        fontSize: 15
    },
    appointmentDay: {
        fontFamily: "Brother-1816-Regular",
        color: '#fff',
        marginTop: -3,
    },
    onAdress: {
        fontFamily: "Brother-1816-Regular",
        color: '#919191F2',
        marginTop: 3
    },
    adress: {
        fontFamily: "Brother-1816-Regular",
        color: '#919191F2',
    },
    price: {
        color: '#D28369',
        fontSize: 24,
        fontFamily: "Brother-1816-Regular",
        marginTop: 5,
    }
});
export const DayWrapper = styled.View`
    height: 30px;
    width: 60%;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
    background: #D28369 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #EDEDED;
    border-radius: 15px;
    opacity: 1;
`;
export const CreditCardsWrapper = styled.View`
    width: 100%;
    height: 100%;
    flex:1;
    margin-top: 79px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background-color: #fff;
`;
export const CardChooseWrapper = styled.View`
    width: 90%;
    height: 40px;
    align-self: center;
    margin-top: 39px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const CardChooseLabels = StyleSheet.create({
    title: {
        fontFamily: 'Brother-1816-Regular',
        fontSize: 18,
    },
    add:{
        fontFamily: 'Brother-1816-Regular',
        color: '#D28369',
        marginRight: 5
    } 
})
export const CreditCardItem = styled.View`
    height: 147px;
    width: 80%;
    margin-top: 10px;
    align-self: center;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
`
export const CreditCardInfo = styled.View`
    height: 95px;
    width: 100%;
    background: #fafafa 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 40px #0F5BFF0D;
    opacity: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
`
export const CardNameAndInfo = styled.View`
    width: 75px;
    height: 53px;
    justify-content: space-around;
    align-items: center;
    margin-left: -40px;
`
export const NameAndInfo = StyleSheet.create({
    labels: {
        color: '#D28369',
        fontFamily: 'AirbnbCerealBook',

    }

})
export const BillingDetails = styled.View`
    width: 100%;
    height: 35px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background: #fafafa 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 40px #0F5BFF0D;
    opacity: 1;
    border-radius: 20px;
`
export const PriceContent = styled.View`
    width: 110px;
    height: 70px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`
export const PriceContentLabels = StyleSheet.create({
    value: {
        color: '#D28369',
        fontSize: 21,
        fontFamily: 'Brother-1816-Regular'
    },
    total: {
        color: '#B3B9C2',
        fontSize: 14,
        fontFamily: 'Brother-1816-Regular'
    },

})
export const ConfirmPaymentButton = styled.TouchableOpacity`
    width: 150px;
    height: 70px;
    background-color: #95B8C4;
    margin-top: 20px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`;
export const  ConfirmPaymentButtonLabel = StyleSheet.create({
    text:{
        color: '#fff',
        fontFamily: 'Brother-1816-Regular',
        fontSize: 14,
    }
})
export const BottomWrapper = styled.View`
    bottom: 0;
    width: 100%;
    z-index: 2;
    position: absolute;
    height: 118px;
    justify-content: space-around;
    flex-direction: row;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background-color: #fafafa;
    box-shadow:  0px -15px 50px #0416370D;
`;