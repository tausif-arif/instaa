import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '@/Theme/Variables'
import Brand from '../Components/Brand'
import { useState } from 'react'
const Orders = () => {
  const [isOnline, setIsOnline] = useState('offline')

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar animated={true} backgroundColor={Colors.white} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ justifyContent: 'flex-start', marginTop: 20 }}>
          <Brand />
          <Text>Bussiness</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
          }}
        >
          <MaterialCommunityIcons name="plus" size={24} color="grey" />
          <MaterialCommunityIcons name="magnify" size={24} color="grey" />
          <TouchableOpacity
            style={{
              width: '60%',
              height: '30%',
              padding: 4,
              fontSize: 6,
              borderRadius: 20,
              backgroundColor: '#d83b01',
            }}
          >
            <Text style={{ color: Colors.white }}>{isOnline}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex:5,justifyContent: 'center', alignItems: 'center' }}>
        <View>
          
          <Text style={{ color: Colors.text }}>CLOSED !</Text>
          <Text style={{ color: Colors.text }}>
            Scheduled to open at 10:30 AM
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.transparent,
              color: Colors.text,
              padding: 8,
              borderColor:Colors.grey,
              borderWidth:1,
              borderRadius:18
            }}
          >
            <Text>Check Order History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Orders
