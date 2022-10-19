import {Platform} from 'react-native'

export enum PLATFORM_TYPE {
  IOS = 'ios',
  ANDROID = 'android',
}

// The function check platform
export const isIOS = () => Platform.OS === PLATFORM_TYPE.IOS
