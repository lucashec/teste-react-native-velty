import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Splash from '../../pages/Splash';
import Register from '../../pages/Register';
import SignupConfirm from "../../pages/SignupConfirm";
import SignIn from '../../pages/SignIn';
import Home from '../../pages/Home';
import Appointment from '../../pages/Appointment';
import Orders from "../../pages/Orders";
import Search from "../../pages/Search";
import Payments from "../../pages/Payments";
import AddCreditCard from "../../pages/AddCreditCard";
import AddAddress from "../../pages/AddAddress";
import AppTabs from "../Tab";

const {Navigator, Screen} = createNativeStackNavigator();

export default function(){
    return (
        <Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
            <Screen name="Splash" component={Splash}/>
            <Screen name="Register" component={Register}/>
            <Screen name="SignupConfirm" component={SignupConfirm}/>
            <Screen name="SignIn" component={SignIn}/>
            <Screen name="Home" component={Home}/>
            <Screen name="Appointment" component={Appointment}/>
            <Screen name="Payments" component={Payments}/>
            <Screen name="AddCreditCard" component={AddCreditCard}/>
            <Screen name="AddAddress" component={AddAddress}/>
            <Screen name="Orders" component={Orders}/>
            <Screen name="Search" component={Search}/>
        </Navigator>
    )
}