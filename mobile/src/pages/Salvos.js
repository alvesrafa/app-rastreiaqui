import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { loadCodigos } from '../assets/store';
import {AdMobBanner} from 'expo-ads-admob';

export default function Salvos({navigation}){
  const [codes, setCodes] = useState([])
  useEffect(()=> {
    async function mostrar(){
      const codigos = await loadCodigos();
      setCodes(codigos)
    }
    mostrar();

  }, [])
  return (
    <>
    <ScrollView style={styles.container}>
      
      {codes ? codes.map((code, id) => (
        <View key={id} style={styles.card}>
          <Text style={{fontSize: 18}}>{code}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonVerify}>
              <Text style={styles.buttonText}>Verificar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      )) : (
        <View style={styles.card}>
          <Text style={styles.buttonText}>Você ainda não possui códigos salvos</Text>
        </View>
        
      )}
    </ScrollView>
    <AdMobBanner
    style={styles.bottomBanner}
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-7133783895498608/7208935598" 
      testDevices={[AdMobBanner.simulatorId]}
      servePersonalizedAds
      onDidFailToReceiveAdWithError={error => console.error(error)} 
    />
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
    color: '#ecf0f1',
    fontSize: 18
  }
})