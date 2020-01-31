import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Rastreio({track}) {
  function dataFormatada(date){
      var data = new Date(date),
          dia  = data.getDate().toString().padStart(2, '0'),
          mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
          ano  = data.getFullYear(),
          hora = data.getHours(),
          minuto = (data.getMinutes() < 10) ? '0' + data.getMinutes().toString() : data.getMinutes().toString()
      return dia + "/" + mes + "/" + ano + " às " + hora + "h" + minuto;
  }
  return (
      <View style={styles.objeto}>
          <View style={styles.dataBlock}>
              <Text style={styles.data}>{dataFormatada(track.trackedAt)}</Text>  
              <Text style={styles.local}>{track.locale}</Text>
          </View>
          <View style={styles.obsBlock}>
              <Text style={styles.status}>{track.status}</Text>
              <Text style={styles.obs}>{track.observation}</Text>
          </View>
          
      </View>
  );
}
const styles = StyleSheet.create({
    objeto: {
        backgroundColor: '#FFF',
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 1.6,
        borderRadius: 2,
        borderColor: '#ddd',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRadius: 5,
    },
    dataBlock: {
        flexGrow: 0,
        width: '20%',
        justifyContent: 'center',
    },
    obsBlock: {
        flexGrow: 1,
        maxWidth: '75%',
        marginLeft: 10,
        justifyContent: 'center',

    },
    data: {
        marginBottom: 3,

    },
    local: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    status: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        marginBottom: 3,
        
    },
    obs: {
        textTransform: 'capitalize',
    },

})