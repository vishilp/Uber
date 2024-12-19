import React from "react";
import {View, Text} from "react-native";
import HomeMap from "../../components/HomeMap/HomeMap";
import UberTypes from "../../components/UberTypes/UberTypes";

const OrderScreen = (props) => {
    return(
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <HomeMap/>
            </View>
    
            <View style={{height: 400}}>
                <UberTypes/>
            </View>
        </View>
    )
}

export default OrderScreen