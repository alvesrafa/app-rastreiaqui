import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Alert} from 'react-native';
import { salvarCodigo, loadCodigos } from '../assets/store';

export default function ButtonSave({code}){
  
  async function saveCode(){
    
    const codigos = await loadCodigos();

    codigos.push(code)

    salvarCodigo(codigos)

    Alert.alert('Sucesso!', 'Agora seu código ja esta salvo! ")')
    
  }

  return(
    <View style={styles.codeBlock}>
      <Text style={styles.code}>{code}</Text>
      <TouchableOpacity style={styles.saveButton} onPress={saveCode}>
        <Text>Salvar código</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  codeBlock: {
    flexDirection: 'row',
    alignItems:'center',
    flexWrap:'wrap',
    justifyContent:'space-around',
    backgroundColor:'#FFF',
    padding: 15,
    width: '80%',
    borderWidth: 1.6,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRadius: 5,
    marginBottom: 5,
  },code: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  saveButton: {
    backgroundColor:'#6ab04c',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 2,
  }
})