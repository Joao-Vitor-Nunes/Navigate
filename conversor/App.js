import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Dimensions, Picker } from 'react-native';


const { width } = Dimensions.get('window');

export default function App() {
  const [valor, setValor] = useState('');
  const [moeda, setMoeda] = useState('dolar');
  const [direcao, setDirecao] = useState('realParaMoeda');
  const [resultado, setResultado] = useState(null);

  const cotacoes = { 
    dolar: 5.10,
    euro: 5.50,
    guarani: 0.00070,
  };

  const converter = () => {
    const valorNumerico = parseFloat(valor);
    if (!isNaN(valorNumerico)) {
      const cotacao = cotacoes[moeda];
      let convertido = 0;

      if (direcao === 'realParaMoeada') {
        convertido = valorNumerico / cotacao;
      } else {
        convertido = valorNumerico * cotacao;
      }

      setResultado(convertido);
    } else {
      setResultado(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>

      <TextInput
        style={styles.input}
        placeholder={direcao === 'realParaMoeda' ? "R$" : "Valor em moeda estrangeira"}

        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <View style={styles.pickerContainer}>
        <Picker 
          selectedValue={moeda}
          onValueChange={(itemValue) => setMoeda(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Dólar" value="dolar" /> 
          <Picker.Item label="Euro" value="euro" />
          <Picker.Item label="Guarani" value="guarani" />
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker 
          selectedValue={direcao}
          onValueChange={(itemValue) => setDirecao(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Real → Moeda estrangeira" value="realParaMoeda" />
          <Picker.Item label="Moeda estrangeira → Real" value="moedaParaReal" />
        </Picker>
      </View>

      <View style={styles.botaoConverter}>
        <Button title="Converter" onPress={converter} />
      </View>

      {resultado !== null && (
        <Text style={styles.resultado}>
          Resultado:  {resultado.toFixed(2)}
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: width * 0.6,
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  pickerContainer: {
    width: width * 0.6,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  picker: {
    width: '100%',
    height: 50,
  },
  botaoConverter: {
    width: width * 0.6,
    marginTop: 10,
  },
  resultado: {
    marginTop: 30,
    fontSize: 20,
    color: '#007BFF',
    textAlign: 'center',
  },
});
