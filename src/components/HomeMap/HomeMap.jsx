import React from "react";
import {View, Text, Image} from "react-native";
import  MapView, {Marker} from 'react-native-maps';

const HomeMap = (props) => {
    return(

        <MapView style = {{height: '100%', width: '100%'}}
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}>

            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />

            <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
                        <Image  style={{ width: 20, height: 20, resizeMode: 'contain' }}
                        source={require('../../assets/Car_Images/top-UberX.png')}/>
                    </Marker>

        </MapView>
    )
}

export default HomeMap