import React from "react"
import { View, Text } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import styles from "./styles"


const PlaceRow = ({data}) => {
    
    return(
        <View style={styles.row}>
            <View style= {styles.iconContainer}>
                <Entypo name='location-pin' size = {20} color = {'white'}/>
            </View>
            <Text style={styles.locationText}>
                {data.description}
            </Text>
        </View>
    )
}

export default PlaceRow