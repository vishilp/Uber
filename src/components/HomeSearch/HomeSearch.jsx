import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const HomeSearch = (props) => {
  return (
    <View>
      <View style= {styles.inputBox}>
        <Text style= {styles.inputText}>Where To?</Text>
        <View style = {styles.timeContainer}>
          <AntDesign name={"clockcircle"} size= {16} color = "#3f3f3f"/>
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size= {20}/>
        </View>
      </View>

    </View>
  );
};
export default HomeSearch