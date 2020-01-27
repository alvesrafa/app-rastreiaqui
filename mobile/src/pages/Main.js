import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
 
function Main() {
  const [code, setCode] = useState('');

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        onChange={text => setCode(text)}
        value={code}
      />
      <Text>Main</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffeaa7'
  },
  search: {
    backgroundColor: '#FFF',
    height: 40,
    width: 250,
    margin: 15
  }
})

export default Main;