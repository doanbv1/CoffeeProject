import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'




const PersonalDetail = ({ navigation }) => {

  const [Email, setEmail] = useState(true);
  const [PassWord, setPassWord] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, padding: 8, backgroundColor: '#0C0F14', alignItems: 'center' }}>



      <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', marginVertical: 30 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Setting')}
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

      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ marginBottom: 60 }}
          source={require('../assets/icon/profile.png')}
        />

        <TextInput
          style={{ width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 20, color: 'red', backgroundColor: 'white', padding: 10, marginVertical: 10 }}
          placeholder='name'
        />
        <TextInput
          style={{ width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 20, color: 'red', backgroundColor: 'white', padding: 10, marginVertical: 10 }}
          placeholder='Email'
        />
        <View style={{ width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 20, color: 'red', backgroundColor: 'white', marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={{ width: '90%' }}
            placeholder='Email'
            secureTextEntry={Email}
          />
          <TouchableOpacity style={{ width: '10%' }}
            onPress={() => setEmail(!Email)}
          >
            <Image
              style={{ width: 30, height: 30 }}

              source={Email == true ? require('../assets/icon/ic_eye_invisibal.png') : require('../assets/icon/ic_eye.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 20, color: 'red', backgroundColor: 'white', marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={{ width: '90%' }}
            placeholder='PassWord'
            secureTextEntry={PassWord}
          />
          <TouchableOpacity style={{ width: '10%' }}
            onPress={() => setPassWord(!PassWord)}
          >
            <Image
              style={{ width: 30, height: 30 }}

              source={PassWord == true ? require('../assets/icon/ic_eye_invisibal.png') : require('../assets/icon/ic_eye.png')}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ width: '100%', backgroundColor: '#D17842', padding: 20, borderRadius: 10, alignItems: 'center', marginTop: 30 }}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default PersonalDetail