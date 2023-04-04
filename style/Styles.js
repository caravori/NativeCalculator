import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"row",
        flexWrap: 'wrap-reverse',
        alignSelf:'flex-start',
        backgroundColor: 'white',
    },
    texto: {
        fontSize: 80,
        fontFamily: 'Roboto',
        color: 'black',
    },
    botao: {
        width: Dimensions.get('window').width/4,
        height: Dimensions.get('window').width/4,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'red',
        borderRadius: Dimensions.get('window').width/10,
    }
});