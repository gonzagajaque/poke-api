
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
  }
}


export const getData = async (valueString) => {
  try {
    const value = await AsyncStorage.getItem(valueString)
    if (value !== null) {
    }
  } catch (e) {
  }
}
