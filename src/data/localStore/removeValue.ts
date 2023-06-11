import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeValue = (key: string) => AsyncStorage.removeItem(key);
