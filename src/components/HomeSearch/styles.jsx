import { StyleSheet } from "react-native";

const styles= StyleSheet.create(
    {
        inputBox:{
            backgroundColor: "#e0dede",
            padding:10,
            margin:10,
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        inputText:{
            fontSize:20,
            fontWeight:'600',
            color: "#7e7d7d"
        },
        timeContainer:{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
            backgroundColor:"#ffffff",
            padding: 8,
            borderRadius: 50
        },

        row:{
            flexDirection: 'row',
            padding:15,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: "#dfdddd"
        },
        iconContainer:{
            backgroundColor: "#918d8d",
            padding: 8,
            borderRadius:30
        },
        destinationText:{
            marginLeft: 10,
            fontWeight:'500',
            fontSize: 16
        }

    }
)

export default styles