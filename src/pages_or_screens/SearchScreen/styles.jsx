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
        }
    }
)

export default styles