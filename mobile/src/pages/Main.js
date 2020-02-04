import React from 'react';
import {View, StyleSheet} from 'react-native';
import Box from '../components/Box';
import {AdMobBanner} from 'expo-ads-admob'
function Main({navigation}) {

  return(
    <>
    
      <View style={styles.container}>
        <Box page="Rastreamento" icon="search" navigation={navigation}/>
        <Box page="Salvos" icon="save" navigation={navigation} />
      </View>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-7133783895498608/7208935598" 
        testDevices={[AdMobBanner.simulatorId]}
        onDidFailToReceiveAdWithError={error => console.error(error)} 
      />
    </>
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