import React from "react";
import {View, Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./home";
import {createDrawerNavigator} from "@react-navigation/drawer"
import HomeScreen from "../pages_or_screens/HomeScreen/HomeScreen";

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
    return(
        <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator