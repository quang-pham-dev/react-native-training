import React from 'react';
import { AppState } from 'react-native';

// Debugging
import { connectToDevTools } from 'react-devtools-core';
import * as Sentry from 'sentry-expo';

// LIBS
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Components
import ErrorBoundary from 'components/ErrorBoundary';

// Hooks
import useFonts from 'hooks/useFonts';

// Navigation
import RootNavigator from 'navigation/RootNavigator';

// Context Provider
import { AuthContextProvider } from 'contexts/auth/AuthContext';

// Constants
import { SENTRY_DSN } from 'constants/Common';

// Config following expo documentation
Sentry.init({
  dsn: SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: true // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

if (__DEV__) {
  import('./ReactotronConfig.js');

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
    <AuthContextProvider>
      <SafeAreaProvider>
        <ErrorBoundary>
          <RootNavigator />
        </ErrorBoundary>
      </SafeAreaProvider>
    </AuthContextProvider>
  );
}

// Storybooks
// export { default } from './storybook';
