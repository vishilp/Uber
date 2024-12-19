import React from "react";
import {View, Text} from "react-native";
import styles from "./styles";
import UberTypeRow from "../UberTypeRow/UberTypeRow";

const UberTypes = (props) => {
    return(
        <View>
            <UberTypeRow/>
            <UberTypeRow/>
            <UberTypeRow/>
        </View>
    )
}

export default UberTypes