import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    Inter_400Regular: require('assets/fonts/Inter-Regular.ttf'),
    Inter_500Medium: require('assets/fonts/Inter-Medium.ttf'),
    Inter_600SemiBold: require('assets/fonts/Inter-SemiBold.ttf')
  });

export default useFonts;
