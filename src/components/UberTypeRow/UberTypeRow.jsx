import React from "react";
import {View, Text, Image} from "react-native"
import styles from "./styles";

import Ionicons from "react-native-vector-icons/Ionicons"

const UberTypeRow = () => {
    return(
        <View style= {styles.container}>
            <Image style={styles.image} 
            source={require("../../assets/Car_Images/UberX.jpeg")}/>

            <View style= {styles.middleContainer}>
                <Text style= {styles.vehicleType}>UberX
                    <Ionicons name = {'person'} size = {12} />
                    3
                </Text>
                <Text style={styles.time}>8:03PM dropoff</Text>
                
            </View>

            <View style= {styles.rightContainer}>
                <Ionicons name = {'pricetag'} size = {18} color = {'green'}/>
                <Text style= {styles.price}>est. $27</Text>
            </View>
        </View>
    )
}

export default UberTypeRow