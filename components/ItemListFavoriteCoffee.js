import { View, Text, Image, ImageBackground, Button, TouchableOpacity, Alert } from 'react-native'
import React from 'react'


const ItemListFavoriteCoffee = ({ danhSach, getDataFavorite }) => {

    const deleteFavorite = () => {
        const api_delete = 'http://192.168.1.18:3000/Favoretes/' + danhSach.id;

        fetch(api_delete, {
            method: 'DELETE'
        })
            .then((ex) => {
                if (ex.ok) {
                    Alert.alert('Xoa Thanh Cong');
                    getDataFavorite();
                }
            })
            .catch((ex) => {
                console.log(ex);
            })
    }

    return (
        <View style={{ padding: 10 }}>
            <View style={{ height: 575, borderRadius: 30, borderWidth: 1, }}>
                <View style={{ flex: 7 }}>

                    <ImageBackground
                        style={{ width: '100%', height: '100%', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
                        imageStyle={{ borderTopRightRadius: 25, borderTopLeftRadius: 25 }}
                        source={{ uri: danhSach.img }}
                    >
                        <TouchableOpacity style={{ width: 35, height: 35, backgroundColor: '#21262E', borderRadius: 10, justifyContent: 'center', alignItems: 'center', position: 'absolute', end: 20, marginTop: 20 }}

                            onPress={deleteFavorite}
                        >
                            <Image
                                style={{ width: 25, height: 25, tintColor: 'red' }}

                                source={require('../assets/icon/ic_love.png')}
                            />
                        </TouchableOpacity>
                        <View style={{ height: 133, backgroundColor: 'rgba(0,0,0,0.4)', borderTopEndRadius: 25, borderTopStartRadius: 25, flexDirection: 'row', position: 'absolute', bottom: 0 }}>
                            <View style={{ width: '50%', padding: 20 }}>
                                <Text style={{ fontWeight: '600', fontSize: 20, color: 'white' }}>
                                    {danhSach.name}

                                </Text>
                                <Text>
                                    With Steamed Milk
                                </Text>
                                <View style={{ height: '50%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: 20, height: 20 }}
                                        source={require('../assets/icon/ic_star.png')}
                                    />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                                        {danhSach.star}<Text>(3000)</Text>
                                    </Text>
                                </View>
                            </View>

                            <View style={{ width: '50%' }}>
                                <View style={{ width: '100%', height: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: '#141921', alignItems: 'center' }}>
                                        <Image
                                            style={{ tintColor: '#D17842' }}
                                            source={require('../assets/icon/ic_beans.png')}
                                        />
                                        <Text style={{ fontSize: 10, color: '#AEAEAE' }}>
                                            Coffee
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: '#141921', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image
                                            style={{ tintColor: '#D17842' }}
                                            source={require('../assets/icon/ic_milk.png')}
                                        />
                                        <Text style={{ fontSize: 10, color: '#AEAEAE' }}>
                                            Coffee
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ width: 118, height: 40, borderRadius: 10, backgroundColor: '#141921', justifyContent: 'center', paddingHorizontal: 1 }}>
                                        <Text style={{ color: '#AEAEAE', textAlign: 'center' }}>
                                            Medium Roasted
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </ImageBackground>

                </View>
                <View style={{ flex: 2, backgroundColor: '#262B33', borderBottomStartRadius: 25, borderBottomEndRadius: 25, padding: 10 }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>
                        Description
                    </Text>
                    <Text style={{ color: 'white', fontSize: 15 }}>
                        {danhSach.description}
                    </Text>
                </View>

            </View>
        </View>

    )
}

export default ItemListFavoriteCoffee