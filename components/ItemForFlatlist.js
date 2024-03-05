import { View, Text, Image } from 'react-native'
import React from 'react'

const ItemForFlatlist = () => {
  return (
    <View>
      <Image 
      style={{width: 150, height:130, margin: 10 }}
      source={require('../assets/img/logocf.png')}/>
    </View>
  )
}

export default ItemForFlatlist