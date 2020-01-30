import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import api from '../services/api';
import Objeto from './components/Objeto';


function Main() {
  const [delivered, setDelivered] = useState(null);
  const [code, setCode] = useState('');
  const [rastreio, setRastreio] = useState({});

  async function handleSearch() {
    if(code !== ""){
      setRastreio('')
      setDelivered(false)
      const response = await api.get(`/rastrear/${code}`);
      setRastreio(response.data[0])

      if(response.data[0].isInvalid){
        setDelivered(false)
      }else {
        setDelivered(true)
      }
      
    }
    
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
      <Objeto rastreio={rastreio} isDelivered={delivered}/>
      
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