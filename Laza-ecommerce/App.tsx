import React from 'react';

// LIBS
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

// Hooks
import useFonts from 'hooks/useFonts';

// Navigation
import RootNavigator from 'navigation/RootNavigator';

// Context Provider
import AuthProvider from 'context/AuthContext';

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  // Load All resource async
  async function loadResourcesAndDataAsync() {
    try {
      await SplashScreen.preventAutoHideAsync();

      // Load fonts
      await useFonts();
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  }
  if (!appIsReady) {
    return (
      <AppLoading
        startAsync={loadResourcesAndDataAsync}
        onFinish={() => setAppIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
