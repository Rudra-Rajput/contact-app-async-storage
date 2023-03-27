import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import Button from '../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

let contacts = [];

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async () => {
    if (name.length > 0) {
      let tempContact = [];
      contacts = [];
      let x = JSON.parse(await AsyncStorage.getItem('CONTACTS'));
      tempContact = x;
      tempContact?.map(item => {
        contacts.push(item);
      });
      contacts.push({name: name, number: number});
      await AsyncStorage.setItem('CONTACTS', JSON.stringify(contacts));
      navigation.navigate('Home');
    }
    else{
        alert('All fields are required');
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
        Create Contact
      </Text>
      <View style={{marginHorizontal: '5%', marginTop: '10%'}}>
        <View>
          <TextInput
            label="Enter Your Name"
            value={name}
            onChangeText={txt => setName(txt)}
          />
        </View>
        <View style={{marginTop: '5%'}}>
          <TextInput
            label="Mobile Number"
            keyboardType="numeric"
            maxLength={10}
            value={number}
            onChangeText={txt => setNumber(txt)}
          />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleSubmit()}
        style={{marginTop: '10%'}}>
        <Button title="SAVE CONTACT" />
      </TouchableOpacity>
    </View>
  );
};

export default Contact;
