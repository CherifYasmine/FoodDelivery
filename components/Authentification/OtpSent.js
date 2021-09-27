import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
const OtpSent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>We have sent an OTP to your email</Text>
      <Text style={styles.txt2}>Please check your email</Text>
      <Text style={styles.txt3}>continue to reset your password</Text>
      <View style={styles.inputs}>
        <TextInput style={styles.input} placeholder="*"
          placeholderTextColor="#7071744F"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="*"
          placeholderTextColor="#7071744F"></TextInput>
        <TextInput style={styles.input} placeholder="*"
          placeholderTextColor="#7071744F"></TextInput>
        <TextInput style={styles.input} placeholder="*"
          placeholderTextColor="#7071744F"></TextInput>
      </View>

      <TouchableHighlight
        onPress={() => navigation.navigate('NewPassword')}
        style={styles.loginTp}>
        <Text style={styles.loginBtn}>Next</Text>
      </TouchableHighlight>
      <Text style={styles.accSign}>
        <Text style={styles.acc}>Didn't Receive?</Text>
        <Text
          style={styles.sign}
          onPress={() => navigation.navigate('OtpSent')}>
          {' '}
          Click here!
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  inputs: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 20,
    marginTop: 50,
  },
  txt: {
    fontSize: 27,
    textAlign: 'center',
    color: '#4A4B4DA9',
    fontWeight: 'bold',
    marginLeft: 40,
    marginRight: 40,
  },
  txt2: {
    textAlign: 'center',
    color: '#B6B7B7',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 15,
    fontFamily: 'Metropolis Semibold',
  },
  txt3: {
    textAlign: 'center',
    color: '#B6B7B7',
    marginLeft: 40,
    marginRight: 40,
    fontFamily: 'Metropolis Semibold',
  },
  input: {
    backgroundColor: '#E8E9E9',
    // marginTop:60,
    color: '#B6B7B7E3',
    width: 60,
    height: 60,
    borderRadius: 20 / 2,
    marginLeft: 30,
    textAlign: 'center',
  },
  loginTp: {
    marginTop: 40,
    width: 350,
    marginLeft: 30,
    borderRadius: 350 / 2,
    backgroundColor: '#FC6011',
    height: 50,
  },
  loginBtn: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    marginTop: 8,
    fontWeight: 'bold',
  },
  accSign: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 13,
  },
  acc: {
    color: '#4A4B4DA9',
  },
  sign: {
    color: '#FC6011',
    fontWeight: 'bold',
  },
});
export default OtpSent;
