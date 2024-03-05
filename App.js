import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import Login from './screens/Login'
import Register from './screens/Register'
import ItemForFlatlist from './components/ItemForFlatlist'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import FavoriteCoffee from './screens/FavoriteCoffee'
import CartScreen from './screens/CartScreen'
import HistoryScreen from './screens/HistoryScreen'
import CustomIcon from './components/CustomIcon'
import BeanDetails from './screens/BeanDetails'
import CoffeeDetail from './screens/CoffeeDetail'
import Payment from './screens/Payment'
import Setting from './screens/Setting'
import PersonalDetail from './screens/PersonalDetail'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const UserInfor = createContext();

const HomeBottomTab = ({route}) => {
  const { EmailAddress } = route.params;
  return (

    <UserInfor.Provider value={EmailAddress}>

      <Tab.Navigator
        screenOptions={{ tabBarStyle: { backgroundColor: '#0C0F14' } }}
      >

        <Tab.Screen name='Home' component={Home}
          options={{
            headerShown: false,

            tabBarIcon: ({ size, color }) => (

              <CustomIcon
                require={require('./assets/icon/ic_home.png')}
                color={color}
                size={size}
              />
            )

          }}

        />
        <Tab.Screen name='Cart' component={CartScreen}

          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (

              <CustomIcon
                require={require('./assets/icon/ic_shop.png')}
                size={size}
                color={color}
              />
            )

          }}

        />
        <Tab.Screen name='FavoriteCoffee' component={FavoriteCoffee}
          options={{
            headerShown: false,

            tabBarIcon: ({ color, size }) => (

              <CustomIcon
                require={require('./assets/icon/ic_love.png')}
                size={size}
                color={color}
              />
            )
          }}

        />
        <Tab.Screen name='History' component={HistoryScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({ color, size }) => (

              <CustomIcon
                require={require('./assets/icon/ic_bell.png')}
                size={size}
                color={color}
              />
            )

          }}

        />
      </Tab.Navigator>
    </UserInfor.Provider>

  )
};
const App = () => {



  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='Login'

        screenOptions={{ headerShown: false }}
      >
        {/* <FlatList
          data={arr}
          renderItem={ItemForFlatlist}
          horizontal
        /> */}


        <Stack.Screen name='HomeBottomTab' component={HomeBottomTab} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Bean' component={BeanDetails} />
        <Stack.Screen name='CoffeeDetail' component={CoffeeDetail} />
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name='Setting' component={Setting} />
        <Stack.Screen name='PersonalDetail' component={PersonalDetail} />
        <Stack.Screen name='Header' component={Headers} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
