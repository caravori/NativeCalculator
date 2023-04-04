import {Text, TouchableOpacity} from "react-native";
import {styles} from "../style/Styles";


export default Botao = ({label, action}) =>{
    return(
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}