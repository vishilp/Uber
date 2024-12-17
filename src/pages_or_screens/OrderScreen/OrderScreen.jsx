import React from "react";
import {View, Text} from "react-native";
import HomeMap from "../../components/HomeMap/HomeMap";
import UberTypes from "../../components/UberTypes/UberTypes";

const OrderScreen = (props) => {
    return(
        <View>
            <HomeMap/>
            <UberTypes/>
        </View>
    )
}

export default OrderScreen