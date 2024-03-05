import { View, Text } from 'react-native'
import React from 'react'

const ItemHistory = ({ item }) => {

    return (
        <View style={{ width: "100%", padding: 10, borderRadius: 10, borderWidth: 1 }}>
            <Text>Oder Date</Text>
            <Text>{item.TimeCreat}</Text>
            <Text>{item.name}</Text>
            <View style={{borderRadius:10,backgroundColor:'#272B32'}}>
                

            </View>

        </View>
    )
}

export default ItemHistory