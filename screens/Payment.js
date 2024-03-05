import { View, Text, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Payment = ({ route }) => {
    const [price, setPrice] = useState(route.params?.data);

    console.log(price);

    const addToHistory = () => {
        const API = "http://192.168.1.142:3000/Histories";

        const date = new Date();

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const hours = date.getHours();
        const minutes = date.getMinutes();

        const time = day + "/" + month + "/" + year + " " + hours + ":" + minutes;

        const data = {
            "TimeCreat": time,
            ...route.params?.allData[0]
        }
        console.log('qewqeqewq');
        fetch(API, {
            method: 'POST',
            // headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json',
            // },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res.ok) {
                    Alert.alert('Them vao History thanh cong')
                } else {
                    Alert.alert('Them vao History khong thanh cong')
                }
            })
            .catch((ex) => {
                console.log(ex);
            })

    }
    // console.log( route.params?.allData);
    return (
        <View style={{ flex: 1, backgroundColor: '#0C0F14' }}>
            <View style={{ width: '100%', height: '100%', borderWidth: 1, padding: 8, }}>
                <TouchableOpacity
                    style={{ width: '100%', height: 241, backgroundColor: '#0C0F14', borderRadius: 20, padding: 9, borderWidth: 3, borderColor: '#D17842', marginVertical: 10 }}
                >
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#FFFFFF', marginBottom: 3 }}>
                        Credit Card
                    </Text>
                    <LinearGradient end={{ x: 1, y: 1 }} start={{ x: 0, y: 2 }} colors={['#262B33', '#0C0F14']} style={{ width: '100%', height: '90%', borderRadius: 20, padding: 8 }}>

                        <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image

                                source={require('../assets/icon/ic_sim.png')}
                            />

                            <Image
                                source={require('../assets/icon/ic_visa.png')}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#FFFFFF' }}>
                                3333 6666 8888 9999
                            </Text>
                        </View>
                        <View style={{ flex: 4, }}>
                            <View style={{ flex: 3 }}>

                            </View>
                            <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{}}>
                                    <Text style={{ fontSize: 10, fontWeight: '400', color: "#FFFFFF", }}>
                                        Card Holder Name
                                    </Text>
                                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#FFFFFF" }}>
                                        Robert Evans
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Text style={{ fontSize: 10, fontWeight: '400', color: "#FFFFFF" }}>
                                        Expiry Date
                                    </Text>
                                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#FFFFFF" }}>
                                        02/30
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </LinearGradient>


                </TouchableOpacity>

                <TouchableOpacity

                    style={{ width: '100%', height: 50, backgroundColor: '#262B33', borderRadius: 25, marginBottom: 10, padding: 8 }}
                >

                    <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                        <Image
                            style={{ width: 35, height: 25, marginLeft: 10 }}
                            source={require('../assets/icon/ic_Wallet.png')}
                        />
                        <Text style={{ flex: 6, fontSize: 14, fontWeight: '600', color: '#FFFFFF', paddingLeft: 10 }}>
                            Wallet
                        </Text>
                        <Text style={{ flex: 1.4, paddingRight: 10, fontSize: 14, color: '#FFFFFF' }}>
                            $ 100.50
                        </Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity

                    style={{ width: '100%', height: 50, backgroundColor: '#262B33', borderRadius: 25, marginBottom: 10, padding: 8 }}
                >

                    <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                        <Image
                            style={{ width: 35, height: 25, marginLeft: 10 }}
                            source={require('../assets/icon/ic_googlePay.png')}
                        />
                        <Text style={{ flex: 6, fontSize: 14, fontWeight: '600', color: '#FFFFFF', paddingLeft: 10 }}>
                            Google Pay
                        </Text>


                    </View>
                </TouchableOpacity>
                <TouchableOpacity

                    style={{ width: '100%', height: 50, backgroundColor: '#262B33', borderRadius: 25, marginBottom: 10, padding: 8 }}
                >

                    <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                        <Image
                            style={{ width: 26, height: 30, marginLeft: 10 }}
                            source={require('../assets/icon/ic_IP.png')}
                        />
                        <Text style={{ flex: 6, fontSize: 14, fontWeight: '600', color: '#FFFFFF', paddingLeft: 10 }}>
                            Apple Pay
                        </Text>


                    </View>
                </TouchableOpacity>
                <TouchableOpacity

                    style={{ width: '100%', height: 50, backgroundColor: '#262B33', borderRadius: 25, marginBottom: 10, padding: 8 }}
                >

                    <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                        <Image
                            style={{ width: 30, height: 25, marginLeft: 10 }}
                            source={require('../assets/icon/ic_amazon.png')}
                        />
                        <Text style={{ flex: 6, fontSize: 14, fontWeight: '600', color: '#FFFFFF', paddingLeft: 10 }}>
                            Amazon Pay
                        </Text>

                    </View>
                </TouchableOpacity>

                <View style={{ width: '105%', height: '10%', flexDirection: 'row', position: 'absolute', bottom: 0 }}>
                    <View style={{ width: '35%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#AEAEAE', marginLeft: "10%" }}>
                            Price
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#D17842' }}>
                                $
                            </Text>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>
                                {JSON.stringify(price)}

                            </Text>
                        </View>
                    </View>

                    <View style={{ width: '65%', height: '100%', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { addToHistory() }}
                            style={{ width: '95%', height: '80%', borderRadius: 20, backgroundColor: '#D17842', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#FFFFFF' }}>
                                Pay from Credit Card
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default Payment