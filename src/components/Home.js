import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

export default function Home(){
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className="text-xl font-semibold text-black">Home</Text>
    </View>
  )
}