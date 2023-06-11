import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeValue = (key: string, value: string) => AsyncStorage.setItem(key, value);
