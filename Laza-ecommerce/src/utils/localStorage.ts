import AsyncStorage from '@react-native-async-storage/async-storage';

export const get = async (key: string) => await AsyncStorage.getItem(key);

export const set = async (key: string, data: string) => await AsyncStorage.setItem(key, data);

export const remove = async (key: string) => await AsyncStorage.removeItem(key);

export const setJSON = (key: string, data: any) => set(key, JSON.stringify(data));

export const getJSON = <T = any>(key: string): T | null => {
  const data = get(key);
  return typeof data === 'string' ? JSON.parse(data) : null;
};

export default { get, set, remove, setJSON, getJSON };
