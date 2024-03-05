import { View, Text, Image, TouchableOpacity, Modal, Alert, FlatList } from 'react-native'
import React, { useState } from 'react'

const Setting = ({ navigation }) => {

    const [ModalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1, padding: 8, backgroundColor: '#0C0F14' }}>
            <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', marginVertical: 30, justifyContent: 'center' }}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                    <Image

                        style={{ width: 30, height: 30 }}
                        source={require('../assets/icon/ic_back.png')}
                    />
                </TouchableOpacity>

                <Text style={{ width: '90%', textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                    Setting
                </Text>
            </View>
            <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/icon/ic_history.png')}
                />
                <Text style={{ width: '80%', color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                    History
                </Text>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../assets/icon/ic_right.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('PersonalDetail')}
                style={{ width: '100%', flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/icon/profile.png')}
                />
                <Text style={{ width: '80%', color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                    Personal Details
                </Text>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../assets/icon/ic_right.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                    style={{ width: 20, height: 25 }}
                    source={require('../assets/icon/ic_milk.png')}
                />
                <Text style={{ width: '80%', color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                    Address
                </Text>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../assets/icon/ic_right.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/icon/ic_payment.png')}
                />
                <Text style={{ width: '80%', color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                    Payment Method
                </Text>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../assets/icon/ic_right.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/icon/ic_about.png')}
                />
                <Text style={{ width: '80%', color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                    About
                </Text>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../assets/icon/ic_right.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/icon/ic_warning.png')}
                />
                <Text style={{ width: '80%', color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                    Help
                </Text>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../assets/icon/ic_right.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}

                onPress={() => setModalVisible(!ModalVisible)}
            >
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/icon/ic_logout.png')}
                />
                <Text style={{ width: '80%', color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                    Log out
                </Text>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../assets/icon/ic_right.png')}
                />
            </TouchableOpacity>

            <Modal

                animationType='slide'
                transparent={true}
                visible={ModalVisible}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                    <View style={{ width: 300, height: 150, backgroundColor: '#0C0F14', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'red', fontSize: 20 }}>
                            Are you sure want to logout!
                        </Text>
                        <View style={{ width: '100%', flexDirection: 'row', marginTop: 30, justifyContent: 'space-evenly' }}>
                            <TouchableOpacity
                                style={{ borderRadius: 10, borderWidth: 1, width: '40%', height: 50, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={{ fontSize: 16, color: 'white' }}>
                                    NO
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ borderRadius: 10, borderWidth: 1, width: '40%', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D17842' }}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={{ fontSize: 16, color: 'white' }}

                                    onPress={() => navigation.navigate('Login')}
                                >
                                    YES
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


            </Modal>
        </View>



    )
}

export default Setting