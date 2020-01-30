import {View, Text} from 'react-native';
import Rastreio from './Rastreio';

function Objeto({rastreio, isDelivered}) {
  if(isDelivered){
    return(
      <View>
        <View>
          <Text>Código: {rastreio.code}</Text>
        </View>
        <View>
          {rastreio.tracks.map((track, key) => (
            <Rastreio key={key} track={track} />
          ))}
        </View>
      
      </View>
      
    )
  }else {
    return(
      <View>
        <View>
          <Text>Código: {rastreio.code}</Text>
          <Text>Código inválido ou ainda não atualizado</Text>
          <Text>Verifique o código e realize uma nova busca. caso o código esteja correto, aguarde algumas horas até que o correios atualize as informações de sua encomenda.</Text>
        </View>
      </View>
    )
  } 
}

export default Objeto;