import React, {useState} from "react";
import {View, Text, Image, FlatList} from "react-native";
import  MapView, {Marker, MyCustomMarkerView} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from '@env'

import cars from "../../assets/data/cars";

const RouteMap = (props) => {
    const [region, setRegion] = useState({
            latitude: 28.450627,
            longitude: -16.263045,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
    });

    const origin = {latitude: 28.450627, longitude: -16.263045}
    const destination = {latitude: 28.450127, longitude: -16.269045}

    return(
            <MapView
            style = {{height: '100%', width: '100%'}}
            initialRegion={region}
            region={region}>
                
                <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_API_KEY}
                strokeWidth = {3}
                strokeColor = 'black'/>
                <Marker coordinate={origin} title = {'origin'}/>
                <Marker coordinate={destination} title = {'destination'}/>
            </MapView>
            
    )
}

export default RouteMap
