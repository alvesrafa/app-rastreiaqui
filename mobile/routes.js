import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Rastreamento from './src/pages/Rastreamento';
import Main from './src/pages/Main';
import Salvos from './src/pages/Salvos';

const Routes = createAppContainer(
  createStackNavigator({
    
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'RastreiAqui'
      }
    },
    Salvos: {
      screen: Salvos,
      navigationOptions: {
        title: 'Encomendas salvas'
      }
    },
    Rastreamento: {
        screen: Rastreamento,
        navigationOptions: {
          title: 'Rastreamento de objetos'
        }
      }
    }, {
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#f9ca24',

      }
    }
  })
)

export default Routes;
