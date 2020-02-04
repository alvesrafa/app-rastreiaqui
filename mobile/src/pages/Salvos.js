import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Salvos({navigation}){
  useEffect(()=> {
    alert('Em breve!'),
    navigation.navigate('Main')
  }, [])
  return (
    <View>
      <Text style={styles.error}>Retornando a pagina inicial</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    margin: 6
  }
})