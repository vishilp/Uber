import React from "react";
import {View, Text} from "react-native";
import UberTypes from "../../components/UberTypes/UberTypes";
import RouteMap from "../../components/RouteMap/RouteMap";

const OrderScreen = (props) => {
    return(
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <RouteMap/>
            </View>
    
            <View style={{height: 400}}>
                <UberTypes/>
            </View>
        </View>
    )
}

export default OrderScreen