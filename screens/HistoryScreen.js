import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const HistoryScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: '#21262E', flex: 1, padding: 8 }}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Setting')}
        >
          <Image
            style={{ height: 30, width: 30 }}
            source={require('../assets/icon/ic_grid.png')}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>
          Oder History
        </Text>
        <Image
          style={{ height: 40, width: 40 }}
          source={require('../assets/icon/profile.png')}
        />
      </View>
      <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
          Oder Date
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
          Total Amount
        </Text>
      </View>
      <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={{ fontSize: 18, color: 'white' }}>
          20Th March 16:23
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#D17842' }}>
          $ 74.40
        </Text>
      </View>
      <FlatList
        style={{ width: '100%' }}

      />
      <TouchableOpacity style={{ with: '100%', height: '10%', borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D17842' }}>
        <Text style={{ fontSize: 20 }}>
          Download
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HistoryScreen