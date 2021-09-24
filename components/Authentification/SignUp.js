import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const SignUp =({navigation})=>{
  return(
    <View style={styles.container}>
        <Text style={styles.loginTitle}>Sign Up</Text>
        <Text style={styles.txt}>Add your details to Sign Up</Text>
        <TextInput
        style={styles.input}
        value='Name'
      />
      <TextInput
        style={styles.inputP}
        value='Email'
      />
      <TextInput
        style={styles.inputP}
        value='Mobile No'
      />
      <TextInput
        style={styles.inputP}
        value='Address'
      />
      <TextInput
        style={styles.inputP}
        value='Password'
      />
      <TextInput
        style={styles.inputP}
        value='Confirm Password'
      />
      <TouchableHighlight style={styles.loginTp}>
        <Text style={styles.loginBtn} >Sign Up</Text>
      </TouchableHighlight>
      <Text style={styles.accSign}>
          <Text style={styles.acc}>Already Have an Account?</Text>
          <Text onPress={() =>navigation.navigate('Login')} style={styles.sign}> Login</Text>
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'white'
  },
  loginTitle:{
      color:'#808185',
      fontSize:25,
      textAlign:'center',
      fontWeight:'bold',
      marginTop:80
  },
  txt:{
      textAlign:'center',
      color:'#B6B7B7',
      fontSize:13,
      fontWeight:'bold',
      marginTop:5
  },
  input:{
      backgroundColor:'#F5F8F8',
      marginTop:60,
      color:'#B6B7B7E3',
      width:350,
      borderRadius:350/2,
      marginLeft:30,
      textAlign:'center'
  },
  inputP:{
    backgroundColor:'#F5F8F8',
    marginTop:25,
    color:'#B6B7B7E3',
    width:350,
    borderRadius:350/2,
    marginLeft:30,
    textAlign:'center'
  },
  loginTp:{
      marginTop:25,
      width:350,
      marginLeft:30,
      borderRadius:350/2,
      backgroundColor:'#FC6011',
      height:50
  },
  loginBtn:{
      textAlign:'center',
      fontSize:20,
      color:'white',
      marginTop:8,
      fontWeight:'bold'

  },
  accSign:{
      textAlign:'center',
      marginTop:80,
      fontSize:13
  },
  acc:{
    color:'#4A4B4DA9'
  },
  sign:{
     color:'#FC6011',
     fontWeight:'bold' 
  }
})
export default SignUp;