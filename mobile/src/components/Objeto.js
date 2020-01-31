import React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import Rastreio from './Rastreio';

function Objeto({rastreio, isDelivered}) {
  if(isDelivered){
    return(
      <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.code}>Código: {rastreio.code}</Text>
        </View>
        <View>
          {rastreio.tracks.map((track, key) => (
            <Rastreio key={key} track={track} />
          ))}
        </View>
      
      </View>
      </ScrollView>
    )
  }else {
    return(
      <View>
        <View>
          <Text style={styles.code}>Código: {rastreio.code}</Text>
          <Text>Código inválido ou ainda não atualizado</Text>
          <Text>Verifique o código e realize uma nova busca. caso o código esteja correto, aguarde algumas horas até que o correios atualize as informações de sua encomenda.</Text>
        </View>
      </View>
    )
  } 
}
const styles = StyleSheet.create({
  code: {
    fontWeight: 'bold',
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Objeto;