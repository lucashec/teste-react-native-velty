import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    flex:1;
    background-color: #FAFCFF 0% 0%;
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
        color: '#434343F2',
        fontSize: 18,
    }
});
export const SectionTitleWrapper = styled.View`
    width: 90%;
    height: 40px;
    justify-content: center;
    margin-bottom: 20px;
`;
export const SectionTitle = StyleSheet.create({
    text: {
        color: '#434343F2',
        fontFamily: 'Brother-1816-Regular',
        fontSize: 18
    }
});
export const OrdersList = styled.View`
    width: 90%;
    flex: 1;
`;
export const ServiceDetailWrapper = styled.View`
    width: 90%;
    height: 192px;
    align-self: center;
    background-color: #fff;
    box-shadow: 0px 50px 100px #0F5BFF26;
    border-radius: 20px;
    align-items:center;
    margin-bottom: 30px;
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
    background-color: #D28369;
    box-shadow: 0px 10px 30px #EDEDED;
    border-radius: 15px;
    opacity: 1;
`;

export const FinishedServiceWrapper = styled.View`
    width: 90%;
    height: 192px;
    align-self: center;
    border-radius: 20px;
    align-items:center;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    opacity: 1;
`;

export const FinishedInfoWrapper = styled.View`
    height: 75%;
    width: 100%;
    background-color: #fff;
    border-radius: 20px;
    align-items: center;
`;
export const RatingWrapper = styled.View`
    height: 20%;
    width: 55%;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;
export const AdditionalInfoWrapper = styled.View`
    height: 20%;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #fff;
`;
export const AdditionalInfoLabel = StyleSheet.create({
    text: {
        fontFamily: 'Brother-1816-Regular',
        color: '#B3B9C2',
        opacity: 1
    }
})