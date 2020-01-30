import {View} from 'react-native';

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
      <View>
          <View>
              <View>{dataFormatada(track.trackedAt)}</View>  
              <View>{track.locale}</View>
          </View>
          <View>
              <h4>{track.status}</h4>
              <p>{track.observation}</p>
          </View>
          
      </View>
  );
}
