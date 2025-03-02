import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router';

export default function Layout(){
  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false}} />
      <Stack.Screen name='auth' options={{ headerShown: false}} />
      <Stack.Screen name='tabs' options={{ headerShown: false}} />
      <Stack.Screen name='/search/[query]' options={{ headerShown: false}} />
    </Stack>
  )
}