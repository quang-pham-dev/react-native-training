import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import './rn-addons';
import * as Font from 'expo-font';

Font.loadAsync({
  Inter_Bold: require('assets/fonts/Inter-Bold.ttf'),
  Inter_400Regular: require('assets/fonts/Inter-Regular.ttf'),
  Inter_500Medium: require('assets/fonts/Inter-Medium.ttf'),
  Inter_600SemiBold: require('assets/fonts/Inter-SemiBold.ttf')
});

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage
});

export default StorybookUIRoot;
