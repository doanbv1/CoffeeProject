import { View, Text, TouchableOpacity, Image, Button, Alert} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const ItemListBean = ({item, getUserInfor}) => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#EEEEEE', '#CCCCCC', '#444444']} style={{ width: 170, height: 290, marginRight: 10, borderRadius: 23 }}>
    <View style={{ width: '100%', paddingTop: 10}}>

      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{ width: 140, height: 140  ,borderRadius: 20}}
          source={{uri:item.img}}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', position: 'absolute', top: 0, right: 30}}>
          <Image style={{ width: 10, height: 10 }} source={require('../assets/icon/ic_star.png')} />
          <Text style={{ color: '#fff' }} >{item.star}</Text>
        </View>

      </View>

    </View>
    <Text style={{ marginTop: 8, color: 'white', fontWeight: 'bold', fontSize: 23, marginHorizontal: 15 }}>{item.name} </Text>
    <Text style={{ marginTop: 1, color: 'white', fontSize: 13, marginHorizontal: 15}}>{item.topping} </Text>
    <View style={{
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 8,
      alignItemsc: 'center',
      marginHorizontal:'5%'
      
    }}>
      <Text style={{
        fontSize: 20,
        lineHeight: 28,
        fontWeight: 'bold'
      }}> $ {item.price}</Text>
      <TouchableOpacity
        onPress={() => {
          const id = item.id;
          const name = item.name;
          const star = item.star;
          const description = item.description;
          const img = item.img; 
          navigation.navigate('Bean',{id,name,star,description, img, getUserInfor})
        }}
        style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: '#D17842', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>+</Text>
      </TouchableOpacity>
    </View>
  </LinearGradient>

  )
}

export default ItemListBean