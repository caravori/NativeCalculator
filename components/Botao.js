import 'react';
import {Text, TouchableOpacity} from "react-native";
import {styles} from "../style/Styles";
import {useState} from "react";

function isNumeric(num){
    return !isNaN(num)
}

let flag_point = true;
let flag_operator = true;
let eq = '';


export default Botao = ({label, setEquation, variant="default", Tvariant = 'default'}) =>{

    function absorv(label ,setEquation){
        if (eq === '' && label === '0')  eq = eq + '0';
        else if (isNumeric(label)) { eq =  eq+label; flag_operator = true;}
        else if (label === 'AC') eq = '';
        else if (label === '+' && flag_operator) {eq = eq+'+'; flag_operator = false; flag_point = true;}
        else if (label === '-' && flag_operator) {eq = eq+'-'; flag_operator = false; flag_point = true;}
        else if (label === 'x' && flag_operator) {eq = eq+'*'; flag_operator = false; flag_point = true;}
        else if (label === '÷' && flag_operator) {eq = eq+'/'; flag_operator = false; flag_point = true;}
        else if (label === '±') eq = eq+'*(-1)';
        else if (label === '.' && flag_point){eq = eq+'.'; flag_point = false;}
        else if (label === '%') eq = eq+'*(1/100)';
        else if (label === '=') eq = eval(eq);
        setEquation(eq);

    }

    return(
        <TouchableOpacity style={variant === 'default'? styles.botao : variant === '0'? styles.botao_0: variant==='secondary'? styles.secondary: styles.ternary } onPress={()=> absorv(label,setEquation)}>
            <Text style={Tvariant === 'default'? styles.texto: Tvariant ==='AC'? styles.texto_AC : styles.textoS  }>
                {label}
            </Text>
        </TouchableOpacity>
    )
}