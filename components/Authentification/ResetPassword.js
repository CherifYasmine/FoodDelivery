import React from 'react';
import {View, Text, StyleSheet, TextInput,TouchableHighlight} from 'react-native'
const ResetPassword = ({navigation}) => {
    return(
        <View style={styles.container}>
           <Text style={styles.txt}>Reset Password</Text>
           <Text style={styles.txt2}>Please enter your email to receive a link to create a new password via email.</Text> 
           <TextInput
        style={styles.input}
        value='Your Email'
      />
      <TouchableHighlight onPress={() =>navigation.navigate('OtpSent')} style={styles.loginTp}>
        <Text style={styles.loginBtn} >Send</Text>
      </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop:60,
    },
    txt:{
        fontSize:27,
        textAlign: 'center',
        color:'#4A4B4DA9',
        fontWeight:'bold'
    },
    txt2:{
        textAlign: 'center',
        color:'#B6B7B7',
        marginLeft:40,
        marginRight:40,
        marginTop:15,
        fontFamily:'Metropolis Semibold'
    },
    input:{
        backgroundColor:'#E8E9E9',
        marginTop:60,
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
})
export default ResetPassword;