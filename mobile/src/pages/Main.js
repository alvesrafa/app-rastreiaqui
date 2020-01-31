import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Box from '../components/Box';

function Main({navigation}) {

  return(
    <View style={styles.container}>
      <Box page="Rastreamento" icon="search" navigation={navigation}/>
      <Box page="Salvos" icon="save" navigation={navigation} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffeaa7',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default Main;