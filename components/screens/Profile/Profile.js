import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Profile = () => {
  const [user, setUser] = useState({
    image: require('../../../assets/images/user.png'),
    firstName:'Yasmine',
    lastName : 'Cherif',
    email:'yasmine@gmail.com',
    mobileNo: '54565507',
    address: 'La Marsa'
  })
  return (
    <ScrollView vertical={true}style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.greeting}>Profile</Text>
        <Text style={styles.cart}>
          <Icon size={24} name="shopping-cart"></Icon>
        </Text>
      </View>
      <View style={styles.profileGeneral}>
        <Image style={styles.profileImage} source={user.image}></Image>
        <Text style={styles.helloName}>Hi there {user.firstName}!</Text>
        <TouchableHighlight underlayColor={'transparent'}>
          <Text style={styles.signOut}>Sign out</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.containerInfos}>
        <View style={styles.containerInput}>
          <Text style={styles.containerName}>Name</Text>
          <TextInput style={styles.inputName} placeholderTextColor="transparent" defaultValue={user.firstName + ' ' + user.lastName} />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.containerName}>Email</Text>
          <TextInput style={styles.inputName} placeholderTextColor="transparent" defaultValue={user.email} />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.containerName}>Mobile No</Text>
          <TextInput style={styles.inputName} placeholderTextColor="transparent" defaultValue={user.mobileNo} />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.containerName}>Address</Text>
          <TextInput style={styles.inputName} placeholderTextColor="transparent" defaultValue={user.address} />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.containerName}>Password</Text>
          <TextInput style={styles.inputName} placeholderTextColor="transparent" defaultValue='*****************' />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.containerName}>Confirm Paswword</Text>
          <TextInput style={styles.inputName} placeholderTextColor="transparent" defaultValue='*****************' />
        </View>
        <TouchableHighlight underlayColor={'transparent'} style={styles.saveBtn}>
          <Text style={styles.save}>Save</Text>
        </TouchableHighlight>
      </View>
      
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    marginTop: 20,
    height: 600,
    marginBottom:20
  },
  title: {
    flexDirection: 'row',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 25,
  },
  cart: {
    marginLeft: 270,
  },
  profileGeneral:{
    marginLeft:'15%',
    marginRight:'15%',
    marginTop:30,
  },
  profileImage:{
    width:100,
    height:100,
    marginLeft:'35%',
    borderRadius:50,
    borderColor:'black',
    borderWidth:0.5,   
  },
  helloName:{
    textAlign:'center',
    fontSize:17,
    color: '#4A4B4D',
    fontWeight:'bold',
    marginTop:15
  },
  signOut:{
    textAlign:'center',
    color:'#FC6011'
  },
  containerInfos:{
    padding:20,
  },
  containerInput:{
    width:'100%',
    height:60,
    backgroundColor:'#E8E9E9',
    borderRadius:100,
    marginTop:20
  },
  containerName:{
    fontSize:13,
    color: '#B6B7B7E3',
    fontWeight:'bold',
    marginLeft:40,
    marginTop:10
  },
  inputName:{
    marginLeft:37,
    color:'#4A4B4D',
    marginTop:-10
  },
  saveBtn:{
    backgroundColor:'#FC6011',
    marginTop:20,
    width:'100%',
    height:45,
    borderRadius:100
  },
  save:{
    textAlign:'center',
    color:'white',
    marginTop:5,
    fontSize:20,
    fontWeight:'bold',
    
  }
});
export default Profile;
