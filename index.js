/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BeanDetails from './screens/BeanDetails';
import CoffeeDetail from './screens/CoffeeDetail';
import CartScreen from './screens/CartScreen';
import Payment from './screens/Payment';
import ItemListFavoriteCoffee from './components/ItemListFavoriteCoffee';
import FavoriteCoffee from './screens/FavoriteCoffee';
import ItemListCartFirst from './components/ItemListCartFirst';
import ItemListCartSecond from './components/ItemListCartSecond';
import HistoryScreen from './screens/HistoryScreen';
import Setting from './screens/Setting';
import PersonalDetail from './screens/PersonalDetail';
import { Screen } from 'react-native-screens';

AppRegistry.registerComponent(appName, () => App);
