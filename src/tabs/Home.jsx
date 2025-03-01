import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { Redirect, router } from 'expo-router'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'
import { StatusBar } from 'expo-status-bar'

export default function Home(){
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
      <View className="w-full justify-center min-h-[85vh] items-center">
          <Image 
          source={images.logo}
          resizeMode='contain'
          style={{ width: '130px', height: '84px' }}
          />
          <Image 
          source={images.cards}
          resizeMode='contain'
          style={{ maxWidth: '380px', width: '100%', height: '300px' }}
          />
          <View style={{ position: 'relative', marginTop: '20px'}}>
            <Text style={{color: '#FFFFFF', fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
              Discover Endless Possibilities with {" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image 
            source={images.path}
            // className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
            style={{ width: '136px', height: '15px', position: 'absolute', bottom: '-6px', right: '-8px'}}
            resizeMode='contain'
            />
          </View>
          <Text style={{ color: '#aaa', fontSize: 20, fontWeight: '600', textAlign: 'center', paddingVertical: '24px'}}>
            Where creativity meets innovation, embark on a journey of limitless exploration with Aora
          </Text>
          <CustomButton 
          title="Continue with Email"
          handlePress={() => router.push('/Login')}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}