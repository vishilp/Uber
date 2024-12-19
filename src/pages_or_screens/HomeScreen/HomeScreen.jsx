import React from "react";
import {View, Text} from "react-native";

import HomeMap from "../../components/HomeMap/HomeMap";
import CovidMsg from "../../components/CovidMsg/CovidMsg";
import HomeSearch from "../../components/HomeSearch/HomeSearch";

const HomeScreen = (props) => {
    return(
        <View style= {{flex:1}}>
            <View style = {{flex:1}}>
                <HomeMap/>
            </View>
            <CovidMsg/>
            <HomeSearch/>
        </View>
    )
}

export default HomeScreen