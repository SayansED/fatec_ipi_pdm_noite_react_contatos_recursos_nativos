import React, { useState } from  'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import ContatoItem from '../componentes/ContatoItem';
import ContatoInput from '../componentes/ContatoInput';

const NovoLugarTela = (props) => {

    const[contatos, setContatos] = useState ([]);
    const[contadorContatos, setContadorContatos] = useState(10);
  
    const adicionarContato = (contato, telefone) => {
      setContatos(contatos => {
          setContadorContatos(contadorContatos + 2);
          return [...contatos, {key: contadorContatos.toString(), nome: contato, telefone: telefone}]
      });
    }
  
    const removerContato = (keyASerRemovida) =>{
      setContatos(contatos => {
        return contatos.filter((contato) => {
           return contato.key !== keyASerRemovida
        })
      });
    }

    return (
        <View style={styles.telaPrincipalView}>
        <ContatoInput onAdicionarContato={adicionarContato}/>
        <Text style={styles.titulo}>Lista de contatos: </Text>
            <FlatList 
            data={contatos}
            renderItem={
                (contato) => (
                <ContatoItem
                    chave={contato.item.key} 
                    contato={contato.item.key + ' - ' + contato.item.nome + ' - ' + contato.item.telefone} 
                    onDelete={removerContato}
                />
                )
            }
            />      
        </View>
    );
};

const styles = StyleSheet.create ({
    form: {
        marginHorizontal: 40,
        marginTop: 20
    },
    titulo: {
        fontSize: 18,
        marginBottom: 16,
        textAlign: 'center'
    },
    textInput: {
        borderBottomColor: "#DDD",
        borderBottomWidth: 2,
        marginBottom: 8,
        padding: 12
    }
});

export default NovoLugarTela;