import AsyncStorage from '@react-native-async-storage/async-storage';
import { get, remove, set } from 'utils/localStorage';

jest.mock('react-native', () => ({
  AsyncStorage: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    multiSet: jest.fn(),
    multiRemove: jest.fn(),
    clear: jest.fn(),
  },
}));

// fixtures
const VALUE_OBJECT = { x: 1 };
const VALUE_STRING = JSON.stringify(VALUE_OBJECT);

beforeEach(() => {
  // @ts-ignore
  AsyncStorage.getItem.mockReturnValue(Promise.resolve(VALUE_STRING));
});

afterEach(() => jest.clearAllMocks());

test('get', async () => {
  const value = await get('dataKey');
  expect(value).toEqual(VALUE_STRING);
});

test('set', async () => {
  await set('dataKey', JSON.stringify(VALUE_OBJECT));
  expect(AsyncStorage.setItem).toHaveBeenCalledWith('dataKey', VALUE_STRING);
});

test('remove', async () => {
  await remove('dataKey');
  expect(AsyncStorage.removeItem).toHaveBeenCalledWith('dataKey');
});
