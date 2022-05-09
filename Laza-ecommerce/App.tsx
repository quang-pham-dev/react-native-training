// Root Navigation of the app
import * as React from 'react';
import RootNavigation from 'navigation/RootNavigator';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
// Hooks
import useFonts from 'hooks/useFonts';
// Stack navigator

export default function App() {
  const [fontsLoaded, SetFontsLoaded] = React.useState(false);
  //
  // Load fonts
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!fontsLoaded) {
    return (
      <AppLoading startAsync={LoadFonts} onFinish={() => SetFontsLoaded(true)} onError={() => {}} />
    );
  }
  return (
    <>
      <RootNavigation />
    </>
  );
}
