import React from "react";
import {View, Text, TextInput, SafeAreaView} from "react-native";

import styles from "./styles";

const SearchScreen = (props) => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder="From"/>
                <TextInput style={styles.textInput}placeholder="Where to?"/>
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen