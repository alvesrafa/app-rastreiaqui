import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { loadCodigos } from '../assets/store';

export default function Salvos({navigation}){
  const [codes, setCodes] = useState([])
  useEffect(()=> {
    async function load() {
      const codigos = await loadCodigos();
      console.log(codigos)
    }
    load();

  }, [])
  return (
    <View>
      
        <Text>
          teste
        </Text>
 
    </View>
  )
}
const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    margin: 6
  }
})