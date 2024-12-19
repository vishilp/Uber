import React from "react";
import {View, Text, Image} from "react-native"
import styles from "./styles";

import Ionicons from "react-native-vector-icons/Ionicons"

const UberTypeRow = (props) => {
    const {ubertype} = props

    const getImage= () => {
        if (ubertype.type =='UberX')
            return require("../../assets/Car_Images/UberX.jpeg")
        if (ubertype.type =='Comfort')
            return require("../../assets/Car_Images/Comfort.jpeg")
        return require("../../assets/Car_Images/UberXL.jpeg")
    }

    return(
        <View style= {styles.container}>
            <Image style={styles.image} 
            source={getImage()}/>

            <View style= {styles.middleContainer}>
                <Text style= {styles.vehicleType}>{ubertype.type} {' '}
                    <Ionicons name = {'person'} size = {14} />
                    3
                </Text>
                <Text style={styles.time}>8:03PM dropoff</Text>
                
            </View>

            <View style= {styles.rightContainer}>
                <Ionicons name = {'pricetag'} size = {18} color = {'#39961c'}/>
                <Text style= {styles.price}>est. ${ubertype.price}</Text>
            </View>
        </View>
    )
}

export default UberTypeRow