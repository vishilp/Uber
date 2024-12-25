import React from 'react';
import { View, Text, Pressable} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const HomeSearch = (props) => {

  const navigation = useNavigation();

  const goToSearchScreen = () =>{
    navigation.navigate('Search')
  }

  return (
    <View>
        {/* Search bar */}
      <Pressable style= {styles.inputBox} onPress = {goToSearchScreen}>
        <Text style= {styles.inputText}>Where To?</Text>
        <View style = {styles.timeContainer}>
          <AntDesign name={"clockcircle"} marginTop ={2} size= {16} color = "#3f3f3f"/>
          <Text marginLeft = {5}>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size= {20} />
        </View>
      </Pressable>

      {/* Prev dest */}
      <View style={styles.row}>
        {/* the circle wrapping the icons */}
            <View style={styles.iconContainer}> 
                <AntDesign name={"clockcircle"} size= {24} color = "#ffffff"/>
            </View>
            <Text style={styles.destinationText}>Dave's Hot Chicken</Text>
        </View>

        {/* Home Icon */}
        <View style={styles.row}>
            <View style={[styles.iconContainer, {backgroundColor: "#3685df"}]}>
                <Entypo name={"home"} size= {24} color = "#ffffff"/>
            </View>
            <Text style={styles.destinationText}>Home</Text>
        </View>

    </View>
  );
};
export default HomeSearch