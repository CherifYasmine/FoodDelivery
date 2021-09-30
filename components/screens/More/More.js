import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements'

const More = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.greeting}>More</Text>
        <Text style={styles.cart}>
          <Icon size={26} name="shopping-cart"></Icon>
        </Text>
      </View>
      <View style={styles.cont}>
        <View style={styles.moreContainer}>
          <View style={styles.iconContainer}>
            <Icon color={'#FC6011'} style={styles.icon} name="wallet" type='ionicon' size={25}/>
          </View>
          <Text style={styles.textContainer}>Payment Details</Text>
          <TouchableHighlight underlayColor={'transparent'} style={styles.iconMoreContainer}>
            <Icon color={'#FC6011'} style={styles.iconMore} name="chevron-forward" type='ionicon' size={25}/>
          </TouchableHighlight>
        </View>
        <View style={styles.moreContainer}>
          <View style={styles.iconContainer}>
            <Icon color={'#FC6011'} style={styles.icon} name="cart" type='ionicon' size={25}/>
          </View>
          <Text style={styles.textContainer}>My Orders</Text>
          <TouchableHighlight underlayColor={'transparent'} style={styles.iconMoreContainer}>
            <Icon color={'#FC6011'} style={styles.iconMore} name="chevron-forward" type='ionicon' size={25}/>
          </TouchableHighlight>
        </View>
        <View style={styles.moreContainer}>
          <View style={styles.iconContainer}>
            <Icon color={'#FC6011'} style={styles.icon} name="notifications" type='ionicon' size={25}/>
          </View>
          <Text style={styles.textContainer}>Notifications</Text>
          <TouchableHighlight underlayColor={'transparent'} style={styles.iconMoreContainer}>
            <Icon color={'#FC6011'} style={styles.iconMore} name="chevron-forward" type='ionicon' size={25}/>
          </TouchableHighlight>
        </View>
        <View style={styles.moreContainer}>
          <View style={styles.iconContainer}>
            <Icon color={'#FC6011'} style={styles.icon} name="mail" type='ionicon' size={25}/>
          </View>
          <Text style={styles.textContainer}>Inbox</Text>
          <TouchableHighlight underlayColor={'transparent'} style={styles.iconMoreContainer}>
            <Icon color={'#FC6011'} style={styles.iconMore} name="chevron-forward" type='ionicon' size={25}/>
          </TouchableHighlight>
        </View>
        <View style={styles.moreContainer}>
          <View style={styles.iconContainer}>
            <Icon color={'#FC6011'} style={styles.icon} name="information" type='ionicon' size={25}/>
          </View>
          <Text style={styles.textContainer}>About Us</Text>
          <TouchableHighlight underlayColor={'transparent'} style={styles.iconMoreContainer}>
            <Icon color={'#FC6011'} style={styles.iconMore} name="chevron-forward" type='ionicon' size={25}/>
          </TouchableHighlight>
        </View>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    marginTop: 20,
    height: 600,
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
    marginLeft: 280,
    marginTop:3
  },
  cont:{
    margin:30
  },
  moreContainer:{
    height:100,
    width:'100%', 
    backgroundColor:'#E8E9E9',
    marginTop:20,
    borderRadius:10,
    flexDirection: 'row',
  },
  iconContainer:{
    height:60,
    width:60,
    borderRadius:30,
    backgroundColor: '#E8E9E9',
    marginTop:'5%',
    marginLeft:'5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon:{
    marginTop:17,
    marginLeft:3
  },
  textContainer:{
    color:'#5A5858',
    fontSize:18,
    marginTop:'10%',
    fontWeight:'bold',
    marginLeft:'7%',
    width:'50%'
  },
  iconMoreContainer:{
    backgroundColor:'#E8E9E9',
    height:50,
    width:50,
    borderRadius:25,
    marginLeft:'12%',
    marginTop:'7%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  iconMore:{
    marginTop:12,
    marginLeft:7 
  }
  
});
export default More;
