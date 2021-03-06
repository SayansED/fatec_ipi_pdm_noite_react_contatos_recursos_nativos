import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ContatoInput = (props) => {

  const [nome, setNome] = useState ('');
  const [telefone, setTelefone] = useState ('');

  const capturarNome = (nome) => {
      setNome(nome);
  }
  const capturarTelefone = (telefone) => {
      setTelefone(telefone);
  }
  return (
    <View style={estilos.contatoView}>
      <TextInput 
        placeholder="Nome"
        style={estilos.contatoTextInput}
        onChangeText={capturarNome}
        value={nome}        
      />
      <TextInput 
        placeholder="Telefone"
        style={estilos.contatoTextInput}
        onChangeText={capturarTelefone}
        value={telefone}        
      />
      <Button 
        title="Adicionar"
        onPress={() => props.onAdicionarContato(nome, telefone)}
      />
    </View>
  );
};


const estilos = StyleSheet.create({
  contatoView: {
    marginBottom: 12,
  },
  contatoTextInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 8,
    textAlign: 'center'
  }
});

export default ContatoInput;