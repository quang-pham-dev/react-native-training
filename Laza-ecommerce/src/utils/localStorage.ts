import AsyncStorage from '@react-native-async-storage/async-storage';

export const get = async (key: string) => await AsyncStorage.getItem(key);

export const set = async (key: string, data: string) => await AsyncStorage.setItem(key, data);

export const remove = async (key: string) => await AsyncStorage.removeItem(key);

export default { get, set, remove };
