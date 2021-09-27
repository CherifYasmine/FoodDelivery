import React from 'react';
import {View, Text, StyleSheet, TextInput,TouchableHighlight} from 'react-native'
const NewPassword = ({navigation}) => {
    return(
        <View style={styles.container}>
           <Text style={styles.txt}>New Password</Text>
           <Text style={styles.txt2}>Please enter your new Password.</Text> 
           <TextInput
        style={styles.input}
        placeholder='New Password'
        placeholderTextColor="#7071744F"
      />
      <TextInput
        style={styles.input2}
        placeholder='Confirm Password'
        placeholderTextColor="#7071744F"
      />
      <TouchableHighlight onPress={() =>navigation.navigate('Login')} style={styles.loginTp}>
        <Text style={styles.loginBtn} >Next</Text>
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
    input2:{
        backgroundColor:'#E8E9E9',
        marginTop:20,
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
export default NewPassword;