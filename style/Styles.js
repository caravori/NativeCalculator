import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"row",
        flexWrap: 'wrap-reverse',
        alignSelf:'flex-start',
        backgroundColor: 'white',
    },
    containerTop: {
        flex:1,
        flexWrap: 'wrap',
        alignSelf:'flex-end',
        backgroundColor: 'white',
        marginTop: '50%',
    },
    texto: {
        fontSize: 70,
        fontFamily: 'Roboto',
        color: 'black',
    },
    texto_AC: {
        fontSize: 50,
        fontFamily: 'Roboto',
        color: 'black',
    },
    botao: {
        margin:5,
        width: Dimensions.get('window').width/5 + 10,
        height: Dimensions.get('window').width/4,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'red',
        borderRadius: Dimensions.get('window').width/20,
    },
    botao_0: {
        margin:5,
        width: Dimensions.get('window').width/5 *2 +30,
        height: Dimensions.get('window').width/4,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'red',
        borderRadius: Dimensions.get('window').width/20,
    }
});