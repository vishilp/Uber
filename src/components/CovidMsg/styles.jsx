import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:"#348cf8",
            padding:15,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
        },
        title:{
            color:"white",
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10

        },
        text:{
            color:"#e7e3e3c9",
            fontSize: 16,
            marginBottom: 10,
            marginRight: 70
        },
        learn:{
            color:"white",
            fontSize: 16,
            fontWeight: 'bold',
            
        },
        sign:{
            width:75,
            height:75,
            position: "absolute",
            bottom:5,
            right:20
        }
    }
)

export default styles