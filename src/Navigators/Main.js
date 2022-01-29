import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BusinessInsights, ExampleContainer, Orders } from '@/Containers'
import { Colors } from '../Theme/Variables'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.success,
        tabBarInactiveTintColor: Colors.grey,
      }}
    >
      <Tab.Screen
        name="Business Insights"
        component={BusinessInsights}
        screenOptions={{
          headerShown: false,
        }}
        options={{
          title: 'Business',
          //tabBarIconStyle: { display: 'none' },
         // tabBarLabelPosition: 'beside-icon',
          tabBarIcon: tabInfo => {
            return (
              <MaterialCommunityIcons name="home" size={24} color={tabInfo.focused ? Colors.success : Colors.grey} />
            )
          },
         
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
         // tabBarIconStyle: { display: 'none' },
         // tabBarLabelPosition: 'beside-icon',
         tabBarIcon: tabInfo => {
          return (
            <MaterialCommunityIcons name="note" size={24} color={tabInfo.focused ? Colors.success : Colors.grey} />
          )
        },
       
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
