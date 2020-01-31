import React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import Rastreio from './Rastreio';
import {MaterialIcons} from '@expo/vector-icons';

function Objeto({rastreio, isDelivered}) {
  if(isDelivered){
    return(
      <ScrollView>
        <View style={styles.container}>
 
          <Text style={styles.code}>Código de rastreio: {rastreio.code}</Text>

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
        <View style={styles.error}>
          <Text style={styles.code}>Código: {rastreio.code}</Text>
          <Text style={styles.errorStatus}>Código inválido ou ainda não atualizado</Text>
          <Text>Verifique o código e realize uma nova busca. caso o código esteja correto, aguarde algumas horas até que o correios atualize as informações de sua encomenda.</Text>
        </View>
      </View>
    )
  } else if(isDelivered == null){
    return(
      <View style={styles.container}>
        <MaterialIcons name="arrow-upward" size={70} color='#fad390'/>
        <Text>Digite o código de rastrio na caixa acima.</Text>
        <Text>propagandas</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  code: {
    fontWeight: 'bold',
    fontSize: 22,
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
    fontSize: 16,
    marginTop:3,
    marginBottom:3
  }
})
export default Objeto;