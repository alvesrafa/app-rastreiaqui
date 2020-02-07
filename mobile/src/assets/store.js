import { AsyncStorage } from 'react-native';
 
export const salvarCodigo = (codigos) => {
  AsyncStorage.setItem('CODIGOS', JSON.stringify(codigos));
  // AsyncStorage.multiSet(settings)
   
}
 
export const removerCodigo = (codigos) => {
  AsyncStorage.removeItem('CODIGOS');
}
 
const DEFAULT = {
  "codigos": [{}],
};
 
export const loadCodigos = async () => {
  try {
    let codigos = await AsyncStorage.getItem('CODIGOS');
 
    if (codigos === null) { return DEFAULT; }
 
    return JSON.parse(codigos);
  } catch (error) {
    alert('Error loading codigos', error);
  }
}