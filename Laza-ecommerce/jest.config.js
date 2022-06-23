module.exports = {
  preset: 'jest-expo',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js'
  },
  testPathIgnorePatterns: ['/node_modules/'],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './node_modules/@react-native-async-storage/async-storage/jest/async-storage-mock.js'
  ],

  setupFilesAfterEnv: ['<rootDir>/src/__mocks__/globalMock.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!src/hooks/*',
    '!src/api/*',
    '!src/contexts/*',
    '!src/navigation/**',
    '!src/**/*.stories.tsx'
  ],
  coverageReporters: ['json', 'html']
};
