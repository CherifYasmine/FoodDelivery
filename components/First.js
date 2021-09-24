import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
const First =({ navigation })=>{
  return(
    <View style={styles.container}>
      <Image style={styles.mealImg} source={require('../assets/images/Meal.png')} />
      <Text style={styles.ttl}>
          <Text style={styles.mealText}>Meal </Text>
          <Text style={styles.monkeyText}>Monkey</Text>
      </Text>
      <Text style={styles.fd}>FOOD DELIVERY</Text>
      <Text style={styles.txtD}>Discover the best foods from over 1.000 restaurants and fast delivery to your doorstep.</Text>
      {/* <View style={styles.loginButton}>
        
      </View> */}
      <TouchableOpacity style={styles.loginButton} onPress={() =>
        navigation.navigate('Login')
      }>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity  >
      <TouchableOpacity onPress={() =>
        navigation.navigate('SignUp')
      } style={styles.signUpButton}>
        <Text style={styles.signUp}>Create An Account</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'white'
  },
  mealImg:{
      height:120,
      width:120,
      justifyContent:'center',
      marginTop:220,
      marginLeft:130
  },
  ttl:{
      textAlign:'center',
      fontSize:25
  },
  mealText:{
      color:'#FC6011',
  },
  monkeyText:{
    color:'#4A4B4D',
  },
 fd:{
    textAlign:'center',
    fontSize:11,
    color:'#B6B7B7',
 },
 txtD:{
  textAlign:'center',
  fontSize:12,
  color:'#B6B7B7',
  marginLeft:40,
  marginRight:40,
  marginTop:40,

 },
 loginButton:{
  marginTop:40,
  alignItems:'center',
  backgroundColor:'#FC6011',
  width:300,
  height:50,
  marginLeft:50,
  borderRadius:300/2,
  color:'black'

},
login:{
  color:'white',
  textAlign:'center',
  marginTop:10,
  fontSize:15,
  fontWeight:'bold'
},
signUpButton:{
  marginTop:10,
  alignItems:'center',
  borderColor:'#FC6011',
  borderWidth:1,
  width:300,
  height:50,
  marginLeft:50,
  borderRadius:300/2,
},
signUp:{
  color:'#FC6011',
  textAlign:'center',
  marginTop:10,
  fontSize:15,
  fontWeight:'bold'
}
})
export default First;