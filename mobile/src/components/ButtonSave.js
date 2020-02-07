import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import codigos from '../assets/codigos'
export default function ButtonSave({code}){
  
  function saveCode(){
    alert(codigos)
  }

  return(
    <View style={styles.codeBlock}>
      <Text style={styles.code}>Código: {code}</Text>
      <TouchableOpacity style={styles.saveButton} onPress={saveCode}>
        <Text>Salvar código</Text>
      </TouchableOpacity>
    </View>
  
  )
}

const styles = StyleSheet.create({
  codeBlock: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },code: {
    fontWeight: 'bold',
    fontSize: 22,
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