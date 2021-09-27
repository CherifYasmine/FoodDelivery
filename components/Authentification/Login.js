import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Login =({navigation})=>{
  return(
    <View style={styles.container}>
        <Text style={styles.loginTitle}>Login</Text>
        <Text style={styles.txt}>Add your details to Login</Text>
        <TextInput
        style={styles.input}
        placeholder='Your Email'
        placeholderTextColor="#7071744F"
      />
      <TextInput
        style={styles.inputP}
        placeholder='Your Password'
        placeholderTextColor="#7071744F"
      />
      <TouchableHighlight onPress={() =>navigation.navigate('FirstWelcome')} style={styles.loginTp}>
        <Text style={styles.loginBtn} >Login</Text>
      </TouchableHighlight>
      <TouchableOpacity onPress={() =>navigation.navigate('ResetPassword')}>
        <Text style={styles.fp}>Forgot Your Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.fp2}>Or Login With</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={() =>navigation.navigate('FirstWelcome')} style={styles.loginfb}>
        <Text style={styles.loginFbBtn} >
            <Text style={styles.fbIcon}>
                <Icon size={20} name='facebook-square'></Icon>
            </Text>
            <Text style={styles.logFb}>   Login With Facebook</Text>
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() =>navigation.navigate('FirstWelcome')} style={styles.loginggl}>
        <Text style={styles.loginFbBtn} >
            <Text style={styles.fbIcon}>
                <Icon size={20} name='google'></Icon>
            </Text>
            <Text style={styles.logFb}>   Login With Google</Text>
        </Text>
      </TouchableHighlight>
      <Text style={styles.accSign}>
          <Text style={styles.acc}>Don't Have an Account?</Text>
            <Text style={styles.sign} onPress={() =>navigation.navigate('SignUp')}> Sign Up</Text>
          
          
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
  fp:{
      textAlign:'center',
      color:'#B6B7B7',
      marginTop:15,
      fontSize:12
  },
  fp2:{
    textAlign:'center',
    color:'#B6B7B7',
    marginTop:22,
    fontSize:12
  },
  loginfb:{
    marginTop:25,
    width:350,
    marginLeft:30,
    borderRadius:350/2,
    backgroundColor:'#1778F2',
    height:50
  },
  loginggl:{
    marginTop:25,
    width:350,
    marginLeft:30,
    borderRadius:350/2,
    backgroundColor:'#db3236',
    height:50
  },
  loginFbBtn:{
    textAlign:'center',
    fontSize:18,
    color:'white',
    marginTop:8,
    fontWeight:'bold'
  },
  fbIcon:{
      marginRight:10
  },
  logFb:{
      marginLeft:10
  },
  accSign:{
      textAlign:'center',
      marginTop:150,
      fontSize:13
  },
  acc:{
    color:'#4A4B4DA9'
  },
  sign:{
     color:'#FC6011',
     fontWeight:'bold' ,
  }
})
export default Login;