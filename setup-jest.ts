import * as ReactNative from 'react-native'
import 'react-native/Libraries/Utilities/__mocks__/BackHandler.js'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

// Mocking
jest.doMock('react-native', () => {
  // Extend ReactNative
  return Object.setPrototypeOf(
    {
      Dimensions: {
        get: jest.fn().mockReturnValue({width: 375, height: 812}),
      },
      BackHandler: require('react-native/Libraries/Utilities/__mocks__/BackHandler.js'),
      Linking: ReactNative.Linking,
    },
    ReactNative,
  )
})

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)
jest.mock('react-native-config', () => ({
  SIZE_MATTERS_BASE_WIDTH: 375,
  SIZE_MATTERS_BASE_HEIGHT: 812,
}))

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
