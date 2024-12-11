import React from "react";
import {View, Text} from "react-native";

import styles from "./styles";


const CovidMsg = (props) => {
    return(
        <View style= {styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style = {styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sequi repudiandae odio laboriosam id eos inventore in exercitationem beatae aut quis laborum earum, voluptatum illo possimus eum dignissimos natus unde.</Text>
            <Text style = {styles.learn}>Learn More</Text>
        </View>
    )
}

export default CovidMsg