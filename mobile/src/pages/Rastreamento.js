import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import api from '../services/api';
import Objeto from '../components/Objeto';
import Lottie from 'lottie-react-native';
import waiting from '../assets/loading.json';

function Rastreamento({navigation}) {
  const [delivered, setDelivered] = useState(null);
  const [code, setCode] = useState('');
  const [rastreio, setRastreio] = useState({});
  const [loading, setLoading] = useState(null);
 
  useEffect(() => {

    if(navigation.state.params != undefined)
      setCode(navigation.state.params.codigo)

  }, [])

  async function handleSearch() {
    Keyboard.dismiss();
    if(code !== ""){
      setLoading(true)
      setRastreio('')
      setDelivered(false)
      const response = await api.get(`/rastrear/${code}`);
      setRastreio(response.data[0])

      if(!response.data[0].isInvalid)
        setDelivered(true)

      setLoading(false)
    }
    
  }
  return(
    <View style={styles.container}>
      <View style={styles.search}>
       
        <TextInput
          style={styles.searchInput}
          placeholder="Código de rastreio"
          placeholderTextColor="#999"
          onChangeText={setCode}
          autoFocus={true}
          onEndEditing={handleSearch}
          value={code}
        />

        <TouchableOpacity 
          style={styles.searchButton}
          onPress={handleSearch}
          >
            <Text>Buscar</Text>
        </TouchableOpacity>
      </View>

      {loading ?
        <View style={styles.lottie}>
          <Lottie resizeMode="contain" autoSize source={waiting} autoPlay loop/>
        </View> 
        
        : 
        <Objeto rastreio={rastreio} isDelivered={delivered}/>
      }
      
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffeaa7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    flex:1,
    alignItems: 'center'
  },
  search: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  searchInput: {
    backgroundColor: '#FFF',
    height: 35,
    minWidth: 250,
    margin: 15,
    padding: 7,
    fontSize: 22,
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

export default Rastreamento;