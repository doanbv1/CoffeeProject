import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View, Alert, } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Login = ({ navigation, route }) => {

    const [EmailAddress, setEmailAddress] = useState('');
    const [PassWord, setPassWord] = useState('');
    const [a, seta] = useState('')
    const [EyepassWord, setEyePassWord] = useState(true);


    useFocusEffect(
        React.useCallback(() => {
            setEmailAddress('')
            setPassWord('')
            console.log('man hinh  dang tap trung')
            return () => {
                console.log('man hinh k tap trung')
            }
        },[navigation])

    );
    const Login = () => {

        if (EmailAddress.length == 0) {
            Alert.alert('Chua Nhap Email !');
            return;
        } else if (PassWord.length == 0) {
            Alert.alert('Chua Nhap PassWord !');
            return;
        }
        // console.log(EmailAddress)
        // console.log(PassWord)
        const API_Account = "http://192.168.1.142:3000/accounts?EmailAddress=" + EmailAddress;

        fetch(API_Account)
            // console.log("bbbbbb"+API_Account)

            .then((res) => res.json())
            .then(async (res_Login) => {

                // console.log("bbbbbbb" + res_Login)

                if (res_Login.length != 1) {
                    // console.log("aaaaaaaaa "+ res_Login.length);
                    Alert.alert('Email sai hoac Trung Email');
                    return;
                } else {

                    // số lượng lấy đc một bản ghi ==> Kiểm tra PassWord
                    let ObjU = res_Login[0];
                    if (ObjU.Password != PassWord) {

                        Alert.alert('Sai PassWord');
                    } else {
                        // đúng Lưu Thông tin vào Storate
                        try {
                            await AsyncStorage.setItem('Login', JSON.stringify(ObjU));
                            navigation.navigate('HomeBottomTab', { EmailAddress });
                            // setEmailAddress('')
                            // setEyePassWord('')
                        } catch (e) {
                            // saving error
                            console.log(e);
                        }
                    }
                }
            })
            .catch((ex) => {
                console.log(ex);
            })
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#0C0F14', height: '100%' }} >
            <Image style={{ width: 124, height: 124 }}
                source={require('../assets/img/logocf.png')} />
            <Text style={{ marginTop: 13, fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                Welcome to Lungo !!
            </Text>
            <Text style={{ marginTop: 13, fontSize: 16, color: '#828282' }}>
                Login  to Continue
            </Text>
            <TextInput
                value={EmailAddress}
                onChangeText={(txt) => { setEmailAddress(txt) }}
                placeholder='Emall Address'
                placeholderTextColor={'#333'}
                style={{ width: '100%', height: 48, marginTop: 10, borderColor: '#252A32', borderRadius: 8, borderWidth: 2, paddingHorizontal: 10, color: 'white' }}
            />
            <View
                style={{ width: '100%', marginTop: 10, borderColor: '#252A32', borderRadius: 8, borderWidth: 2, paddingHorizontal: 10, flexDirection: 'row' }}
            >
                <TextInput
                    value={PassWord}
                    onChangeText={(txt) => { setPassWord(txt) }}
                    style={{ color: 'white' }}
                    placeholder='Pass Word'
                    placeholderTextColor={'#333'}
                    secureTextEntry={EyepassWord}

                />
                <TouchableOpacity
                    onPress={() => setEyePassWord(!EyepassWord)}

                    style={{ right: 10, height: 50, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={EyepassWord == true ? require('../assets/icon/ic_eye_invisibal.png') : require('../assets/icon/ic_eye.png')}
                        style={{ width: 30, height: 30, borderWidth: 2, tintColor: 'white' }} />

                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={Login}
                style={{ backgroundColor: '#D17842', paddingVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20, width: '100%', height: 57, marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Sing In</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={{ backgroundColor: 'white', paddingVertical: 10, borderRadius: 20, width: '100%', height: 57, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: 'center' }}>
                <Image
                    source={require('../assets/icon/ic_google.png')}
                    style={{ width: 15, height: 15, borderWidth: 2, position: 'absolute', left: 10 }} />
                <Text style={{ fontWeight: 'bold', color: 'black', justifyContent: 'flex-end' }}>Sing In With Google</Text>
            </TouchableOpacity>

            <View style={{ marginTop: 40, flexDirection: 'row' }}>
                <Text style={{ color: '#828282', }}>Don't have account? Click </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{ color: '#D17842', fontWeight: 'bold' }}> Register</Text>
                </TouchableOpacity>
            </View>


            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                <Text style={{ color: '#828282', }}>Forget PassWord? Click </Text>
                <TouchableOpacity>
                    <Text style={{ color: '#D17842', fontWeight: 'bold' }}> Reset</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({})