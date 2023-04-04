import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {styles} from "./style/Styles";
import Botao from "./components/Botao";
import Teclado from "./components/Teclado";
export default function App() {
  return (
   <>
      <View style={styles.container}>
          <Teclado></Teclado>
      </View>
    </>
  );
}

