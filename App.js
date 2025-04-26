import { NavigationContainer } from '@react-navigation/native';
import "./global.css";
import Tabs from './src/tabs/_layout'
import OfflineNotice from './src/components/OfflineNotice';
import Layout from './src/auth/_layout';
import Auth from './src/auth/_layout'

export default function App() {
  
  return (
    <NavigationContainer>
      <OfflineNotice />
      <Tabs />
      {/* <Auth/> */}
      {/* <Layout/> */}
    </NavigationContainer>
  );
}