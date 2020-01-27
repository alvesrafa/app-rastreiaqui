import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/pages/Main';

const Routes = createAppContainer(
  createStackNavigator({

      Main: {
        screen: Main,
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
