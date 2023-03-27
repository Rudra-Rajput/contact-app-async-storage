import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


const Button = (props) => {
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      colors={['#5f8aed', '#396ce3', '#0c4feb']}
      style={styles.linearGradient}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
    linearGradient: {
      width: '90%',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6
    },
    buttonText: {
       fontSize: 16,
       fontWeight: '500',
       color: '#FFFFFF',
       letterSpacing: 1,
       paddingVertical: 9,
    }
});
