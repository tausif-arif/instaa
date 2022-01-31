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
import { Switch } from 'react-native-switch'

const Orders = () => {
  const [isOnline, setIsOnline] = useState('offline')

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar animated={true} backgroundColor={Colors.white} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <View>
          <View style={{ justifyContent: 'center', marginTop: '12%' }}>
            <Brand height={30} width={90} />
            <Text style={{ fontWeight: 'bold', color: Colors.text }}>
              BUSINESS
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            marginTop: 20,
          }}
        >
          <MaterialCommunityIcons name="plus" size={24} color="grey" />
          <MaterialCommunityIcons name="magnify" size={24} color="grey" />
          <Switch
            value={false}
            //onValueChange={(val) => console.log(val)}
            disabled={false}
            activeText={'onine'}
            inActiveText={'offline'}
            circleSize={30}
            barHeight={2}
            circleBorderWidth={3}
            backgroundActive={'green'}
            backgroundInactive={'gray'}
            circleActiveColor={'#30a566'}
            circleInActiveColor={'#fff'}
            changeValueImmediately={true}
            //renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
            changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
          //  innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
            outerCircleStyle={{}} // style for outer animated circle
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
            switchBorderRadius={30} 
          />
         
        </View>
      </View>
      <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              color: Colors.text,
              textAlign: 'center',
            }}
          >
            CLOSED !
          </Text>
          <Text style={{ color: Colors.grey }}>
            Scheduled to open at 10:30 AM
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.grey,
              color: Colors.text,
              padding: 8,

              // borderWidth: 1,
              borderRadius: 18,
            }}
          >
            <Text style={{ color: Colors.text, textAlign: 'center' }}>
              Check Order History
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Orders

// <TouchableOpacity
//   style={{
//     width: '40%',
//     height: '30%',
//     padding: 4,
//     fontSize: 6,
//     borderRadius: 20,
//     backgroundColor: '#d83b01',
//   }}
// >
//   <Text style={{ color: Colors.white }}>{isOnline}</Text>
// </TouchableOpacity>
