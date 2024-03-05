import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { InnerScreen } from 'react-native-screens';
import { useState, useContext } from 'react'
import ItemListDrink from '../components/ItemListDrink';
import ItemListBean from '../components/ItemListBean';
import { UserInfor } from '../App';
import Header from '../components/Header';


const Home = ({ navigation }) => {

  const [coffeeDatas, setcoffeeDatas] = useState([]);
  const [beanDatas, setbeanDatas] = useState([]);
  
  const getUserInfor = useContext(UserInfor);

  const arrListname = [
    'All'
    ,
    'Cappuccino'
    ,
    'Espresso'
    ,
    'Americano'
    ,
    'Machiorito'
    ,
    'Cocacola'
  ];
  const arrListBeans = [
    {
      id: 0,
      img: require('../assets/img/Bean.jpg'),
      name: 'Robusta Beans',
      topping: 'Medium roasted',
      price: '4.2',
    },
    {
      id: 1,
      img: require('../assets/img/Bean.jpg'),
      name: 'Capuccino',
      topping: 'Milk',
      price: '4.6',
    },
    {
      id: 2,
      img: require('../assets/img/Bean.jpg'),
      name: 'Robusta Beans',
      topping: 'Medium roasted',
      price: '4.2',
    },
  ];

  const getDataCoffee = async () => {

    const data = 'http://192.168.1.142:3000/coffeeProduct';
   
    try {
      fetch(data)
        .then((res) => { return res.json() })
        .then((res_data) => { 
         setcoffeeDatas(res_data)
          // console.log(res_data);
        })

    } catch (ex) {
      console.log(ex)
    }

  }
  const getDataBean = async () =>{
    const data = 'http://192.168.1.142:3000/beansProduct';
    
    try{
      fetch(data)
      .then((res) => res.json())
      .then((res_data) =>{
        setbeanDatas(res_data)
      })
      .catch((ex) => {
        console.log(ex);
      })

    }catch(ex){
      console.log(ex)
    }

  }

  useEffect(() => {
    getDataCoffee()
    getDataBean()
  }, [navigation]) 

  const [display, setdisplay] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: '#0C0F14', }}>
      <Header
      navigation={navigation}
      title="Home"
      />

      <View style={{ width: '100%' }}>
        <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>Find the best coffee for you</Text>
      </View>

      <View style={{ width: '100%', height: 50, borderWidth: 1, marginTop: 10, flexDirection: 'row', padding: 3, borderRadius: 30, justifyContent: 'space-between', fontWeight: 1, backgroundColor: '#141921' }}>

        <Image style={{ width: '8%', height: 30, justifyContent: 'center', alignItems: 'center', marginTop: '1.5%', marginLeft: '0.5%' }} source={require('../assets/icon/ic_search2.png')} />

        <TextInput
          style={{ width: '90%', borderRadius: 30 }}
          placeholder='Fin your coffee'
        />

      </View>

      <View style={{ width: '100%', height: '10%', marginTop: '1%' }}>
        <FlatList
          data={arrListname}
          horizontal
          renderItem={({ item, index }) => (

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center' }}
                onPress={() => setdisplay(index)}
              >

                <Text style={{ fontSize: 20, marginRight: 10, color: '#D17842' }}> {item}</Text>
                <Image style={{ width: 10, height: 10, opacity: display === index ? 1 : 0 }} source={require('../assets/icon/ic_star.png')} />

              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <ScrollView style={{ height: 290 }}>
        <View >
          <FlatList
            data={coffeeDatas}

            renderItem={({ item }) => <ItemListDrink getUserInfor={getUserInfor} item={item} />}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
          />
        </View>

        <Text style={{ marginVertical: 10, fontSize: 20 }}>Coffee beans</Text>

        <View>
          <FlatList
            data={beanDatas}
            renderItem={({ item }) => <ItemListBean getUserInfor={getUserInfor} item={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>

      </ScrollView>


    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})