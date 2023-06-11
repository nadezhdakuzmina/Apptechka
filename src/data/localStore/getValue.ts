import AsyncStorage from '@react-native-async-storage/async-storage';

export const getValue = (key: string) => AsyncStorage.getItem(key);
