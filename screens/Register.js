import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'

const Register = ({ navigation }) => {

    const [userName, setuserName] = useState('');
    const [Email, setEmail] = useState('');
    const [PassWord, setPassWord] = useState('')
    const [confirmPW, setconfirmPW] = useState("")

    const [EyepassWord, setEyepassWord] = useState(true);
    const [EyeConfirmPassWord, setEyeConfirmPassWord] = useState(true);



    const Register = async () => {

        const CheckSame = (Input1, Input2) => {
                if (Input1 === Input2){
                    return true;
                }
                return false;
        }
         
        if(userName.length == 0 || Email.length == 0 || PassWord.length == 0 || confirmPW == 0){
            Alert.alert('Bạn Phải Nhập Đầy đủ Thông Tin !')
            return;
        }else if(CheckSame(PassWord,confirmPW) == false){
            Alert.alert('PassWord và Confirm Password Không Trùng Nhau !');
            return;
        }



        const ApI_Account = 'http://10.24.21.109:3000/accounts';
        const Obj_acc = {Fullname: userName, EmailAddress: Email, Password: PassWord}

        fetch(ApI_Account, {

            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Obj_acc),

        })

            .then((res) => {
                if(res.status == 201)
                Alert.alert('Them Tai Khoan Thanh Cong')
                setuserName('');
                setEmail('');
                setPassWord('');
                setconfirmPW('');
                return;
            })
            .catch((ex)=>{
                console.log(ex);
            })
            

    }


    return (
        <KeyboardAvoidingView>
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#0C0F14', height: '100%' }} >
                    <Image style={{ width: 124, height: 124 }}
                        source={require('../assets/img/logocf.png')} />
                    <Text style={{ marginTop: 13, fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                        Welcome to Lungo !!
                    </Text>
                    <Text style={{ marginTop: 13, fontSize: 16, color: '#828282' }}>
                        Register  to Continue
                    </Text>

                    <TextInput
                        value={userName}
                        onChangeText={(txt) => setuserName(txt)}
                        placeholder='Name'
                        placeholderTextColor={'#333'}
                        style={{ width: '100%', height: 50, marginTop: 10, borderColor: '#252A32', borderRadius: 8, backgroundColor: 'gray', paddingHorizontal: 10, color: 'white' }}
                    />

                    <TextInput
                        value={Email}
                        onChangeText={(txt) => setEmail(txt)}
                        placeholder='Email'
                        placeholderTextColor={'#333'}
                        style={{ width: '100%', height: 50, marginTop: 10, borderColor: '#252A32', borderRadius: 8, backgroundColor: 'gray', paddingHorizontal: 10, color: 'white' }}
                        
                    />
                    <View
                        style={{ width: '100%', marginTop: 10, borderColor: '#252A32', borderRadius: 8, backgroundColor: 'gray', padding: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <TextInput
                            value={PassWord}
                            onChangeText={(txt) => setPassWord(txt)}
                            style={{ color: 'white', width: '90%' }}
                            placeholder='Pass Word'
                            placeholderTextColor={'#333'}
                            secureTextEntry={EyepassWord}

                        />
                        <TouchableOpacity
                            onPress={() => setEyepassWord(!EyepassWord)}
                            style={{ justifyContent: 'center', alignItems: 'center', width: '10%' }}
                        >
                            <Image

                                source={EyepassWord == false ? require('../assets/icon/ic_eye.png') : require('../assets/icon/ic_eye_invisibal.png')}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{ width: '100%', borderColor: '#252A32', borderRadius: 8, backgroundColor: 'gray', marginTop: 10, padding: 1, justifyContent: 'space-between', flexDirection: 'row' }}
                    >
                        <TextInput
                            value={confirmPW}
                            onChangeText={(txt) => setconfirmPW(txt)}
                            style={{ color: 'white', width: '90%' }}
                            placeholder='ConfirmPassWord'
                            placeholderTextColor={"#333"}
                            secureTextEntry={EyeConfirmPassWord}
                        />
                        <TouchableOpacity
                            onPress={() => setEyeConfirmPassWord(!EyeConfirmPassWord)}
                            style={{ justifyContent: 'center', width: '10%', alignItems: 'center' }}
                        >
                            <Image
                                source={EyeConfirmPassWord == false ? require('../assets/icon/ic_eye.png') : require('../assets/icon/ic_eye_invisibal.png')}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity 
                    onPress={Register}
                    
                    style={{ backgroundColor: '#D17842', paddingVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20, width: '100%', height: 57, marginTop: 30 }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Register</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: 40 }}>
                        <Text style={{ color: '#828282' }}>You have an an account? Click </Text>

                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Text style={{ color: '#D17842', fontWeight: 'bold' }}> Sing In</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </KeyboardAvoidingView>

    )
}

export default Register

const styles = StyleSheet.create({})