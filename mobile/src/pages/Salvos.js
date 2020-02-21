import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {AdMobBanner} from 'expo-ads-admob';
import { salvarCodigo, loadCodigos } from '../assets/store';

export default function Salvos({navigation}){
  const [codes, setCodes] = useState([])
  useEffect(()=> {
    load();
  }, [])
  async function load(){
    const codigos = await loadCodigos();
    setCodes(codigos)
  }
  function verificar(code){
    navigation.navigate('Rastreamento', {codigo: code})
  }
  function deletar(codigo){
    Alert.alert(
      'Deletar código salvo?',
      'Você tem certeza que deseja deletar o codigo ' + codigo + '?',
      [
        
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelado'),
          style: 'cancel',
        },
        { text: 'Sim, tenho certeza!', onPress: () => {
          {
            let codigos = codes;
            codigos.splice(codigos.indexOf(codigo), 1);
            salvarCodigo(codigos);
            load()
          }
        } },
      ],
      { cancelable: false }
    );
    
  }
  return (
    <>
    <ScrollView style={styles.container}>
      
      {codes.length != 0 ? codes.map((code, id) => (
        <View key={id} style={styles.card}>
          <Text style={{fontSize: 16}}>{code}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => verificar(code)} style={styles.buttonVerify}>
              <Text style={styles.buttonText}>Verificar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deletar(code)} style={styles.buttonDelete}>
              <Text style={styles.buttonText}> X </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      )) : (
        <View style={styles.card}>
          <Text style={styles.buttonText}>Você ainda não possui códigos salvos</Text>
        </View>
        
      )}
      
    
    </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor:'#ffeaa7',
    paddingBottom: 10,
  },
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFF',
    padding: 10,
    paddingRight: 2,
    borderWidth: 1.6,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRadius: 5,
    marginBottom: 7,
    alignItems: 'center'
  },
  buttons: {
    width: '50%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around'

  },
  buttonVerify: {
    backgroundColor: '#2ecc71',
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 7,
    paddingLeft: 7,
    borderRadius: 3,
  },
  buttonDelete: {
    backgroundColor: 'red',
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 3,
  },
  buttonText: {
    color: '#000',
    fontSize: 18
  }
})