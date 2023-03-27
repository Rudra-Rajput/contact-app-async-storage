import AsyncStorage from "@react-native-async-storage/async-storage";


const setSomething = async (value) => {
    try {
        await AsyncStorage.setItem('cretensial', value)
      } catch (e) {
       console.log(e);
      }
};

const getSomething = async () => {
    try {
        await AsyncStorage.getItem('cretensial')
      } catch (e) {
       console.log(e);
      }
};

const removeSomething = async (value) => {
    try {
        await AsyncStorage.removeItem(value)
      } catch (e) {
       console.log(e);
      }
};

export {setSomething, getSomething, removeSomething};