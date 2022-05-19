module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', 'svg', 'jpg', 'jpeg', 'png', 'gif'],
          alias: {
            '@src': './src',
            '@assets': './src/assets',
            '@api': './src/api',
            '@components': './src/components',
            '@context': './src/context',
            '@constants': './src/constants',
            '@hooks': './src/hooks',
            '@types': './src/types',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@styles': './src/styles',
            '@utils': './src/utils',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
