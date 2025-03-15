import { NavigationContainer } from '@react-navigation/native';
import "./global.css";
import Tabs from './src/tabs/_layout'
import OfflineNotice from './src/components/OfflineNotice';

export default function App() {
  return (
    <NavigationContainer>
      <OfflineNotice />
      <Tabs />
    </NavigationContainer>
  );
}