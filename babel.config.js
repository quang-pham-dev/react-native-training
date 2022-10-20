module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@fonts': './src/assets/fonts',
          '@images': './src/assets/images',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@configs': './src/configs',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@themes': './src/themes',
          '@types': './src/types',
        },
      },
    ],
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    'react-native-reanimated/plugin', // Reanimated plugin has to be listed last
  ],
}
