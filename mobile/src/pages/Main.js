import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import api from '../services/api';
 
function Main() {
  const [code, setCode] = useState('');

  async function handleSearch() {
    if(code){
      const response = await api.get(`/rastrear/${code}`);

      alert(response.data)
    }
    alert('nada')
    
    
  }
  return(
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.searchInput}
          placeholder="Código de rastreio"
          placeholderTextColor="#999"
          onChange={setCode}
        />

        <TouchableOpacity 
          style={styles.searchButton}
          onPress={handleSearch}
          >
            <Text>Buscar</Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffeaa7'
  },
  search: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  searchInput: {
    backgroundColor: '#FFF',
    height: 33,
    minWidth: 250,
    margin: 15,
    padding: 7,
    borderWidth: 1,
    borderColor: 'rgba(254, 211, 48,1.0)',
  },
  searchButton: {
    width: 60,
    height: 33,
    backgroundColor: 'rgba(254, 211, 48,1.0)',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: '#999',
  }
})

export default Main;