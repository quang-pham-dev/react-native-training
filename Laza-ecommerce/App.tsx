import 'expo-dev-client';
import React from 'react';
// Debugging
import { connectToDevTools } from 'react-devtools-core';

// LIBS
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Hooks
import useFonts from 'hooks/useFonts';

// Navigation
import RootNavigator from 'navigation/RootNavigator';

// Context Provider
import AuthProvider from 'context/AuthContext';

if (__DEV__) {
  connectToDevTools({
    host: 'localhost',
    port: 8097
  });
}

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    // Load All resource async
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
