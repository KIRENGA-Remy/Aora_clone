import { View, Text } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'

export default function Login(){
  return (
    <View>
      <Link screen="Signup">Go to Signup</Link>
    </View>
  )
}