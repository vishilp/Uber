import React from "react";
import {View, Pressable, Text} from "react-native";
import styles from "./styles";
import UberTypeRow from "../UberTypeRow/UberTypeRow";

import typesdata from '../../assets/data/types'


const UberTypes = (props) => {

    const confirm = () => {
        console.warn('confirmed')
    }

    return(
        <View>
            {typesdata.map(type => <UberTypeRow ubertype={type}/>)}

            <Pressable onPress={confirm} style={styles.confirmButton}>
                <Text style={styles.buttonText}>Confirm Uber</Text>
            </Pressable>

        </View>

    )
}

export default UberTypes