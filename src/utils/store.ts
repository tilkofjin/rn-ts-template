import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store';

const getItem = async (
  key: string,
  options?: SecureStore.SecureStoreOptions | undefined
): Promise<string | null> => {
  const isAvailable = await SecureStore.isAvailableAsync()
  if (!isAvailable) {
    return AsyncStorage.getItem(key)
  }
  return SecureStore.getItemAsync(key, options)
}

const setItem = async (
  key: string,
  value: string,
  options?: SecureStore.SecureStoreOptions | undefined
): Promise<void> => {
  const isAvailable = await SecureStore.isAvailableAsync()
  if (!isAvailable) {
    return AsyncStorage.setItem(key, value)
  }
  return SecureStore.setItemAsync(key, value, options)
}

const removeItem = async (
  key: string,
  options?: SecureStore.SecureStoreOptions | undefined
): Promise<void> => {
  const isAvailable = await SecureStore.isAvailableAsync()
  if (!isAvailable) {
    return AsyncStorage.removeItem(key)
  }
  return SecureStore.deleteItemAsync(key, options)
}

const secureStore = {
  getItem,
  setItem,
  removeItem,
}

export default secureStore