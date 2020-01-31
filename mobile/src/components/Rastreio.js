import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Rastreio({track}) {
  function dataFormatada(date){
      var data = new Date(date),
          dia  = data.getDate().toString().padStart(2, '0'),
          mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
          ano  = data.getFullYear(),
          hora = data.getHours(),
          minuto = data.getMinutes();
      return dia + "/" + mes + "/" + ano + " às " + hora + ":" + minuto;
  }
  return (
      <View style={styles.objeto}>
          <View>
              <Text>{dataFormatada(track.trackedAt)}</Text>  
              <Text>{track.locale}</Text>
          </View>
          <View>
              <Text>{track.status}</Text>
              <Text>{track.observation}</Text>
          </View>
          
      </View>
  );
}
const styles = StyleSheet.create({
    objeto: {
        backgroundColor: '#FFF',
        margin: 5,
        padding: 7,
    }

})