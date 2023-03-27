import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Home = ({navigation}) => {
  const [list, setList] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    const contacts = await AsyncStorage.getItem('CONTACTS');
    setList(JSON.parse(contacts));
  };

  const handleDelete = async (index) => {
   const tempData = list;
   const selectedData = tempData.filter((item, ind) => {
    return ind != index;
   });
   setList(selectedData);
   await AsyncStorage.setItem('CONTACTS', JSON.stringify(selectedData));
  };

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('EMAIL', null);
    await AsyncStorage.removeItem('PASSWORD', null);
    navigation.navigate('Login');
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <View style={{marginHorizontal: '5%', marginVertical: '5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 25,
            fontWeight: '700',
            letterSpacing: 1,
          }}>
          Contacts
        </Text>
       <TouchableOpacity activeOpacity={0.5} onPress={()=>handleLogOut()}>
          <MaterialIcons name='logout' size={35} color='red'/>
       </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={{
                  backgroundColor: '#e1e2e3',
                  paddingVertical: 14,
                  flexDirection: 'row',
                  marginVertical: '2%',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 17,
                    fontWeight: '400',
                    marginLeft: '3%',
                  }}>
                  {item.name.toUpperCase()}
                </Text>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 17,
                    fontWeight: '400',
                    marginLeft: '5%',
                  }}>
                  {item.number}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={()=>handleDelete(index)}
                  style={{position: 'absolute', right: 10}}>
                  <MaterialCommunityIcons  name='delete' color={'red'} size={30}/>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Contact')}
        style={{width: '40%', position: 'absolute', bottom: 20, right: 10}}>
        <Button title="ADD CONTACT" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
