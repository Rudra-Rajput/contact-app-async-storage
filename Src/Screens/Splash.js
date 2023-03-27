import { View, Image, StatusBar } from 'react-native';
import React,{ useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
        getData()
    }, 2000);
  })

  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    // const password = await AsyncStorage.getItem('PASSWORD');

    if (email !== null) {
        navigation.navigate('Home');
    }
    else {
        navigation.navigate('Login');
    }

   }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <StatusBar backgroundColor={'#FFFFFF'}/>
       <Image source={require('../Assets/Logo.png')}
          style={{width: '80%', height: 100}}
       />
    </View>
  )
}

export default Splash;