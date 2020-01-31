import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Box({page, icon, navigation}) {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(page)} style={styles.boxMenu}>

      <MaterialIcons name={icon} size={70} color='#fa983a'/>

    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  boxMenu: {
    width: 150,
    height: 150,
    backgroundColor: '#fad390',
    alignItems:'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20,
  }
})