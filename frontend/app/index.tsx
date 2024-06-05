import { SafeAreaView, TextInput, Button, Text, StyleSheet, View, Image, LogBox  } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import React, { useState } from 'react';
import { buscarCep } from './services/correiosServices';
import {DadosCep} from './types/DadosCep'

export default function Page() {
  
const [cep, setCep] = useState('');
  const [dadosCep, setDadosCep] = useState<DadosCep | null>(null);
  const [erro, setErro] = useState('');

  const handleBuscarCep = async () => {
    try {
      const dados = await buscarCep(cep);
      setDadosCep(dados);
      setErro('');
    } catch (error) {
      setErro('Erro ao buscar CEP');
      setDadosCep(null);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/lupa.png")}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Encontra Cep</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />
      <Button title="Buscar CEP" onPress={handleBuscarCep} />
      {erro ? <Text style={styles.error}>{erro}</Text> : null}
      {dadosCep && (
        <View style={styles.result}>
          <Text>CEP: {dadosCep.cep}</Text>
          <Text>Logradouro: {dadosCep.logradouro}</Text>
          <Text>Bairro: {dadosCep.bairro}</Text>
          <Text>Cidade: {dadosCep.localidade}</Text>
          <Text>Estado: {dadosCep.uf}</Text>
        </View>
      )}
      <View>
      <Text style={styles.rodape}>Turma: Sistemas para internet P5A - noturno {'\n'}{'\n'}Grupo: Lucas Soares Kirchesch - Matheus Alcantara - Jose Gomes - Luciano Lira - Alexander Dore - Rafhael Matias  </Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: "#F3F3FF",
    alignItems: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginTop: 8,
  },
  result: {
    marginTop: 16,
  },
  logo: {
    marginBottom: 40
  },
  titulo:{
    marginBottom: 30,
    fontSize:30,
    fontWeight:"600"
  },
  rodape:{
    marginTop:50,
    fontWeight:"600"
  }

})
