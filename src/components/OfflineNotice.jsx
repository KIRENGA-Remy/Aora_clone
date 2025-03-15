import { View, Text, StyleSheet, Animated } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import React, { useEffect, useState } from 'react'

export default function OfflineNotice(){
    const [isConnected, setIsConnected] = useState(true);
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected)
        })
        return () => unsubscribe();
    }, [])

    useEffect(() => {
        if(!isConnected){
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start();
        }
    }, [isConnected]);

    if (isConnected) return null;
  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
        <Text style={styles.text}>You're offline. Check your internet connection.</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 50,
      left: 0,
      right: 0,
      backgroundColor: 'red',
      padding: 10,
      alignItems: 'center',
      zIndex: 1000, 
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
    },
  });