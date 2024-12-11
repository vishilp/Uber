import React from "react";
import {View, Text, Image} from "react-native";

import styles from "./styles";


const CovidMsg = (props) => {
    return(
        <View style= {styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style = {styles.text}>Help flatten the curve. If you must travel, please exercise caution for your safety and the safety of our community.</Text>
            <Text style = {styles.learn}>Learn More  ➡</Text>
            <Image style = {styles.sign} source={require("../../assets/sign.png")} />
        </View>
    )
}

export default CovidMsg