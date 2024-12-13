import React, {useState} from "react";
import {View, Text, TextInput, SafeAreaView} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_API_KEY } from '@env'


import styles from "./styles";

const SearchScreen = (props) => {
    const [fromText, setFromText] = useState('')
    const [destinationText, setDestinationText] = useState('')

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput value = {fromText} onChangeText={setFromText}
                style={styles.textInput} 
                placeholder="From"/>
                <TextInput value = {destinationText} onChangeText={setDestinationText}
                style={styles.textInput}
                placeholder="Where to?"/>

                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
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