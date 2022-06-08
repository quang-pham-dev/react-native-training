import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import '@testing-library/jest-dom';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.useFakeTimers();
global.window = {};
global.window = global;
