// Root Navigation of the app
import * as React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
// Hooks
import useFonts from 'hooks/useFonts';
// Stack navigator
import AuthStack from 'navigation/AuthStackNavigator';
import AppStack from 'navigation/AppStackNavigator';

export default function App() {
  const [fontsLoaded, SetFontsLoaded] = React.useState(false);
  //
  const isAuthenticated = true;
  // Load fonts
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!fontsLoaded) {
    return (
      <AppLoading startAsync={LoadFonts} onFinish={() => SetFontsLoaded(true)} onError={() => {}} />
    );
  }

  return <SafeAreaProvider>{isAuthenticated ? <AppStack /> : <AuthStack />}</SafeAreaProvider>;
}
