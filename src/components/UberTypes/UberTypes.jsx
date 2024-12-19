import React from "react";
import {View, Text} from "react-native";
import styles from "./styles";
import UberTypeRow from "../UberTypeRow/UberTypeRow";

import typesdata from '../../assets/data/types'

const UberTypes = (props) => {
    return(
        <View>
            {typesdata.map(type => <UberTypeRow ubertype={type}/>)}
        </View>
    )
}

export default UberTypes