import { View, Text, Image,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'

const ItemListCartFirst = ({item}) => {
  return (
    <View style={{width:'100%'}}>
      <View style={{ height: 265, borderWidth: 1, backgroundColor: '#262B33', borderRadius: 23, padding: 10, marginBottom: 10 , backgroundColor:'red'}}>
          <View style={{ width: '100%', height: '100%', justifyContent: 'space-around' }}>
            <View style={{ width: '100%', height: '45%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../assets/img/Capuccino.png')}
                />

              </View>

              <View style={{ width: '65%', height: '100%', justifyContent: 'space-around' }}>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: '500', color: '#FFFFFF' }}>
                    {item.name}
                  </Text>
                  <Text style={{ color: '#AEAEAE', fontSize: 10, fontWeight: '400' }}>
                    With Steamed Milk
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    width: 120,
                    height: 40,
                    borderWidth: 1,
                    backgroundColor: '#141921',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'

                  }}

                >
                  <Text style={{ color: '#AEAEAE', fontSize: 10, fontWeight: '500' }}>
                    Medium Roasted
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ width: '100%', height: '50%', justifyContent: 'space-around' }}>
              <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <TouchableOpacity style={{ width: 72, height: 35, borderWidth: 1, backgroundColor: '#0C0F14', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: '500', fontSize: 16 }}>S</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#D17842' }}>
                    $
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>
                    {item.price}
                  </Text>
                </View>

                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                    -
                  </Text>
                </TouchableOpacity>

                <TextInput style={{ width: 50, height: "100%", borderWidth: 1, borderRadius: 7, borderColor: '#D17842', backgroundColor: '#0C0F14' }}

                  keyboardType="numeric"
                >
                </TextInput>

                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                    +
                  </Text>
                </TouchableOpacity>

              </View>

              <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 72, height: 35, borderWidth: 1, backgroundColor: '#0C0F14', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: '500', fontSize: 16 }}>
                    M
                  </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#D17842' }}>
                    $
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>
                    10.50
                  </Text>
                </View>
                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                    -
                  </Text>
                </TouchableOpacity>

                <TextInput style={{ width: 50, height: 35, borderWidth: 1, borderRadius: 7, borderColor: '#D17842', backgroundColor: '#0C0F14' }}

                  keyboardType="numeric"

                >


                </TextInput>

                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 72, height: 35, borderWidth: 1, backgroundColor: '#0C0F14', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: '500', fontSize: 16 }}>L</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#D17842' }}>
                    $
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>
                    10.50
                  </Text>
                </View>
                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7 }}>

                  <Text style={{ width: '100%', height: '100%', color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                    -
                  </Text>


                </TouchableOpacity>

                <TextInput style={{ width: 50, height: '100%', borderWidth: 1, borderRadius: 7, borderColor: '#D17842', backgroundColor: '#0C0F14' }}

                  keyboardType="numeric"

                />
                

                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
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

export default ItemListCartFirst