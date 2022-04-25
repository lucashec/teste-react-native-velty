import styled from "styled-components/native";
import { StyleSheet } from 'react-native';


export const LabelWrapper = styled.View`
    height: 55px;
    width: 100%;
    flex-direction: row;
    position: relative;
    margin-top: 35px;
    align-items: center;
    justify-content: center;
`;
export const BackButton = styled.TouchableOpacity`
    height: 55px;
    width: 55px;
    margin-top: 35px;
    margin-left: 23px;
    align-items: center;
    justify-content: center;
    z-index: 2;
    position: absolute;
`;

export const Label = StyleSheet.create({
    text: {
        fontFamily: 'Brother1816Printed-Medium',
        fontSize: 19,
    }
});
export const SecondaryLabel = StyleSheet.create({
    text: {
        fontFamily: 'Brother1816Printed-Regular',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: -10,
    }
});
export const Container = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    margin-top: 15px;
`;
export const DaysWrepper = styled.View`
    width: 90%;
    height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;
export const HighlightedDay = styled.View`
    width: 104px;
    height: 40px;
    background-color: #95B8C4;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const DayLabel = StyleSheet.create({
    text: {
        fontFamily: 'SF-Pro-Display-Regular',
        fontSize: 16,
        color: '#656569',
    }
})
export const HighlightedDayNumber = StyleSheet.create({
    text: {
        fontFamily: 'SF-Pro-Display-Bold',
        fontSize: 16,
        color: '#fff',
        marginRight: 5 
    }
})
export const HighlightedDayDayWeek = StyleSheet.create({
    text: {
        fontFamily: 'Product Sans Regular',
        fontSize: 16,
        color: '#fff',
        marginTop:2
    }
})
export const InfoCard = styled.View`
    width: 90%;
    height: 54px;
    background-color: #EDEDED;
    border-radius: 10px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;
export const InfoCardContent = StyleSheet.create({
    text: {
        fontFamily: 'Brother-1816-Regular',
        fontSize: 14,
        color: '#919191F2',
    },
    bold: {
        color: '#919191F2',
        fontFamily: 'Brother-1816-Bold',
        fontSize: 14,
    }
});
export const HoursQuestion = styled.View`
    width: 90%;
    align-items: flex-start;
    justify-content: center;
    margin-top: 30px;
`
export const HoursQuestionLabel = StyleSheet.create({
    text:{
        fontFamily: 'Brother-1816-Regular',
        fontSize: 16,
        color: '#434343F2',
    }
});
export const GridLabels = styled.View`
    width: 90%;
    flex-direction: row;
    height: 34px;
    margin-top: 20px;
    justify-content: space-around;
    align-items: center;
`;
export const GridLabelsSytle = StyleSheet.create({
    text: {
        fontFamily: 'Brother-1816-Regular',
        fontSize: 16,
        color: '#434343F2',
        marginLeft: -10
    }
});
export const HourGrid = styled.View`
    width: 80%;
    height: 290px;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const BottomModal = styled.View`
    width: 100%;
    height: 120px;
    align-self: flex-end;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px -15px 50px #0416370D;
    border-radius: 40px;
`;

export const ConfirmAppointment = styled.View`
    width: 100%;
    height: 316px;
    align-self: flex-end;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px -15px 50px #0416370D;
    border-radius: 40px;
`;
export const ConfirmAppointmentLabels = StyleSheet.create({
    title:{
        fontSize:18,
        fontFamily: 'Brother-1816-Regular',
        marginTop: 30,
        color: '#041637'
    },
    message:{
        color: '#919191F2',
        fontFamily: 'Brother-1816-Regular',
        marginTop: 30,
    }
});
export const AppointmentDetails = styled.View`
    width: 85%;
    height: 52px;
    margin-top: 12px;
    border-radius: 10px;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #B9B9B9F2;
`;
export const AppointmentDetailLabels = StyleSheet.create({
    info:{
        fontSize:16,
        fontFamily: 'SF-Pro-Display-Regular',
        color: '#B9B9B9F2'
    },
    price:{
        color: '#B9B9B9F2',
        fontFamily: 'SF-Pro-Display-Bold',
    }
});
export const ConfirmActionsWrapper = styled.View`
    height: 70px;
    width: 85%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;
export const ConfirmAppointmentButton = styled.TouchableOpacity`
    height: 70px;
    width: 190px;
    background-color: #95B8C4;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
`;
export const ConfirmAppointmentButtonLabels = StyleSheet.create({
    agree:{
        fontSize:14,
        fontFamily: 'Brother-1816-Regular',
        color: '#fff'
    },
    decline:{
        color: '#B3B9C2',
        fontFamily: 'Brother-1816-Regular',
        fontSize: 14,
    }
});