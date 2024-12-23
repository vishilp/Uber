import React from "react"
import { View, Text } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import styles from "./styles"


const PlaceRow = ({data}) => {

    const renderIcon = (data) => {
        if (data.description == 'Home'){
            return(<Entypo name='home' size = {20} color = {'white'} back/>)
        }
        else if (data.description == 'Work')
            return(<Entypo name='briefcase' size = {20} color = {'white'} back/>)
        else 
            return(<Entypo name='location-pin' size = {20} color = {'white'}/>)
    }
    
    return(
        <View style={styles.row}>
            <View style= {styles.iconContainer}>
                {renderIcon(data=data)}
            </View>
            <Text style={styles.locationText}>
                {data.description || data.name}
            </Text>
        </View>
    )
}

export default PlaceRow