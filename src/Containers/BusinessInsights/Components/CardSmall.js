import { View, Text } from 'react-native'
import React from 'react'

const CardSmall = props => {
  return (
    <View
      style={{
        backgroundColor: props.bg,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
      }}
    >
      <View style={{ justifyContent: 'space-around', marginVertical: '12%' }}>
        <Text style={{ color: props.color }}>{props.text}</Text>
        <Text style={{ color: props.color, fontSize: 28,fontWeight:'bold' }}>{props.value}</Text>
        <Text style={{ color: props.color }}>{props.orders}</Text>
      </View>
    </View>
  )
}

export default CardSmall
