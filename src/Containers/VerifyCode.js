import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StatusBar,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Brand } from '@/Components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors, FontSize } from '../Theme/Variables'
import { Incubator } from 'react-native-ui-lib'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const VerifyCode = () => {
  const [timer, setTimer] = useState(29)
  const [toastVisible, setToastVisible] = useState(true)

  const icon = <FontAwesome5 name={'git'} solid />

  const { Toast } = Incubator

  
  
  //otp countdown
  const otpTimer = () => {
    setTimeout(() => {
      setTimer(timer - 1)
    }, 1000)
  }

  if (timer > 0) {
    otpTimer()
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.transparent }}>
      <StatusBar animated={true} backgroundColor={Colors.transparent} />
      <View
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <Brand />
      </View>
      <View style={{ flex: 2,justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            flex:1,
            backgroundColor: Colors.white,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height:'60%',
            width:'100%'
          }}
        >
          <Text
            style={{
              color: Colors.text,
              fontWeight: 'bold',
              fontSize: FontSize.regular,
            }}
          >
            Verify the code <FontAwesome5 name={'times'} brand size={15} />
          </Text>
          <Text>We have sent 6 digit of code to your phone</Text>
          <Text>number.Enter it here to verify it's you</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <TextInput style={styles.inputCode}></TextInput>
            <TextInput style={styles.inputCode}></TextInput>
            <TextInput style={styles.inputCode}></TextInput>
            <TextInput style={styles.inputCode}></TextInput>
            <TextInput style={styles.inputCode}></TextInput>
            <TextInput style={styles.inputCode}></TextInput>
          </View>
          <View
            style={{ flexDirection: 'row', position: 'relative', top: -20 }}
          >
            <TouchableOpacity onPress={() => setTimer(30)}>
              <Text style={{ color: Colors.success }}>Resend </Text>
            </TouchableOpacity>
            <Text>{`the code (${timer} seconds)`}</Text>
          </View>
          <Toast
            
            visible={toastVisible}
            position="bottom"
            message="error code"
            centerMessage={true}
            style={{
              width: '100%',
              marginBottom: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
            backgroundColor={Colors.orange}
            icon={<FontAwesome5 name={'times'} brand size={15} />}
            iconColor={Colors.msg}
            // style={{borderWidth: 1, borderColor: Colors.grey30}}
            // messageStyle={Typography.text80BO}
          />
          <Modal transparent={true} visible={false}>
            <View
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                opacity: 0.5,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator
                size={60}
                animated={true}
                color={Colors.success}
              />
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default VerifyCode

const styles = StyleSheet.create({
  inputCode: {
    width: 45,
    height: 50,
    borderRadius: 6,
    borderColor: 'silver',
    borderWidth: 0.5,
    margin: 4,
  },
})
