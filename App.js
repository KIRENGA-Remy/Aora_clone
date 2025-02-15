import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Users from './src/pages/Users'
import "./global.css";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' options={{ headerShown: false}} component={Home} />
        <Stack.Screen name='Users' component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}