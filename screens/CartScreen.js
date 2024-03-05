import { View, Text, ScrollView, Image, Touchable, TouchableOpacity, TextInput, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import ItemListCartSecond from '../components/ItemListCartSecond';
import ItemListCartFirst from '../components/ItemListCartFirst';

const CartScreen = () => {
  const navigation = useNavigation();
  const [data1, setdata] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)



  const getDataCart = () => {
    const API = 'http://192.168.1.142:3000/Cart'
    try {
      fetch(API)
        .then((res) => res.json())
        .then((res_data) => {
          setdata(res_data);
          TotalPrice(res_data);
        })
    } catch (ex) {
      console.log(ex)
    }

  }



  // console.log(data1);
  const TotalPrice = (data) => {

    let sum = 0;
    if (data && data.length > 0) {
      for (let index = 0; index < data.length; index++) {

        let mangT = data[index].quantityandPrice;
        // console.log(mangT);
        for (let j = 0; j < mangT.length; j++) {
          sum += parseInt(mangT[j].price) * parseInt(mangT[j].quantity);
        }
      }
      // console.log(sum);
      setTotalPrice(sum);
    } else {
      console.log('khong co du lieu');
    }

  }

  const updateAll = () => {


    

    // let objSp = {
    //   "quantityandPrice": [
    //     {
    //       "quantity": quantity,
    //       // "size": "S",
    //       // "price": "10"
    //     }
    //   ]
    // }
    for(let index = 0 ; index < data1.length; index++ ){

      const API = 'http://192.168.1.142:3000/Cart/' + `${data1[index].id}`;

      let dataOld = data1[index];

      console.log(API);
      fetch(API, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataOld)
      })
        // .then((res) => {})
        .catch((ex) => {
          console.log(ex);
        })

    }


  }

  useEffect(() => {
    const reload = navigation.addListener('focus', () => {
      getDataCart();
    });
    return reload;

  }, [navigation])

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#0C0F14' }}>

      <Header
        navigation={navigation}
        title={'Cart'}
      />
      {/* <ScrollView style={{ width: '100%', borderWidth: 1 }}>
        
        <View style={{ width: '100%', height: 155, borderWidth: 1, backgroundColor: '#262B33', borderRadius: 23, padding: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ width: '30%', height: '100%', justifyContent: 'center', marginHorizontal: 5 }}>
              <Image
                style={{ width: 115, height: 115, borderRadius: 10 }}
                source={require('../assets/img/Bean.jpg')}
              />

            </View>

            <View style={{ width: '65%', height: '100%', justifyContent: 'space-evenly' }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#FFFFFF' }}>
                  Robusta Beans
                </Text>
                <Text style={{ color: '#AEAEAE', fontSize: 10, fontWeight: '400' }}>
                  With Steamed Milk
                </Text>
              </View>

              <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={{ width: 72, height: 35, backgroundColor: '#0C0F14', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#AEAEAE', fontWeight: '500', fontSize: 10 }}>
                    250gm
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
              </View>

              <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                    -
                  </Text>
                </TouchableOpacity>

                <TextInput style={{ width: 50, height: 35, borderRadius: 7, borderColor: '#D17842', backgroundColor: '#0C0F14' }}

                  keyboardType="numeric"

                >

                  <Text style={{ width: 50, height: "100%", color: '#FFFFFF', fontWeight: '600', padding: 0, margin: 0 }}>
                    1
                  </Text>


                </TextInput>

                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>




        <View style={{ height: 265, borderWidth: 1, backgroundColor: '#262B33', borderRadius: 23, padding: 10 }}>
          <View style={{ width: '100%', height: '100%', justifyContent: 'space-around' }}>
            <View style={{ width: '100%', height: '45%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  style={{ width: 100, height: 100, borderRadius: 10 }}
                  source={require('../assets/img/Bean.jpg')}
                />

              </View>

              <View style={{ width: '65%', height: '100%', justifyContent: 'space-around' }}>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: '500', color: '#FFFFFF' }}>
                    Liberica Coffee Beans
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
                  <Text style={{ color: '#AEAEAE', fontWeight: '500', fontSize: 10 }}>
                    250gm
                  </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#D17842' }}>
                    $
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>
                    2.50
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
                  <Text style={{ width: 50, height: "100%", color: '#FFFFFF', fontWeight: '600', padding: 0, margin: 0 }}>
                    1
                  </Text>
                </TextInput>

                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                    +
                  </Text>
                </TouchableOpacity>

              </View>

              <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 72, height: 35, borderWidth: 1, backgroundColor: '#0C0F14', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#AEAEAE', fontWeight: '500', fontSize: 10 }}>
                    500gm
                  </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#D17842' }}>
                    $
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>
                    3.50
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

                  <Text style={{ width: 50, height: "100%", color: '#FFFFFF', fontWeight: '600', padding: 0, margin: 0 }}>
                    1
                  </Text>


                </TextInput>

                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 72, height: 35, borderWidth: 1, backgroundColor: '#0C0F14', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#AEAEAE', fontWeight: '500', fontSize: 10 }}>
                    1kg
                  </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#D17842' }}>
                    $
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>
                    5.50
                  </Text>
                </View>
                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7 }}>

                  <Text style={{ width: '100%', height: '100%', color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                    -
                  </Text>


                </TouchableOpacity>

                <TextInput style={{ width: 50, height: '100%', borderWidth: 1, borderRadius: 7, borderColor: '#D17842', backgroundColor: '#0C0F14' }}

                  keyboardType="numeric"

                >
                  <Text style={{ width: 50, height: "100%", color: '#FFFFFF', fontWeight: '600', padding: 0, margin: 0 }}>
                    1
                  </Text>
                </TextInput>

                <TouchableOpacity style={{ width: 28, height: 28, backgroundColor: '#D17842', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                    +
                  </Text>
                </TouchableOpacity>

              </View>

            </View>

          </View>
        </View>
      </ScrollView> */}
      <FlatList
        data={data1}
        renderItem={({ item }) => {
          // console.log(item);
         return <ItemListCartSecond item={item} totalPrice={()=>{
          TotalPrice(data1);
         }} />
        }}
        extraData={(item) => item.id}
      />

      <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
        <View style={{ width: '35%', height: '100%', justifyContent: 'center' }}>
          <Text style={{ fontSize: 12, fontWeight: '500', color: '#AEAEAE', marginLeft: "3%" }}>
            Total Price
          </Text>
          <View style={{ flexDirection: 'row', marginRight: '40%' }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#D17842' }}>
              $
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>
              {totalPrice}
            </Text>
          </View>
        </View>

        <View style={{ width: '65%', height: '100%', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Payment',{ data: totalPrice, allData: data1})
              updateAll();  
          }}
            style={{ width: '100%', height: '100%', borderRadius: 20, backgroundColor: '#D17842', justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#FFFFFF' }}>
              Pay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default CartScreen