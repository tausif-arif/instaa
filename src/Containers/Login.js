import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import { Colors, FontSize } from '../Theme/Variables'
import { navigate } from '@/Navigators/utils'
import PhoneInput from 'react-native-phone-number-input'

const Login = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const [shift, setShift] = useState(false)
  const [value, setValue] = useState('8956646756')
  const [formattedValue, setFormattedValue] = useState('')

  //const phoneInput = useRef<PhoneInput>(null);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.transparent,
        justifyContent: 'space-around',
      }}
    >
      <StatusBar animated={true} backgroundColor={Colors.transparent} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Brand />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            position: 'relative',
            top: -80,
            color: '#000',
          }}
        >
          BUSINESS
        </Text>
      </View>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
        }}
        behavior="height"
        enabled={shift}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: Colors.text,
              fontSize: FontSize.regular,
              marginTop: 12,
              fontWeight: 'bold',
            }}
          >
            Login to your account
          </Text>

          <View style={{ alignItems: 'center' }}>
            <Text>Welcome to Instamart Business.Enter your login</Text>
            <Text>details and start your business online</Text>
          </View>
        </View>
        <View
          style={[Common.center, { flex: 1, justifyContent: 'space-evenly' }]}
        >
          <Text style={{ marginLeft: 20 }}>
            Enter your registered phone number
          </Text>

          <PhoneInput
            //  ref={phoneInput}
            defaultValue={value}
            //  defaultCode="UK"
            //layout="first"
            // onChangeText={(text) => {
            //   setValue(text);
            // }}
            onChangeFormattedText={text => {
              setValue(text)
            }}
            containerStyle={[
              {
                marginVertical: 20,
                marginHorizontal: 18,
                borderRadius: 12,
                borderColor: 'silver',
                borderWidth: 0.6,
                padding: 0,
              },
            ]}
          />

          <TouchableOpacity
            style={{
              backgroundColor: Colors.success,
              width: '90%',
              padding: 15,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertcial: 20,
              marginHorizontal: 18,
              borderRadius: 12,
            }}
            onPress={() => navigate('Business Insights')}
          >
            <Text style={{ color: Colors.white, fontSize: 20 }}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.4,
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Text style={{ marginTop: 20 }}>Haven't registered yet? </Text>
          <TouchableOpacity onPress={() => navigate('Register')}>
            <Text style={{ color: Colors.success, marginTop: 20 }}>
              Registered Now
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login

// <TextInput
// placeholder="Enter your phone number"
// style={[
//   Common.textInput,
//   { margin: 15, borderRadius: 12, borderColor: 'silver',borderWidth:.6 },
// ]}
// onFocus={()=>setShift(true)}
// />
