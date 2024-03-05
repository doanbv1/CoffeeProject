import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

const BeanDetails = ({ navigation, route }) => {

  const [click, setclick] = useState('250gm');
  const [price, setprice] = useState(0);

  const { id } = route.params;
  const { star } = route.params
  const { name } = route.params;
  const { description, img, getUserInfor } = route.params;

  const AddToCart = () => {

    const Api = 'http://192.168.1.142:3000/Cart';

    const data = {
      name : name,
      price: price,
      "quantityandPrice":[
        {quantity: 1}
      ]

      
    }
  
    fetch(Api,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)  
    })
    .then((res) => {
      if(res.status == 201)
      Alert.alert("Them Thanh Cong")
    })
    .catch((ex) =>{
      console.log(ex)
    })

  }
  
  const adtoFavorite = () =>{
    const API_Favorite = 'http://192.168.1.142:3000/Favoretes';

        const data =
        {
            name: name,
            star: star,
            description: description,
            img: img,
            email: getUserInfor,
        }
        fetch(API_Favorite,{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((res) => {
            if(res.status == 201)
            Alert.alert('Them Vao Yeu Thich Thanh Cong');
        })
        .catch((ex) => {
            console.log(ex);
        })
        
  } 
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View style={{ flex: 6, borderWidth: 1 }}>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={{uri:img}}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require('../assets/icon/ic_back.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={adtoFavorite}
            >
              <Image
                style={{ width: 30, height: 30, tintColor: 'red' }}
                source={require('../assets/icon/ic_love.png')}
              />
            </TouchableOpacity>

          </View>

          <View style={{ width: '100%', height: 150, backgroundColor: 'rgba(0,0,0,0.4)', position: 'absolute', bottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'row' }}>
            <View style={{ width: '55%', justifyContent: 'space-evenly' }}>

              <View style={{ width: '100%', marginHorizontal: 30 }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
                  {name}
                </Text>
                <Text style={{ color: 'white', fontSize: 10, }}>
                  From Arlica
                </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: "center", marginHorizontal: 30 }}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../assets/icon/ic_star.png')}
                />
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', marginHorizontal: 5 }}>
                  {star}
                </Text>
                <Text style={{ color: 'gray', fontSize: 10, fontWeight: '600' }}>
                  (9.874)
                </Text>
              </View>

            </View>
            <View style={{ width: '45%' }}>

              <View style={{ width: '100%', height: '50%', flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity
                  style={{ width: '32%', borderWidth: 1, borderRadius: 10, marginVertical: 5, backgroundColor: '#141921', alignItems: 'center', justifyContent: 'center' }}

                >
                  <Image

                    tintColor={('#D17842')}
                    source={require('../assets/icon/ic_bean.png')}
                  />
                  <Text style={{ fontSize: 12, color: '#AEAEAE' }}>
                    Bean
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ width: '32%', borderWidth: 1, borderRadius: 10, marginVertical: 5, backgroundColor: '#141921', alignItems: 'center', justifyContent: 'center' }}

                >
                  <Image
                    tintColor={('#D17842')}
                    source={require('../assets/icon/position.png')}
                  />
                  <Text style={{ fontSize: 12, color: '#AEAEAE' }} >
                    Bean
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: '100%', height: '50%', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity

                  style={{ borderWidth: 1, width: '82%', height: '70%', borderRadius: 10, backgroundColor: '#141921', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text style={{ fontSize: 12, color: '#AEAEAE' }}>
                    Medium Roasted

                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </ImageBackground>


      </View>

      <View style={{ flex: 4, borderWidth: 1, padding: 10, backgroundColor: '#0C0F14' }}>

        <View style={{ width: '100%', height: '70%', justifyContent: 'space-around' }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#AEAEAE', marginVertical: 8 }}>
            Description
          </Text>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#AEAEAE' }}>
            {description}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#AEAEAE', marginVertical: 8 }}>
            Size
          </Text>
          <View style={{ width: '100%', height: '30%', borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                setclick('250gm')
                setprice('10.5')
              }}
              style={{ width: '30%', height: '80%', borderWidth: 2, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderColor: click === '250gm' ? '#D17842' : null, backgroundColor: '#141921' }}>
              <Text style={{ fontSize: 12, fontWeight: "500", color: '#D17842' }}>
                250gm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setclick('500gm')
                setprice('15.5')
              }}
              style={{ width: '30%', height: '80%', borderWidth: 2, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderColor: click === '500gm' ? '#D17842' : null, backgroundColor: '#141921' }}>
              <Text style={{ fontSize: 12, fontWeight: "500", color: '#AEAEAE' }}>
                500gm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setclick('1000gm')
                setprice('25.1')
              }}
              style={{ width: '30%', height: '80%', borderWidth: 2, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderColor: click === '1000gm' ? '#D17842' : null, backgroundColor: '#141921' }}>
              <Text style={{ fontSize: 12, fontWeight: "500", color: '#AEAEAE' }}>
                1000gm
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: '100%', height: '30%', flexDirection: 'row', }}>
          <View style={{ width: '35%', height: '100%', justifyContent: 'center' }}>
            <Text style={{ fontSize: 12, fontWeight: '500', color: '#AEAEAE', marginLeft: "10%" }}>
              Price
            </Text>
            <View style={{ flexDirection: 'row', marginRight: '40%' }}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#D17842' }}>
                $
              </Text>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>
                {price}
              </Text>
            </View>
          </View>

          <View style={{ width: '65%', height: '100%', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={AddToCart}
              style={{ width: '100%', height: '80%', borderRadius: 20, backgroundColor: '#D17842', justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#FFFFFF' }}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>


    </View>
  )
}

export default BeanDetails