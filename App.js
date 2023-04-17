import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {styles} from "./style/Styles";
import Botao from "./components/Botao";
import './components/Global';
import {useState} from "react";

export default function App() {

    const [equation, setEquation] = useState('');
    return (
   <>
       <View style={styles.containerTop}>
           <Text style={styles.texto}>{equation}</Text>
       </View>
      <View style={styles.container}>
          <Botao setEquation={setEquation} label={'0'} variant={'0'}></Botao>
          <Botao setEquation={setEquation} label={'.'}></Botao>
          <Botao setEquation={setEquation} label={'='} variant={'secondary'} Tvariant={'textoS'}></Botao>
          <Botao setEquation={setEquation} label={'1'}></Botao>
          <Botao setEquation={setEquation} label={'2'}></Botao>
          <Botao setEquation={setEquation} label={'3'}></Botao>
          <Botao setEquation={setEquation} label={'+'} variant={'secondary'} Tvariant={'textoS'}></Botao>
          <Botao setEquation={setEquation} label={'4'}></Botao>
          <Botao setEquation={setEquation} label={'5'}></Botao>
          <Botao setEquation={setEquation} label={'6'}></Botao>
          <Botao setEquation={setEquation} label={'-'} variant={'secondary'} Tvariant={'textoS'}></Botao>
          <Botao setEquation={setEquation} label={'7'}></Botao>
          <Botao setEquation={setEquation} label={'8'}></Botao>
          <Botao setEquation={setEquation} label={'9'}></Botao>
          <Botao setEquation={setEquation} label={'x'}  variant={'secondary'} Tvariant={'textoS'}></Botao>
          <Botao setEquation={setEquation} label={'AC'} variant={'ternary'} Tvariant={'AC'}></Botao>
          <Botao setEquation={setEquation} label={'±'}  variant={'ternary'} Tvariant={'textoS'}></Botao>
          <Botao setEquation={setEquation} label={'%'}  variant={'ternary'} Tvariant={'textoS'}></Botao>
          <Botao setEquation={setEquation} label={'÷'}  variant={'ternary'} Tvariant={'textoS'}></Botao>
      </View>
    </>
  );
}

