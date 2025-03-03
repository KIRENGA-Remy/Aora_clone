import { NavigationContainer } from '@react-navigation/native';
import "./global.css";
import Tabs from './src/tabs'

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}