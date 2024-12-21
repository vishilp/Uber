import React, {useState} from "react";
import {View, Text, Image, FlatList} from "react-native";
import  MapView, {Marker, MyCustomMarkerView} from 'react-native-maps';

import cars from "../../assets/data/cars";

const RouteMap = (props) => {
    const [region, setRegion] = useState({
            latitude: 28.450627,
            longitude: -16.263045,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
    });

    const getImage= (type) => {
        if (type =='UberX')
            return require("../../assets/Car_Images/top-UberX.png")
        if (type =='Comfort')
            return require("../../assets/Car_Images/top-Comfort.png")
        return require("../../assets/Car_Images/top-UberXL.png")
    }
    
    return(
            <MapView
            style = {{height: '100%', width: '100%'}}
            initialRegion={region}
            region={region}>
            
            </MapView>
            
    )
}

export default RouteMap
