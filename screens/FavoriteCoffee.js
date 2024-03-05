import { View, Text, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ItemListFavoriteCoffee from '../components/ItemListFavoriteCoffee'
import Header from '../components/Header'
import { useState } from 'react'
import { UserInfor } from '../App'


const FavoriteCoffee = ({ navigation }) => {

  const [data, setdata] = useState([])

  const getUserInfor = useContext(UserInfor);
  // console.log(getUserInfor);
  const getDataFavorite = () => {



    const API_PVR = 'http://192.168.1.18:3000/Favoretes' + '?email=' + getUserInfor;

    try {
      fetch(API_PVR)
        .then((res) => res.json())
        .then((res) => {
          setdata(res)
        })
    } catch (ex) {
      console.log(ex)
    }

  }

  useEffect(() => {

    const unSub = navigation.addListener('focus', () => {
      getDataFavorite();
      
    })
    
    return unSub;
  }, [navigation])
  return (
    <View style={{ backgroundColor: '#0C0F14', flex: 1, padding: 8 }}>
      <Header navigation={navigation} title={'Favorite Coffee'} />
      <FlatList

        data={data}
        renderItem={({ item }) => <ItemListFavoriteCoffee getDataFavorite={getDataFavorite} danhSach={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default FavoriteCoffee