import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator
import "./global.css";
import Tabs from './src/tabs'
import Login from './src/components/Login'
// import bookmark from './src/(tabs)/bookmark';
// import create from './src/(tabs)/create';
// import home from './src/(tabs)/home';
// import profile from './src/(tabs)/profile';
// import Layout from './src/(auth)/_layout';
// import Search from './src/search/[query]';
// import SignIn from './src/(auth)/sign-in';
// import SignUp from './src/(auth)/sign-up';

// const Stack = createStackNavigator(); // Initialize Stack

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="Bookmark" component={bookmark} />
        <Stack.Screen name="Create" component={create} />
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Profile" component={profile} />
        <Stack.Screen name="TabsLayout" component={Layout} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} /> */}
      {/* </Stack.Navigator> */}
      <Tabs />
    </NavigationContainer>
  );
}
