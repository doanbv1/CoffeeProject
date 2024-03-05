import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';

const ItemListCartSecond = ({ item, totalPrice }) => {
  const [quantity, setquantity] = useState(item.quantityandPrice[0].quantity);

  console.log(item);

  
  const handleTotalPrice = () => {
    totalPrice();
  }
  return (
    <View style={{ width: '100%' }}>
      <View style={{ width: '100%', height: 155, borderWidth: 1, backgroundColor: '#262B33', borderRadius: 23, padding: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={{ width: '30%', height: '100%', justifyContent: 'center', marginHorizontal: 5 }}>
            <Image
              style={{ width: 115, height: 115, borderRadius: 10 }}
              source={require('../assets/img/cup_Coffee.png')}
            />

          </View>

          <View style={{ width: '65%', height: '100%', justifyContent: 'space-evenly' }}>
            <View>
              <Text style={{ fontSize: 18, fontWeight: '500', color: '#FFFFFF' }}>
                {item.name}
              </Text>
              <Text style={{ color: '#AEAEAE', fontSize: 10, fontWeight: '400' }}>
                With Steamed Milk
              </Text>
            </View>

            <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity style={{ width: 72, height: 35, backgroundColor: '#0C0F14', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#FFFFFF', fontWeight: '500', fontSize: 16 }}>
                  {item.quantityandPrice[0].size}
                </Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#D17842' }}>
                  $
                </Text>
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>
                  {item.quantityandPrice[0].price * item.quantityandPrice[0].quantity}

                </Text>
              </View>
            </View>

            <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

              <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}

                onPress={() => {
                  item.quantityandPrice[0].quantity <= 1 ?  1  : item.quantityandPrice[0].quantity--;
                  handleTotalPrice();
                }}
              >
                <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                  -
                </Text>
              </TouchableOpacity>

              <View style={{ width: 50, height: 35, borderRadius: 7, borderColor: '#D17842', backgroundColor: '#0C0F14', justifyContent: "center", alignItems: 'center' }}
              >
                <Text style={{ color: 'white' }}>
                  { item.quantityandPrice[0].quantity}
                </Text>
              </View>

              <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  item.quantityandPrice[0].quantity++;
                  handleTotalPrice();
                  // upQuantity()
                }}
              >
                <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </View>
  )
}

export default ItemListCartSecond