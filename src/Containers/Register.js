import React, { useState, useEffect } from 'react'
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

const Register = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.transparent,
        justifyContent: 'space-around',
      }}
    >
    <StatusBar
    animated={true}
    backgroundColor={Colors.transparent}
          />
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

      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
        }}
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
            Register your business
          </Text>

          <View style={{ alignItems: 'center' }}>
            <Text>Welcome to Instamart Business.We just need few of</Text>
            <Text>your details to start your business account</Text>
          </View>
        </View>
        <View
          style={[Common.center, { flex: 1, justifyContent: 'space-evenly' }]}
        >
          <Text style={{ marginLeft: 20 }}>
            Enter your registered phone number
          </Text>
          <TextInput
            placeholder="Enter your phone number"
            style={[
              Common.textInput,
              { margin: 15, borderRadius: 12, borderColor: 'silver',borderWidth:.6 },
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
            onPress={() => navigate('VerifyCode')}
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
          <Text style={{ marginTop: 20 }}>Already registered? </Text>
          <TouchableOpacity onPress={()=>navigate('Login')}>
            <Text style={{ color: Colors.success, marginTop: 20 }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Register
