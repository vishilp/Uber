import React, {useEffect, useState} from "react";
import {View, Text, TextInput, SafeAreaView} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from "./PlaceRow";

import { GOOGLE_API_KEY } from '@env'
import styles from "./styles";

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

const SearchScreen = (props) => {
    navigator.geolocation = require('react-native-geolocation-service')
    
    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)

    useEffect( () => {
        if (originPlace && destinationPlace){
            console.warn('Redirect to results')
        }
    }, [originPlace, destinationPlace])


    return(
        <SafeAreaView>
            <View style={styles.container}>
                
                <GooglePlacesAutocomplete
                    placeholder='From'
                    fetchDetails = {true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setOriginPlace(value= {data, details})
                    }}
                    enablePoweredByContainer = {false}
                    styles={{textInput: styles.textInput, 
                        container:{
                            position: 'absolute',
                            top: 20,
                            left: 10, 
                            right: 10
                        },
                        listView:{
                            position: 'absolute',
                            top: 105
                        }}}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'en',
                    }}
                    renderRow={(data)=> <PlaceRow data = {data}/>}
                    renderDescription={(data)=> data.description || data.vicinity}
                    currentLocation = {true}
                    currentLocationLabel="Current Location"
                    predefinedPlaces={[homePlace, workPlace]}
                    />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    fetchDetails = {true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setDestinationPlace(value= {data, details})
                    }}
                    enablePoweredByContainer = {false}
                    styles={{textInput: styles.textInput, 
                        container:{
                            position: 'absolute',
                            top: 75,
                            left: 10, 
                            right: 10
                        }}}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'en',
                    }}
                    renderRow={(data)=> <PlaceRow data = {data}/>}
                    predefinedPlaces={[homePlace, workPlace]}
                    />
                {/* top left black design*/}
                <View style= {styles.circle}/>
                <View style= {styles.line}/>
                <View style= {styles.square}/>
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen