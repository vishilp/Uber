import React from "react";
import {View, Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../pages_or_screens/HomeScreen/HomeScreen";
import SearchScreen from "../pages_or_screens/SearchScreen/SearchScreen";
import OrderScreen from "../pages_or_screens/OrderScreen/OrderScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <Stack.Screen name = {"Home"} component={HomeScreen}/>
                <Stack.Screen name = {"Search"} component={SearchScreen}/>
                <Stack.Screen name = {"Order"} component={OrderScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator