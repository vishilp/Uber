import React from "react";
import {View, Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigator from "./home";


const RootNavigator = () => {
    return(
        <NavigationContainer>
            <HomeNavigator/>
        </NavigationContainer>
    )
}

export default RootNavigator