import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import Orders from "../../pages/Orders";
import Search from "../../pages/Search";
import Payments from "../../pages/Payments";

const Tab = createBottomTabNavigator();

export default function AppTabs(){
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Payments" component={Payments} />
    </Tab.Navigator>
}