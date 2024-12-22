import { StyleSheet } from "react-native";

const styles= StyleSheet.create(
    {
        container:{
            padding:10,
            height: '100%',
        },

        textInput:{
            padding:15,
            backgroundColor: "#eee",
            marginVertical: 5,
            fontWeight: '600',
            fontSize: 16,
            marginLeft: 25
        },

        row:{
           flexDirection: 'row',
           alignItems: 'center',
        },
        iconContainer:{
            backgroundColor: '#9e9d9d',
            padding: 5,
            borderRadius: 20,
            marginRight: 10
        },
        locationText:{
            fontWeight: 'bold'
        },

        circle:{
            borderRadius: 10,
            width: 6,
            height: 6,
            backgroundColor: 'black',
            position: 'absolute',
            top: 40,
            left: 15
        },
        line:{
            width: 2,
            height: 50,
            backgroundColor: '#c2bfbf',
            position: 'absolute',
            top: 48,
            left: 17
        },
        square:{
            width: 6,
            height: 6,
            backgroundColor: 'black',
            position: 'absolute',
            top: 100,
            left: 15
        }
    }
)

export default styles