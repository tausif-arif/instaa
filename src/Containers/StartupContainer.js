import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text, StatusBar } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'
import { Colors, FontSize } from '../Theme/Variables'
import { SafeAreaView } from 'react-native-safe-area-context'

const StartupContainer = () => {
  const { Common, Layout, Gutters, Fonts } = useTheme()

  const { t } = useTranslation()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <StatusBar
        animated={true}
        backgroundColor="#fff"
              />
      <View style={{ flex: 1.5,justifyContent:'flex-end',alignItems:'center'}}>
      
        <Brand />
        <Text style={{fontSize:20,fontWeight:'600',position:'relative',top:-80,color:'#000'}}>BUSINESS</Text>

      </View>
      <View style={{ flex:.8, justifyContent: 'flex-end',position:'relative',bottom:60 }}>
        <ActivityIndicator size={60} animated={true} color={Colors.success} />
      </View>
    </SafeAreaView>
  )
}

export default StartupContainer

// <View style={[Layout.fill, Layout.colCenter]}>
//
//       <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
//       <Text style={Fonts.textCenter}>{t('welcome')}</Text>
//     </View>
// <View><Text style={{flexDirection:'row'}}><Text style={Colors.primary}>Insta</Text><Text>Markt</Text>
// </Text>
// </View>
