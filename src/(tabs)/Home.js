import { View, Text } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

export default function Home(){
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className="text-xl font-pblack text-black">Home</Text>
      <StatusBar style='auto' />
      <Link screen="Login">Go to Login</Link>
    </View>
  )
}