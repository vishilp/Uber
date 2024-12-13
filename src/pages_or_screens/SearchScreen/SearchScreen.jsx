import React, {useEffect, useState} from "react";
import {View, Text, TextInput, SafeAreaView} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_API_KEY } from '@env'


import styles from "./styles";

const SearchScreen = (props) => {

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
                    styles={{textInput: styles.textInput}}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'en',
                    }}
                    />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    fetchDetails = {true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setDestinationPlace(value= {data, details})
                    }}
                    styles={{textInput: styles.textInput}}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'en',
                    }}
                    />

            </View>
        </SafeAreaView>
    )
}

export default SearchScreen