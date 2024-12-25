import React from "react";
import {View, Text} from "react-native";
import UberTypes from "../../components/UberTypes/UberTypes";
import RouteMap from "../../components/RouteMap/RouteMap";

import { useRoute } from "@react-navigation/native";

const OrderScreen = (props) => {
    const route = useRoute();
    console.log(route.params)
    
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