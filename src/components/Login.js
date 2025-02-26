import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function Login() {
  return (
    <View className="flex justify-center items-center h-screen">
      <Text className="text-red-400 text-lg font-bold">Login</Text>
      <Link href={'/home'} className='text-xl hover:underline text-green-500 p-2'>Go to home</Link>
    </View>
  );
}
