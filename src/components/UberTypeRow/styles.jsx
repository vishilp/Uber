import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    
    {
        container:{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20
        },

        image:{
            width: 70,
            height: 70,
            resizeMode: 'contain'
        },

        middleContainer:
        {
            flex: 1,
            marginHorizontal: 10
        },

        vehicleType:{
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 2
        },

        time: {
            color: '#7a7a7a'
        },

        rightContainer: {
            width: 80,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center'
        },

        price: {
            fontWeight: 'bold',
            fontSize: 18,
            marginLeft: 5,
            
        }
    }
)

export default styles