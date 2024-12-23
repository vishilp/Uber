import React from "react";
import {View, Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../pages_or_screens/HomeScreen/HomeScreen";

const RootNavigator = () => {
    return(
        <NavigationContainer>
            <HomeScreen/>
        </NavigationContainer>
    )
}

export default RootNavigator