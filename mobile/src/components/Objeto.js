import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet,ScrollView, TouchableOpacity, Alert} from 'react-native';
import Rastreio from './Rastreio';
import {MaterialIcons} from '@expo/vector-icons';
import {AdMobBanner} from 'expo-ads-admob';
import { salvarCodigo, loadCodigos } from '../assets/store';

function Objeto({rastreio, isDelivered}) {

  const [salvo, setSalvo] = useState(false);

  useEffect(() => {
   async function load(){
    let codigos = await loadCodigos();
    setSalvo(codigos.includes(rastreio.code))
   }
   load();
  }, [salvo])

  async function saveCode(){
    
    const codigos = await loadCodigos();

    codigos.push(rastreio.code)

    salvarCodigo(codigos)
    setSalvo(true)
    Alert.alert('Sucesso!', 'Agora seu código ja esta salvo! ")')
    
  }

  if(isDelivered){
    return(
      <ScrollView>
        <View style={styles.container}>

          {
            salvo ? 
            <></>
            : 
            <View style={styles.codeBlock}>
              <Text style={styles.code}>{rastreio.code}</Text>
              <TouchableOpacity style={styles.saveButton} onPress={saveCode}>
                <Text>Salvar código</Text>
              </TouchableOpacity>
            </View> 
          }
          
          
          <View style={styles.objetos}>
            {rastreio.tracks.map((track, key) => (
              <Rastreio key={key} track={track} />
            ))}
          </View>
        
        </View>
      </ScrollView>
    )
  }else if(isDelivered == false){
    return(
      <View style={styles.container}>
        { 
          salvo ? 
          <></> 
          : 
          <View style={styles.codeBlock}>
            <Text style={styles.code}>{rastreio.code}</Text>
            <TouchableOpacity style={styles.saveButton} onPress={saveCode}>
              <Text style={styles.textButton}>Salvar código</Text>
            </TouchableOpacity>
          </View>  
        }
        <View style={styles.error}>
          <Text style={styles.errorStatus}>Código inválido ou ainda não atualizado</Text>

          <Text>Verifique o código e realize uma nova busca. Caso o código esteja correto, aguarde algumas horas até que o correios atualize as informações de sua encomenda.</Text>
        
        </View>
      </View>
    )
  } else if(isDelivered == null){
    return(
      <View style={styles.container}>
        <MaterialIcons name="arrow-upward" size={70} color='#fad390'/>
        <Text>Digite o código de rastreio na caixa de texto acima.</Text>
        <View style={styles.ads}>
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-7133783895498608/5723914796" 
            testDevices={[AdMobBanner.simulatorId]}
            servePersonalizedAds
            onDidFailToReceiveAdWithError={error => console.error(error)} 
          />
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-7133783895498608/6131302428" 
            testDevices={[AdMobBanner.simulatorId]}
            servePersonalizedAds
            onDidFailToReceiveAdWithError={error => console.error(error)}  
          />
          
        </View>
        


      </View>
    )
  }
}
const styles = StyleSheet.create({
  ads: {
    flex:1,
    flexDirection:'column',
  },
  container: {
    flex:1,
    alignItems: 'center'
  },
  objetos: {
    flex:1,
    flexDirection: 'column-reverse',
  },
  error: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 15,
    borderWidth: 1.6,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRadius: 5,
  },
  errorStatus: {
    fontSize: 18,
    marginTop:3,
    marginBottom:3,
    fontWeight: 'bold',
  },
  codeBlock: {
    width: 288,
    padding: 10,
    backgroundColor: '#FFF',
    borderWidth: 1.6,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRadius: 5,
    marginBottom: 7,
  },code: {
    
    flexWrap: 'wrap',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 5
  },
  saveButton: {
    backgroundColor:'#6ab04c',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 2,
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
  }
})
export default Objeto;