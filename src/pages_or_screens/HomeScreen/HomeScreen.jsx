import React from "react";
import {View, Text} from "react-native";

import HomeMap from "../../components/HomeMap/HomeMap";
import CovidMsg from "../../components/CovidMsg/CovidMsg";

const HomeScreen = (props) => {
    return(
        <View>
            <HomeMap/>
            <CovidMsg/>
        </View>
    )
}

export default HomeScreen