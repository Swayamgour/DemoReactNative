// src/utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveToken = async token => {
  try {
    await AsyncStorage.setItem('authToken', token)
  } catch (e) {
    console.error('Failed to save token:', e)
  }
}

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('authToken')
  } catch (e) {
    console.error('Failed to load token:', e)
    return null
  }
}
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('authToken')
  } catch (e) {
    console.error('Failed to remove token:', e)
  }
}
