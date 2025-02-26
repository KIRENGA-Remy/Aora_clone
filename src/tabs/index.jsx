import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Home from './Home'
import Bookmark from './Bookmark'
import Create from './Create'
import Profile from './Profile'

const Tab = createBottomTabNavigator()

export default function Tabs(){
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color}) => {
        let iconName;
        if(route.name === "Home"){
          iconName = focused ? "home" : "home-outline";
        } else if(route.name === "Bookmark"){
          iconName = focused ? "bookmark" : "bookmark-outline";
        } else if(route.name === "Create"){
          iconName = focused ? "create" : "create-outline";
        } else if(route.name === "Profile"){
          iconName = focused ? "person" : "person-outline";
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray'
    })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Bookmark' component={Bookmark} />
      <Tab.Screen name='Create' component={Create} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}