import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { images } from '../constants'

export default function Home(){
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View style={{ width: 'full', justifyContent: 'center', alignItems: 'center', height: 'full', marginTop: 32}}>
          <Image 
          source={images.logo}
          resizeMode='contain'
          style={{ width: '130px', height: '84px'}}
          />
          <Image 
          source={images.cards}
          resizeMode='contain'
          style={{ maxWidth: '380px', width: '100%', height: '300px'}}
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilities with {" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image 
            source={images.path}
            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
            resizeMode='contain'
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}