import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({ navigation, title }) => {
    return (
        <View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Setting')}
                >
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require('../assets/icon/ic_grid.png')}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>
                    {title}
                </Text>
                <Image
                    style={{ height: 40, width: 40 }}
                    source={require('../assets/icon/profile.png')}
                />
            </View>
        </View>

    )
}

export default Header