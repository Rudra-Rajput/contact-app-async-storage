import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import Button from '../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('EMAIL', email);
      await AsyncStorage.setItem('PASSWORD', password);
      console.log('saved');
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Text
        style={{
          marginTop: '5%',
          fontSize: 22,
          fontWeight: '800',
          color: '#000000',
          textAlign: 'center',
        }}>
        Log In Here
      </Text>
      <View style={{marginHorizontal: '5%', marginTop: '10%'}}>
        <View>
          <TextInput
            label="Enter Your Email"
            value={email}
            onChangeText={txt => setEmail(txt)}
          />
        </View>
        <View style={{marginTop: '5%'}}>
          <TextInput
            label="Enter Your Paasword"
            keyboardType="numeric"
            value={password}
            onChangeText={txt => setPassword(txt)}
          />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleSubmit()}
        style={{marginTop: '10%'}}>
        <Button title="LOG IN" />
      </TouchableOpacity>
    </View>
  );
};

export default Login;
