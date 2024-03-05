import { View, Text, Image } from 'react-native'
import React from 'react'

const CustomIcon = ({color, size, require}) => {
  return (
        <View>
            <Image
                source={require}
                style={{height: size, width: size, tintColor: color}}
            />
        </View>
  )
}

export default CustomIcon