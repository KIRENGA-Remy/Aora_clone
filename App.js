import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/(tabs)/Home';
import Users from './src/pages/Users'
import "./global.css";
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import Signup from './src/pages/Signup';
import Login from './src/pages/Login';
import Bookmark from './src/(tabs)/Bookmark';
import Create from './src/(tabs)/Create';
import Profile from './src/(tabs)/Profile';

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  },[fontsLoaded, error])

  if(!fontsLoaded){
    return null;
  }
  if(!fontsLoaded && !error){
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' options={{ headerShown: false}} component={Home} />
        <Stack.Screen name='Bookmark' options={{ headerShown: false }} component={Bookmark} />
        <Stack.Screen name='Create' options={{ headerShown: false}} component={Create} />
        <Stack.Screen name='Profile' options={{ headerShown: false}} component={Profile} />
        <Stack.Screen name='Users' component={Users} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}