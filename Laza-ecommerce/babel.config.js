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
            'src/*': './src/*',
            api: './src/api',
            assets: './src/assets',
            components: './src/components',
            constants: './src/constants',
            context: './src/context',
            hooks: './src/hooks',
            navigation: './src/navigation',
            screens: './src/screens',
            themes: './src/themes',
            types: './src/types',
            utils: './src/utils',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
