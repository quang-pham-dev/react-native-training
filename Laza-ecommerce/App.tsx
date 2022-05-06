// Root Navigation of the app
import * as React from 'react';
import RootNavigation from 'navigation/RootNavigator';
import 'react-native-gesture-handler';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import LoadingIndicator from 'components/Indicator';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <LoadingIndicator loadingSize={'large'} />;
  }
  return (
    <>
      <RootNavigation />
    </>
  );
}
