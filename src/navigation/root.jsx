import React from "react";
import {View, Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./home";
import {createDrawerNavigator} from "@react-navigation/drawer"

const Drawer = createDrawerNavigator();

const MyDrawer = createDrawerNavigator();

const RootNavigator = () => {
    return(
        <NavigationContainer>
            <MyDrawer.Navigator>
                <MyDrawer.Screen name="Home" component={HomeNavigator}/>
            </MyDrawer.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator